import { Component } from '@angular/core';
import { Sidebar } from "../../shared/sidebar/sidebar";

@Component({
  selector: 'app-main-layouts',
  standalone: true,
  imports: [Sidebar],
  templateUrl: './main-layouts.html',
  styleUrl: './main-layouts.css',
})
export class MainLayouts {

}
