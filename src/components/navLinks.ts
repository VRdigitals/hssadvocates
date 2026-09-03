export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'The Firm', href: '#the-firm' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Our Approach', href: '#our-approach' },
  { label: 'Hashim Salem', href: '#hashim-salem' },
  { label: 'Insights', href: '#insights' },
]

export const mobileNavLinks: NavLink[] = [
  ...navLinks,
  { label: 'Contact', href: '#contact' },
]
