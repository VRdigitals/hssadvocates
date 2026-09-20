export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#expertise' },
  { label: 'Meet Hashim', href: '#hashim-salem' },
  { label: 'Our Approach', href: '#our-approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'How We Work', href: '#how-we-work' },
]

export const mobileNavLinks: NavLink[] = navLinks
