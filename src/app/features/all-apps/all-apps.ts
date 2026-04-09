import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

type MenuGroupKey = 'sales' | 'finance' | 'operations' | 'core';

interface MenuGroup {
  key: MenuGroupKey;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-all-apps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-apps.html',
  styleUrl: './all-apps.css',
})
export class AllApps {
  readonly groups: MenuGroup[] = [
    {
      key: 'core',
      title: 'Core',
      description: 'Dashboard, contacts, and master data',
      icon: 'ri-apps-2-line',
      accent: 'app-card--slate',
    },
    {
      key: 'sales',
      title: 'Sales',
      description: 'Quotes, invoices, and customer follow-up',
      icon: 'ri-shopping-bag-3-line',
      accent: 'app-card--blue',
    },
    {
      key: 'finance',
      title: 'Finance',
      description: 'Payments, recurring billing, and credit notes',
      icon: 'ri-wallet-3-line',
      accent: 'app-card--emerald',
    },
    {
      key: 'operations',
      title: 'Operations',
      description: 'Delivery challans, inventory, and dispatch',
      icon: 'ri-truck-line',
      accent: 'app-card--orange',
    },
  ];

  selected = new Set<MenuGroupKey>();

  constructor(private readonly router: Router) {
    this.loadSelection();
  }

  toggle(group: MenuGroupKey): void {
    if (this.selected.has(group)) {
      this.selected.delete(group);
      return;
    }

    this.selected.add(group);
  }

  selectAll(): void {
    this.selected = new Set(this.groups.map((group) => group.key));
  }

  saveSelection(): void {
    localStorage.setItem('opsentra-selected-menu-groups', JSON.stringify([...this.selected]));
    this.router.navigate(['/home']);
  }

  private loadSelection(): void {
    const raw = localStorage.getItem('opsentra-selected-menu-groups');
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as MenuGroupKey[];
      this.selected = new Set(parsed.filter((group): group is MenuGroupKey => this.groups.some((item) => item.key === group)));
    } catch {
      this.selected = new Set<MenuGroupKey>();
    }
  }
}
