import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type ModulePageData = {
  kicker: string;
  title: string;
  searchPlaceholder: string;
  subnav: string[];
  summary: string;
  cards: Array<{ label: string; value: string; note: string }>;
};

@Component({
  selector: 'app-module-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-page.html',
  styleUrl: './module-page.css',
})
export class ModulePage {
  readonly data: ModulePageData;

  constructor(route: ActivatedRoute) {
    this.data = route.snapshot.data['page'] as ModulePageData;
  }
}
