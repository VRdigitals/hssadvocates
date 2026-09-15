export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#the-firm' },
  { label: 'Practice Areas', href: '#expertise' },
  { label: 'Our Team', href: '#hashim-salem' },
  { label: 'Contact', href: '#consultation' },
]

export const mobileNavLinks: NavLink[] = navLinks
