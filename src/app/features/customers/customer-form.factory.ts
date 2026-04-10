import { FormBuilder, Validators } from '@angular/forms';

export function createCustomerForm(fb: FormBuilder) {
  return fb.group({
    companyName: ['', Validators.required],
    contactPerson: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address: fb.group({
      street: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: [''],
      country: ['India', Validators.required],
    }),
    gstNumber: [''],
    panNumber: [''],
    customerType: ['Business', Validators.required],
    creditLimit: [0],
    paymentTerms: ['Net 30', Validators.required],
    notes: [''],
  });
}
