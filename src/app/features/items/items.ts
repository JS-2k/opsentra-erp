import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {

}

