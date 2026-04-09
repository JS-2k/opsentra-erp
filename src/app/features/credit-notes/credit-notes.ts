import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-credit-notes',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './credit-notes.html',
  styleUrl: './credit-notes.css',
})
export class CreditNotes {

}

