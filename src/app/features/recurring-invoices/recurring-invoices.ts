import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-recurring-invoices',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './recurring-invoices.html',
  styleUrl: './recurring-invoices.css',
})
export class RecurringInvoices {

}

