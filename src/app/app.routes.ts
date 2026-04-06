import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Login } from './features/auth/login/login';
import { Customers } from './features/customers/customers';
import { Items } from './features/items/items';
import { Quotes } from './features/quotes/quotes';
import { DeliveryChallans } from './features/delivery-challans/delivery-challans';
import { Invoices } from './features/invoices/invoices';
import { PaymentsReceived } from './features/payments-received/payments-received';
import { RecurringInvoices } from './features/recurring-invoices/recurring-invoices';
import { CreditNotes } from './features/credit-notes/credit-notes';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login, title: 'Login | Opsentra ERP'},
    {path: 'home', component: Dashboard, title: 'Dashboard | Opsentra ERP'},
    {path: 'customers', component: Customers, title: 'Customers | Opsentra ERP'},
    {path: 'items', component: Items, title: 'Items | Opsentra ERP'},
    {path: 'quotes', component: Quotes, title: 'Quotes | Opsentra ERP'},
    {path: 'delivery-challans', component: DeliveryChallans, title: 'Delivery Challans | Opsentra ERP'},
    {path: 'invoices', component: Invoices, title: 'Invoices | Opsentra ERP'},
    {path: 'payments-received', component: PaymentsReceived, title: 'Payments Received | Opsentra ERP'},
    {path: 'recurring-invoices', component: RecurringInvoices, title: 'Recurring Invoices | Opsentra ERP'},
    {path: 'credit-notes', component: CreditNotes, title: 'Credit Notes | Opsentra ERP'},
];
