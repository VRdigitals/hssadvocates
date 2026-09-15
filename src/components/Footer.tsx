export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <img src="/brand/hss-logo-icon.png" alt="HSS" className="h-6 w-auto opacity-80" />
        <p className="text-[11px] uppercase tracking-[0.1em] text-paper/40">
          &copy; {new Date().getFullYear()} HSS Advocates &amp; Legal Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
