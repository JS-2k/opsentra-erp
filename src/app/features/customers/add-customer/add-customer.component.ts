import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() title = 'Add Customer';
  @Input() heading = 'Create a new customer profile';
  @Input() description = 'Keep the form focused and easy to scan while you add customer details.';
  @Input() submitLabel = 'Create Customer';
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
}
