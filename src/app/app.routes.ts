import { Routes } from '@angular/router';
import { MainLayouts } from './layouts/main-layouts/main-layouts';
import { Dashboard } from './features/dashboard/dashboard';
import { AllApps } from './features/all-apps/all-apps';
import { Login } from './features/auth/login/login';
import { Customers } from './features/customers/customers';
import { EditCustomerComponent } from './features/customers/edit-customer/edit-customer.component';
import { Items } from './features/items/items';
import { Quotes } from './features/quotes/quotes';
import { DeliveryChallans } from './features/delivery-challans/delivery-challans';
import { Invoices } from './features/invoices/invoices';
import { PaymentsReceived } from './features/payments-received/payments-received';
import { RecurringInvoices } from './features/recurring-invoices/recurring-invoices';
import { CreditNotes } from './features/credit-notes/credit-notes';
import { Mail } from './features/mail/mail';
import { ModulePage } from './features/module-page/module-page';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login, title: 'Login | Opsentra ERP'},
    {path: 'apps', component: AllApps, title: 'Menu Setup | Opsentra ERP'},
    {
        path: '',
        component: MainLayouts,
        children: [
            {path: 'home', component: Dashboard, title: 'Dashboard | Opsentra ERP'},
            {path: 'customers', component: Customers, title: 'Customers | Opsentra ERP'},
            {path: 'customers/:id/edit', component: EditCustomerComponent, title: 'Edit Customer | Opsentra ERP'},
            {path: 'items', component: Items, title: 'Items | Opsentra ERP'},
            {path: 'quotes', component: Quotes, title: 'Quotes | Opsentra ERP'},
            {path: 'delivery-challans', component: DeliveryChallans, title: 'Delivery Challans | Opsentra ERP'},
            {path: 'invoices', component: Invoices, title: 'Invoices | Opsentra ERP'},
            {path: 'payments-received', component: PaymentsReceived, title: 'Payments Received | Opsentra ERP'},
            {path: 'recurring-invoices', component: RecurringInvoices, title: 'Recurring Invoices | Opsentra ERP'},
            {path: 'credit-notes', component: CreditNotes, title: 'Credit Notes | Opsentra ERP'},
            {
                path: 'accounting',
                component: ModulePage,
                title: 'Accounting | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Accounting',
                        title: 'Accounting Hub',
                        searchPlaceholder: 'Search journals, ledger, taxes...',
                        subnav: ['Journal Entries', 'Ledgers', 'Taxes', 'Reports'],
                        summary: 'Manage the financial backbone of the ERP with journals, ledgers, and tax flow.',
                        cards: [
                            { label: 'Journals', value: '22', note: 'Active accounting journals' },
                            { label: 'Ledger', value: '128', note: 'Posted ledger entries' },
                            { label: 'Taxes', value: '07', note: 'Configured tax rules' },
                        ],
                    },
                },
            },
            {
                path: 'expenses',
                component: ModulePage,
                title: 'Expenses | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Expenses',
                        title: 'Expense Management',
                        searchPlaceholder: 'Search expenses, claims, reimbursements...',
                        subnav: ['All Expenses', 'Claims', 'Approvals', 'Reimbursements'],
                        summary: 'Track employee expenses, approvals, and reimbursement flow in one place.',
                        cards: [
                            { label: 'Claims', value: '27', note: 'Submitted expense claims' },
                            { label: 'Approved', value: '19', note: 'Ready for reimbursement' },
                            { label: 'Pending', value: '08', note: 'Waiting for review' },
                        ],
                    },
                },
            },
            {path: 'mail', component: Mail, title: 'Mail | Opsentra ERP'},
            {
                path: 'crm',
                component: ModulePage,
                title: 'CRM | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'CRM',
                        title: 'Customer Relationship Management',
                        searchPlaceholder: 'Search leads, opportunities...',
                        subnav: ['Leads', 'Opportunities', 'Activities', 'Customers'],
                        summary: 'Track prospects, follow-ups, and pipeline activity in one place.',
                        cards: [
                            { label: 'Leads', value: '86', note: 'Open opportunities waiting on action' },
                            { label: 'Activities', value: '24', note: 'Calls, tasks, and reminders' },
                            { label: 'Conversion', value: '18%', note: 'This month pipeline close rate' },
                        ],
                    },
                },
            },
            {
                path: 'purchase',
                component: ModulePage,
                title: 'Purchase | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Purchase',
                        title: 'Purchase Management',
                        searchPlaceholder: 'Search purchase orders, vendors...',
                        subnav: ['Requests', 'Orders', 'Vendors', 'Bills'],
                        summary: 'Manage procurement, supplier orders, and buying follow-up.',
                        cards: [
                            { label: 'Orders', value: '41', note: 'Approved purchase orders' },
                            { label: 'Vendors', value: '19', note: 'Active supplier records' },
                            { label: 'Pending', value: '08', note: 'Orders waiting on receipt' },
                        ],
                    },
                },
            },
            {
                path: 'inventory',
                component: ModulePage,
                title: 'Inventory | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Inventory',
                        title: 'Stock & Warehouse',
                        searchPlaceholder: 'Search products, stock moves...',
                        subnav: ['Stock', 'Transfers', 'Warehouses', 'Lots'],
                        summary: 'Keep track of stock movement, warehouses, and availability.',
                        cards: [
                            { label: 'Items', value: '1.2k', note: 'Stocked product records' },
                            { label: 'Transfers', value: '52', note: 'Movement entries this week' },
                            { label: 'Low Stock', value: '14', note: 'Reorder alerts needing attention' },
                        ],
                    },
                },
            },
            {
                path: 'hr',
                component: ModulePage,
                title: 'HR | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'HR',
                        title: 'People Management',
                        searchPlaceholder: 'Search employees, leave, payroll...',
                        subnav: ['Employees', 'Attendance', 'Leaves', 'Payroll'],
                        summary: 'Handle employee records, attendance, leave requests, and payroll support.',
                        cards: [
                            { label: 'Employees', value: '73', note: 'Active employee profiles' },
                            { label: 'Leave', value: '09', note: 'Requests pending approval' },
                            { label: 'Attendance', value: '96%', note: 'Current month presence rate' },
                        ],
                    },
                },
            },
            {
                path: 'support',
                component: ModulePage,
                title: 'Support | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Support',
                        title: 'Support Center',
                        searchPlaceholder: 'Search tickets, chat, help articles...',
                        subnav: ['Tickets', 'Live Chat', 'Help Articles', 'SLA'],
                        summary: 'Handle customer support tickets, live chat, and help desk workflows.',
                        cards: [
                            { label: 'Open Tickets', value: '18', note: 'Waiting for action' },
                            { label: 'Resolved', value: '142', note: 'Closed this month' },
                            { label: 'SLA', value: '96%', note: 'On-time resolution rate' },
                        ],
                    },
                },
            },
            {
                path: 'reports',
                component: ModulePage,
                title: 'Reports | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Reports',
                        title: 'Reporting Center',
                        searchPlaceholder: 'Search reports, statements...',
                        subnav: ['Sales', 'Finance', 'Operations', 'Custom'],
                        summary: 'Review the business from a summary dashboard and export-ready reports.',
                        cards: [
                            { label: 'Sales', value: '12', note: 'Ready-made sales reports' },
                            { label: 'Finance', value: '09', note: 'Accounting and payment reports' },
                            { label: 'Exports', value: '05', note: 'Saved report exports' },
                        ],
                    },
                },
            },
            {
                path: 'settings',
                component: ModulePage,
                title: 'Settings | Opsentra ERP',
                data: {
                    page: {
                        kicker: 'Settings',
                        title: 'System Settings',
                        searchPlaceholder: 'Search users, company, preferences...',
                        subnav: ['Company', 'Users', 'Roles', 'Preferences'],
                        summary: 'Configure the ERP once and keep the system ready for all teams.',
                        cards: [
                            { label: 'Users', value: '14', note: 'Configured user accounts' },
                            { label: 'Roles', value: '06', note: 'Permission groups' },
                            { label: 'Company', value: '01', note: 'Active organization profile' },
                        ],
                    },
                },
            },
        ],
    },
];
