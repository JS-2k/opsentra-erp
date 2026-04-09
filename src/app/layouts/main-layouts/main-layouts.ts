import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-main-layouts',
  standalone: true,
  imports: [Sidebar, RouterOutlet],
  templateUrl: './main-layouts.html',
  styleUrl: './main-layouts.css',
})
export class MainLayouts {}
