export interface NavItem {
  labelKey: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { labelKey: 'nav.features', href: '/features' },
  { labelKey: 'nav.pricing', href: '/pricing' },
  { labelKey: 'nav.faq', href: '/faq' },
  { labelKey: 'nav.roadmap', href: '/roadmap' },
];

export const downloadUrl = '#download';
