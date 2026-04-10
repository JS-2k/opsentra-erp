import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CUSTOMER_DATA, Customer } from './customer-data';
import { createCustomerForm } from './customer-form.factory';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, AddCustomerComponent],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {
  customerForm: FormGroup;
  showCreateForm = false;
  currentPage = 1;
  readonly pageSize = 5;

  customers: Customer[] = CUSTOMER_DATA;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.customerForm = createCustomerForm(this.fb);
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
  }

  openCreateForm() {
    this.showCreateForm = true;
  }

  closeCreateForm() {
    this.showCreateForm = false;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.customers.length / this.pageSize));
  }

  get paginatedCustomers(): Customer[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.customers.slice(startIndex, startIndex + this.pageSize);
  }

  get paginationStart(): number {
    return this.customers.length === 0 ? 0 : (this.currentPage - 1) * this.pageSize + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.customers.length);
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

  openCustomer(customerId: string) {
    this.router.navigate(['/customers', customerId, 'edit']);
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log('Customer data:', this.customerForm.value);
      // Here you would typically send the data to a service
      // Reset form after submission
      this.customerForm.reset();
      this.showCreateForm = false;
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'text-emerald-600 bg-emerald-50';
      case 'Inactive':
        return 'text-slate-600 bg-slate-50';
      case 'Suspended':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  }
}
