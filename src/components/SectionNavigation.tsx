export default function SectionNavigation({ items }: { items: { label: string; href: string }[] }) {
  return <nav aria-label="On This Page" className="border-b border-[#CBD5D8] bg-[#F4F1EA] px-6 py-5 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3">
      <p className="text-sm font-bold text-[#102F46]">On This Page</p>
      {items.map(item => <a key={item.href} href={item.href} className="text-sm font-semibold text-[#28638F] underline decoration-[#CBD5D8] underline-offset-4 hover:decoration-current">{item.label}</a>)}
    </div>
  </nav>;
}
