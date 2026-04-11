import { FormBuilder, Validators } from '@angular/forms';
import { InvoiceLineItem } from './invoice-data';

export function createInvoiceLineItem(fb: FormBuilder, item?: Partial<InvoiceLineItem>) {
  return fb.group({
    product: [item?.product ?? '', Validators.required],
    description: [item?.description ?? ''],
    quantity: [item?.quantity ?? 1, [Validators.required, Validators.min(1)]],
    rate: [item?.rate ?? 0, [Validators.required, Validators.min(0)]],
    discount: [item?.discount ?? 0, [Validators.required, Validators.min(0)]],
    taxPercent: [item?.taxPercent ?? 18, [Validators.required, Validators.min(0)]],
  });
}

export function createInvoiceForm(fb: FormBuilder) {
  return fb.group({
    invoiceNo: ['INV-2026-007', Validators.required],
    customerName: ['Nova Retail Solutions', Validators.required],
    issueDate: ['2026-04-11', Validators.required],
    dueDate: ['2026-05-11', Validators.required],
    amount: [48500, [Validators.required, Validators.min(0)]],
    tax: [8730, [Validators.required, Validators.min(0)]],
    discount: [1250, [Validators.required, Validators.min(0)]],
    shippingCharges: [250, [Validators.required, Validators.min(0)]],
    adjustment: [0],
    roundOff: [0],
    status: ['Draft', Validators.required],
    paymentMethod: ['Bank Transfer', Validators.required],
    salesPerson: ['Aman Verma', Validators.required],
    notes: ['Sample invoice ready for testing create, edit, and delete flows.'],
    items: fb.array([
      createInvoiceLineItem(fb, {
        product: 'Retail Starter Pack',
        description: 'Sample line item for invoice creation',
        quantity: 2,
        rate: 12000,
        discount: 500,
        taxPercent: 18,
      }),
    ]),
  });
}

export function calculateInvoiceBreakdown(rawValue: any) {
  const items = Array.isArray(rawValue?.items) ? rawValue.items : [];
  const subtotal = items.reduce((sum: number, item: InvoiceLineItem) => sum + Number(item.quantity) * Number(item.rate), 0);
  const discount = items.reduce((sum: number, item: InvoiceLineItem) => sum + Number(item.discount), 0);
  const tax = items.reduce((sum: number, item: InvoiceLineItem) => {
    const lineBase = Number(item.quantity) * Number(item.rate) - Number(item.discount);
    return sum + (lineBase * Number(item.taxPercent)) / 100;
  }, 0);
  const shippingCharges = Number(rawValue?.shippingCharges ?? 0);
  const adjustment = Number(rawValue?.adjustment ?? 0);
  const roundOff = Number(rawValue?.roundOff ?? 0);
  const amount = subtotal;
  const grandTotal = amount + tax + shippingCharges + adjustment - discount + roundOff;

  return {
    amount,
    tax,
    discount,
    shippingCharges,
    adjustment,
    roundOff,
    grandTotal,
  };
}

