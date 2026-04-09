import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

}

