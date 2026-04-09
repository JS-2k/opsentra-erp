import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-delivery-challans',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './delivery-challans.html',
  styleUrl: './delivery-challans.css',
})
export class DeliveryChallans {

}

