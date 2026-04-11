import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddInvoiceComponent } from '../add-invoice/add-invoice.component';
import { INVOICE_DATA, Invoice } from '../invoice-data';
import { createInvoiceForm, createInvoiceLineItem } from '../invoice-form.factory';

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AddInvoiceComponent],
  templateUrl: './edit-invoice.component.html',
})
export class EditInvoiceComponent {
  invoiceForm: FormGroup;
  invoice: Invoice | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.invoiceForm = createInvoiceForm(this.fb);

    const invoiceId = this.route.snapshot.paramMap.get('id');
    this.invoice = INVOICE_DATA.find((item) => item.id === invoiceId);

    if (this.invoice) {
      this.invoiceForm.patchValue({
        invoiceNo: this.invoice.invoiceNo,
        customerName: this.invoice.customerName,
        issueDate: this.invoice.issueDate,
        dueDate: this.invoice.dueDate,
        amount: this.invoice.amount,
        tax: this.invoice.tax,
        discount: this.invoice.discount,
        shippingCharges: this.invoice.shippingCharges,
        adjustment: this.invoice.adjustment,
        roundOff: this.invoice.roundOff,
        status: this.invoice.status,
        paymentMethod: this.invoice.paymentMethod,
        salesPerson: this.invoice.salesPerson,
        notes: this.invoice.notes,
      });

      const items = this.invoiceForm.get('items');
      if (items && 'clear' in items && 'push' in items) {
        const itemsArray = items as any;
        itemsArray.clear();
        this.invoice.items.forEach((lineItem) => {
          itemsArray.push(createInvoiceLineItem(this.fb, lineItem));
        });
      }
    }
  }

  goBack() {
    this.router.navigate(['/invoices']);
  }

  onSubmit() {
    if (this.invoiceForm.valid && this.invoice) {
      console.log('Updated invoice:', this.invoiceForm.value);
      this.router.navigate(['/invoices']);
    }
  }
}
