export interface Customer {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  customerType: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  outstandingAmount: number;
  lastTransaction: string;
}

export const CUSTOMER_DATA: Customer[] = [
  {
    id: 'CUST001',
    companyName: 'Prime Textiles Ltd',
    contactPerson: 'Rajesh Kumar',
    email: 'rajesh.kumar@primetextiles.com',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    state: 'Maharashtra',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 125000,
    lastTransaction: '2024-04-05',
  },
  {
    id: 'CUST002',
    companyName: 'Metro Garments Pvt Ltd',
    contactPerson: 'Priya Sharma',
    email: 'priya@metrogarments.in',
    phone: '+91 87654 32109',
    city: 'Delhi',
    state: 'Delhi',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 89000,
    lastTransaction: '2024-04-08',
  },
  {
    id: 'CUST003',
    companyName: 'Nova Retail Solutions',
    contactPerson: 'Amit Singh',
    email: 'amit@nova-retail.com',
    phone: '+91 76543 21098',
    city: 'Bangalore',
    state: 'Karnataka',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 45000,
    lastTransaction: '2024-04-03',
  },
  {
    id: 'CUST004',
    companyName: 'Global Traders',
    contactPerson: 'Sneha Patel',
    email: 'sneha@globaltraders.co',
    phone: '+91 65432 10987',
    city: 'Ahmedabad',
    state: 'Gujarat',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 0,
    lastTransaction: '2024-03-28',
  },
  {
    id: 'CUST005',
    companyName: 'Tech Solutions India',
    contactPerson: 'Vikram Rao',
    email: 'vikram@techsolutions.in',
    phone: '+91 54321 09876',
    city: 'Hyderabad',
    state: 'Telangana',
    customerType: 'Business',
    status: 'Inactive',
    outstandingAmount: 25000,
    lastTransaction: '2024-02-15',
  },
  {
    id: 'CUST006',
    companyName: 'Fashion Hub',
    contactPerson: 'Kavita Jain',
    email: 'kavita@fashionhub.com',
    phone: '+91 43210 98765',
    city: 'Pune',
    state: 'Maharashtra',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 67500,
    lastTransaction: '2024-04-07',
  },
  {
    id: 'CUST007',
    companyName: 'Retail Plus',
    contactPerson: 'Rohit Verma',
    email: 'rohit@retailplus.in',
    phone: '+91 32109 87654',
    city: 'Chennai',
    state: 'Tamil Nadu',
    customerType: 'Business',
    status: 'Active',
    outstandingAmount: 32000,
    lastTransaction: '2024-04-01',
  },
  {
    id: 'CUST008',
    companyName: 'Manufacturing Corp',
    contactPerson: 'Anjali Gupta',
    email: 'anjali@manufacturing.com',
    phone: '+91 21098 76543',
    city: 'Kolkata',
    state: 'West Bengal',
    customerType: 'Business',
    status: 'Suspended',
    outstandingAmount: 150000,
    lastTransaction: '2024-03-20',
  },
];
