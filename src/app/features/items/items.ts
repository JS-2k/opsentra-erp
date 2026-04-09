import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [Sidebar, RouterLink],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {

}

