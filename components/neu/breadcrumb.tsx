import Link from "next/link";

// Sichtbare Brotkrumen. Das passende BreadcrumbList-Schema liefert breadcrumbLd()
// aus lib/seo.ts — beides gehört auf jede Unterseite, damit Google die Struktur
// im Snippet abbilden kann.
export default function Breadcrumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Brotkrumennavigation" className="max-w-6xl mx-auto px-5 pt-24 pb-2">
      <ol className="flex flex-wrap items-center gap-2 text-[12px] text-white/30">
        <li>
          <Link href="/neu" className="hover:text-white/70 transition-colors">
            Startseite
          </Link>
        </li>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-white/15">/</span>
              {last ? (
                <span className="text-white/55">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-white/70 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
