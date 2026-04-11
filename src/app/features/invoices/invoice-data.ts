export interface InvoiceLineItem {
  product: string;
  description: string;
  quantity: number;
  rate: number;
  discount: number;
  taxPercent: number;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  customerName: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  tax: number;
  discount: number;
  shippingCharges: number;
  adjustment: number;
  roundOff: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
  paymentMethod: string;
  salesPerson: string;
  notes: string;
  items: InvoiceLineItem[];
}

export const INVOICE_DATA: Invoice[] = [
  {
    id: 'INV001',
    invoiceNo: 'INV-2026-001',
    customerName: 'Prime Textiles Ltd',
    issueDate: '2026-03-28',
    dueDate: '2026-04-27',
    amount: 62500,
    tax: 11250,
    discount: 1500,
    shippingCharges: 450,
    adjustment: -250,
    roundOff: 0,
    status: 'Sent',
    paymentMethod: 'Bank Transfer',
    salesPerson: 'Aman Verma',
    notes: 'Bulk fabric supply for March dispatch.',
    items: [
      { product: 'Premium Cotton Fabric', description: 'Width 58" and dyed batch', quantity: 120, rate: 480, discount: 1200, taxPercent: 18 },
      { product: 'Stitching Service', description: 'Custom stitching and finishing', quantity: 30, rate: 220, discount: 300, taxPercent: 5 },
    ],
  },
  {
    id: 'INV002',
    invoiceNo: 'INV-2026-002',
    customerName: 'Metro Garments Pvt Ltd',
    issueDate: '2026-03-30',
    dueDate: '2026-04-29',
    amount: 41800,
    tax: 7524,
    discount: 0,
    shippingCharges: 0,
    adjustment: 0,
    roundOff: 0,
    status: 'Paid',
    paymentMethod: 'UPI',
    salesPerson: 'Priya Sharma',
    notes: 'Uniform order completed and settled.',
    items: [
      { product: 'Uniform Shirts', description: 'Corporate uniforms', quantity: 80, rate: 420, discount: 0, taxPercent: 18 },
      { product: 'Logo Embroidery', description: 'Branding on left chest', quantity: 80, rate: 85, discount: 0, taxPercent: 12 },
    ],
  },
  {
    id: 'INV003',
    invoiceNo: 'INV-2026-003',
    customerName: 'Nova Retail Solutions',
    issueDate: '2026-04-02',
    dueDate: '2026-05-02',
    amount: 48500,
    tax: 8730,
    discount: 1250,
    shippingCharges: 320,
    adjustment: 0,
    roundOff: 0,
    status: 'Draft',
    paymentMethod: 'Bank Transfer',
    salesPerson: 'Aman Verma',
    notes: 'Pending final approval before sending.',
    items: [
      { product: 'Retail Fixtures', description: 'Display and shelving package', quantity: 12, rate: 3200, discount: 900, taxPercent: 18 },
      { product: 'Installation Support', description: 'Site fit-out assistance', quantity: 1, rate: 7500, discount: 350, taxPercent: 18 },
    ],
  },
  {
    id: 'INV004',
    invoiceNo: 'INV-2026-004',
    customerName: 'Global Traders',
    issueDate: '2026-03-18',
    dueDate: '2026-04-17',
    amount: 29700,
    tax: 5346,
    discount: 900,
    shippingCharges: 250,
    adjustment: 0,
    roundOff: 0,
    status: 'Overdue',
    paymentMethod: 'Cheque',
    salesPerson: 'Kavita Jain',
    notes: 'Payment reminder sent twice.',
    items: [
      { product: 'Packaging Material', description: 'Cartons and labels', quantity: 300, rate: 95, discount: 900, taxPercent: 18 },
    ],
  },
  {
    id: 'INV005',
    invoiceNo: 'INV-2026-005',
    customerName: 'Tech Solutions India',
    issueDate: '2026-04-06',
    dueDate: '2026-05-06',
    amount: 71600,
    tax: 12888,
    discount: 3200,
    shippingCharges: 0,
    adjustment: 150,
    roundOff: 0,
    status: 'Sent',
    paymentMethod: 'Bank Transfer',
    salesPerson: 'Rohit Verma',
    notes: 'Hardware and installation package.',
    items: [
      { product: 'Workstation Setup', description: 'Computer and desk bundle', quantity: 20, rate: 2990, discount: 2500, taxPercent: 18 },
      { product: 'Onsite Installation', description: 'Deployment support', quantity: 4, rate: 8200, discount: 700, taxPercent: 18 },
    ],
  },
  {
    id: 'INV006',
    invoiceNo: 'INV-2026-006',
    customerName: 'Fashion Hub',
    issueDate: '2026-04-08',
    dueDate: '2026-05-08',
    amount: 35600,
    tax: 6408,
    discount: 0,
    shippingCharges: 175,
    adjustment: 0,
    roundOff: 0,
    status: 'Draft',
    paymentMethod: 'Cash',
    salesPerson: 'Sneha Patel',
    notes: 'Sample invoice kept in draft for quick testing.',
    items: [
      { product: 'Spring Collection', description: 'Assorted apparel pack', quantity: 45, rate: 790, discount: 0, taxPercent: 18 },
      { product: 'Retail Bags', description: 'Branded shopping bags', quantity: 120, rate: 42, discount: 0, taxPercent: 5 },
    ],
  },
];
