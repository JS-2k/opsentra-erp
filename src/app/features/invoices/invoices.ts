import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { INVOICE_DATA, Invoice } from './invoice-data';
import { calculateInvoiceBreakdown, createInvoiceForm } from './invoice-form.factory';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddInvoiceComponent],
  templateUrl: './invoices.html',
  styleUrl: './invoices.css',
})
export class Invoices {
  invoiceForm: FormGroup;
  showCreateForm = false;
  currentPage = 1;
  readonly pageSize = 5;
  selectedInvoiceIds: string[] = [];

  invoices: Invoice[] = [...INVOICE_DATA];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.invoiceForm = createInvoiceForm(this.fb);
  }

  openCreateForm() {
    this.invoiceForm = createInvoiceForm(this.fb);
    this.showCreateForm = true;
  }

  closeCreateForm() {
    this.showCreateForm = false;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.invoices.length / this.pageSize));
  }

  get paginatedInvoices(): Invoice[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.invoices.slice(startIndex, startIndex + this.pageSize);
  }

  get paginationStart(): number {
    return this.invoices.length === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.invoices.length);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  goToPage(page: number) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  get selectedCount(): number {
    return this.selectedInvoiceIds.length;
  }

  isSelected(invoiceId: string): boolean {
    return this.selectedInvoiceIds.includes(invoiceId);
  }

  get allVisibleSelected(): boolean {
    return this.paginatedInvoices.length > 0 && this.paginatedInvoices.every((invoice) => this.isSelected(invoice.id));
  }

  toggleSelection(invoiceId: string, checked: boolean) {
    if (checked) {
      this.selectedInvoiceIds = Array.from(new Set([...this.selectedInvoiceIds, invoiceId]));
      return;
    }

    this.selectedInvoiceIds = this.selectedInvoiceIds.filter((id) => id !== invoiceId);
  }

  toggleVisibleSelection(checked: boolean) {
    const visibleIds = this.paginatedInvoices.map((invoice) => invoice.id);

    if (checked) {
      this.selectedInvoiceIds = Array.from(new Set([...this.selectedInvoiceIds, ...visibleIds]));
      return;
    }

    this.selectedInvoiceIds = this.selectedInvoiceIds.filter((id) => !visibleIds.includes(id));
  }

  clearSelection() {
    this.selectedInvoiceIds = [];
  }

  bulkUpdateStatus(status: Invoice['status']) {
    if (!this.selectedInvoiceIds.length) {
      return;
    }

    this.invoices = this.invoices.map((invoice) =>
      this.selectedInvoiceIds.includes(invoice.id)
        ? { ...invoice, status }
        : invoice,
    );
    this.clearSelection();
  }

  openInvoice(invoiceId: string) {
    this.router.navigate(['/invoices', invoiceId, 'edit']);
  }

  deleteInvoice(invoiceId: string) {
    this.bulkDeleteInvoices([invoiceId]);
  }

  bulkDeleteSelected() {
    this.bulkDeleteInvoices(this.selectedInvoiceIds);
  }

  private bulkDeleteInvoices(invoiceIds: string[]) {
    if (!invoiceIds.length) {
      return;
    }

    const invoicesToDelete = this.invoices.filter((invoice) => invoiceIds.includes(invoice.id));
    if (!invoicesToDelete.length) {
      return;
    }

    const label = invoicesToDelete.length === 1
      ? `Delete invoice ${invoicesToDelete[0].invoiceNo}?`
      : `Delete ${invoicesToDelete.length} selected invoices?`;

    if (!window.confirm(label)) {
      return;
    }

    this.invoices = this.invoices.filter((item) => !invoiceIds.includes(item.id));
    this.selectedInvoiceIds = this.selectedInvoiceIds.filter((id) => !invoiceIds.includes(id));

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    if (!this.invoices.length) {
      this.currentPage = 1;
    }
  }

  onSubmit() {
    if (!this.invoiceForm.valid) {
      return;
    }

    const formValue = this.invoiceForm.value;
    const totals = calculateInvoiceBreakdown(formValue);
    const nextId = `INV${String(this.invoices.length + 1).padStart(3, '0')}`;
    const invoice: Invoice = {
      id: nextId,
      invoiceNo: formValue.invoiceNo,
      customerName: formValue.customerName,
      issueDate: formValue.issueDate,
      dueDate: formValue.dueDate,
      amount: totals.amount,
      tax: totals.tax,
      discount: totals.discount,
      shippingCharges: totals.shippingCharges,
      adjustment: totals.adjustment,
      roundOff: totals.roundOff,
      status: formValue.status,
      paymentMethod: formValue.paymentMethod,
      salesPerson: formValue.salesPerson,
      notes: formValue.notes ?? '',
      items: formValue.items ?? [],
    };

    this.invoices = [invoice, ...this.invoices];
    this.invoiceForm = createInvoiceForm(this.fb);
    this.showCreateForm = false;
    this.currentPage = 1;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  }

  formatTotal(invoice: Invoice): string {
    const total =
      invoice.amount +
      invoice.tax +
      invoice.shippingCharges +
      invoice.adjustment -
      invoice.discount +
      invoice.roundOff;
    return this.formatCurrency(total);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Paid':
        return 'text-emerald-600 bg-emerald-50';
      case 'Sent':
        return 'text-blue-600 bg-blue-50';
      case 'Draft':
        return 'text-slate-600 bg-slate-50';
      case 'Overdue':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  }
}
