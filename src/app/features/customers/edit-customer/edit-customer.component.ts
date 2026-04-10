import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CUSTOMER_DATA, Customer } from '../customer-data';
import { createCustomerForm } from '../customer-form.factory';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, AddCustomerComponent],
  templateUrl: './edit-customer.component.html',
})
export class EditCustomerComponent {
  customerForm: FormGroup;
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.customerForm = createCustomerForm(this.fb);

    const customerId = this.route.snapshot.paramMap.get('id');
    this.customer = CUSTOMER_DATA.find((item) => item.id === customerId);

    if (this.customer) {
      this.customerForm.patchValue({
        companyName: this.customer.companyName,
        contactPerson: this.customer.contactPerson,
        email: this.customer.email,
        phone: this.customer.phone,
        address: {
          city: this.customer.city,
          state: this.customer.state,
          country: 'India',
        },
        customerType: this.customer.customerType,
      });
    }
  }

  goBack() {
    this.router.navigate(['/customers']);
  }

  onSubmit() {
    if (this.customerForm.valid && this.customer) {
      console.log('Updated customer:', this.customerForm.value);
      this.router.navigate(['/customers']);
    }
  }
}
