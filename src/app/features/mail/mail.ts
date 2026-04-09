import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mail.html',
  styleUrl: './mail.css',
})
export class Mail {}
