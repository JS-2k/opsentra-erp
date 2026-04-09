import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

type MenuGroupKey = 'core' | 'sales' | 'finance' | 'operations' | 'mail' | 'crm' | 'purchase' | 'inventory' | 'hr' | 'reports' | 'settings' | 'support';

interface MenuLink {
  label: string;
  route: string;
  icon: string;
}

interface MenuGroup {
  key: MenuGroupKey;
  title: string;
  links: MenuLink[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly groups: MenuGroup[] = [
    {
      key: 'core',
      title: 'Core',
      links: [
        { label: 'Customers', route: '/customers', icon: 'ri-group-line' },
        { label: 'Items', route: '/items', icon: 'ri-price-tag-3-line' },
      ],
    },
    {
      key: 'sales',
      title: 'Sales',
      links: [
        { label: 'Quotes', route: '/quotes', icon: 'ri-file-list-3-line' },
        { label: 'Invoices', route: '/invoices', icon: 'ri-file-paper-2-line' },
        { label: 'Payments', route: '/payments-received', icon: 'ri-wallet-line' },
      ],
    },
    {
      key: 'finance',
      title: 'Finance',
      links: [
        { label: 'Accounting', route: '/accounting', icon: 'ri-calculator-line' },
        { label: 'Expenses', route: '/expenses', icon: 'ri-receipt-line' },
        { label: 'Recurring', route: '/recurring-invoices', icon: 'ri-repeat-line' },
        { label: 'Credit Notes', route: '/credit-notes', icon: 'ri-file-text-line' },
      ],
    },
    {
      key: 'operations',
      title: 'Operations',
      links: [
        { label: 'Delivery Challans', route: '/delivery-challans', icon: 'ri-truck-line' },
      ],
    },
    {
      key: 'mail',
      title: 'Mail',
      links: [
        { label: 'Mail', route: '/mail', icon: 'ri-mail-line' },
      ],
    },
    {
      key: 'crm',
      title: 'CRM',
      links: [
        { label: 'CRM', route: '/crm', icon: 'ri-bubble-chart-line' },
      ],
    },
    {
      key: 'purchase',
      title: 'Purchase',
      links: [
        { label: 'Purchase', route: '/purchase', icon: 'ri-store-3-line' },
      ],
    },
    {
      key: 'inventory',
      title: 'Inventory',
      links: [
        { label: 'Inventory', route: '/inventory', icon: 'ri-archive-line' },
      ],
    },
    {
      key: 'hr',
      title: 'HR',
      links: [
        { label: 'HR', route: '/hr', icon: 'ri-team-line' },
      ],
    },
    {
      key: 'support',
      title: 'Support',
      links: [
        { label: 'Support', route: '/support', icon: 'ri-customer-service-2-line' },
      ],
    },
    {
      key: 'reports',
      title: 'Reports',
      links: [
        { label: 'Reports', route: '/reports', icon: 'ri-bar-chart-2-line' },
      ],
    },
    {
      key: 'settings',
      title: 'Settings',
      links: [
        { label: 'Settings', route: '/settings', icon: 'ri-settings-3-line' },
      ],
    },
  ];

  selectedGroups = new Set<MenuGroupKey>();
  searchQuery = '';

  constructor() {
    this.loadSelection();
  }

  get visibleGroups(): MenuGroup[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.groups
      .filter((group) => this.selectedGroups.has(group.key))
      .map((group) => ({
        ...group,
        links: query
          ? group.links.filter((link) => {
              const haystack = `${group.title} ${link.label}`.toLowerCase();
              return haystack.includes(query);
            })
          : group.links,
      }))
      .filter((group) => group.links.length > 0 || !query);
  }

  get hasVisibleResults(): boolean {
    return this.visibleGroups.length > 0;
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  private loadSelection(): void {
    const raw = localStorage.getItem('opsentra-selected-menu-groups');

    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw) as MenuGroupKey[];
      const validKeys = new Set(this.groups.map((group) => group.key));
      this.selectedGroups = new Set(parsed.filter((key) => validKeys.has(key)));
    } catch {
      this.selectedGroups = new Set<MenuGroupKey>();
    }
  }
}
