import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { calculateInvoiceBreakdown, createInvoiceLineItem } from '../invoice-form.factory';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-invoice.component.html',
})
export class AddInvoiceComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() title = 'New Invoice';
  @Input() heading = 'Create a new invoice';
  @Input() description = 'Build the invoice with line items, charges, and totals in one focused workspace.';
  @Input() submitLabel = 'Create Invoice';
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  draggingIndex: number | null = null;

  constructor(private fb: FormBuilder) {}

  get itemsArray(): FormArray {
    return this.form.get('items') as FormArray;
  }

  get breakdown() {
    return calculateInvoiceBreakdown(this.form.getRawValue());
  }

  addItemRow() {
    this.itemsArray.push(createInvoiceLineItem(this.fb, {
      product: 'New Item',
      quantity: 1,
      rate: 0,
      discount: 0,
      taxPercent: 18,
    }));
  }

  addBulkItems() {
    const rows = [
      { product: 'Service Pack', description: 'Placeholder bulk item', quantity: 1, rate: 5000, discount: 0, taxPercent: 18 },
      { product: 'Accessories', description: 'Placeholder bulk item', quantity: 2, rate: 850, discount: 100, taxPercent: 12 },
      { product: 'Support Hours', description: 'Placeholder bulk item', quantity: 4, rate: 1200, discount: 0, taxPercent: 18 },
    ];

    rows.forEach((row) => this.itemsArray.push(createInvoiceLineItem(this.fb, row)));
  }

  removeItemRow(index: number) {
    if (this.itemsArray.length <= 1) {
      this.itemsArray.at(0)?.reset({
        product: '',
        description: '',
        quantity: 1,
        rate: 0,
        discount: 0,
        taxPercent: 18,
      });
      return;
    }

    this.itemsArray.removeAt(index);
  }

  trackByItem(index: number, item: AbstractControl) {
    return item;
  }

  startDrag(index: number) {
    this.draggingIndex = index;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragStart(event: DragEvent, index: number) {
    this.startDrag(index);
    event.dataTransfer?.setData('text/plain', String(index));
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  dropRow(targetIndex: number) {
    if (this.draggingIndex === null || this.draggingIndex === targetIndex) {
      this.draggingIndex = null;
      return;
    }

    const source = this.draggingIndex;
    const control = this.itemsArray.at(source);
    this.itemsArray.removeAt(source);

    const adjustedTargetIndex = source < targetIndex ? targetIndex - 1 : targetIndex;
    this.itemsArray.insert(adjustedTargetIndex, control);
    this.draggingIndex = null;
  }

  endDrag() {
    this.draggingIndex = null;
  }

  lineTotal(control: AbstractControl): number {
    const value = (control as any).getRawValue ? (control as any).getRawValue() : control.value;
    const quantity = Number(value.quantity ?? 0);
    const rate = Number(value.rate ?? 0);
    const discount = Number(value.discount ?? 0);
    const taxPercent = Number(value.taxPercent ?? 0);
    const base = quantity * rate - discount;
    return base + (base * taxPercent) / 100;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  }
}

