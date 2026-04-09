import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-payments-received',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './payments-received.html',
  styleUrl: './payments-received.css',
})
export class PaymentsReceived {

}

