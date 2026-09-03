const items = [
  'UAE Legal Representation',
  'Dispute Resolution',
  'Commercial Counsel',
  'Arabic / English',
]

export function AuthorityStrip() {
  return (
    <div className="relative z-10 border-t border-hairline">
      <ul className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-3 px-6 py-5 sm:flex sm:flex-wrap sm:items-center sm:gap-0 sm:py-0 md:px-10">
        {items.map((item, index) => (
          <li
            key={item}
            className={`text-[10px] font-medium uppercase tracking-[0.12em] text-paper/60 sm:h-14 sm:flex sm:items-center sm:px-6 sm:text-[11px] ${
              index === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-hairline'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
