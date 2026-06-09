import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, HeadingReveal, StaggerContainer, StaggerItem } from "@/components/animate";

const CATEGORIES = [
  { label: "Dormitorios",    href: "/catalogo/dormitorios",    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80",    count: 24 },
  { label: "Salas",          href: "/catalogo/salas",          img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",          count: 18 },
  { label: "Comedores",      href: "/catalogo/comedores",      img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80",      count: 15 },
  { label: "Cocinas",        href: "/catalogo/cocinas",        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",        count: 12 },
  { label: "Closets",        href: "/catalogo/closets",        img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80",        count: 20 },
  { label: "Baños",          href: "/catalogo/banos",          img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",          count: 10 },
  { label: "Estudios",       href: "/catalogo/estudios",       img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80",       count: 8  },
  { label: "Exteriores",     href: "/catalogo/exteriores",     img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",     count: 14 },
  { label: "Revestimientos", href: "/catalogo/revestimientos", img: "https://images.unsplash.com/photo-1632148110234-20f11fed7a39?w=900&q=80", count: 22 },
  { label: "Accesorios",     href: "/catalogo/accesorios",     img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",     count: 30 },
];

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        {/* Page header */}
        <div className="bg-[#171719] px-6 md:px-12 py-16 border-b border-white/10">
          <FadeUp>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">ORIGEN STUDIO</p>
          </FadeUp>
          <HeadingReveal delay={0.1}>
            <h1
              className="text-white text-5xl md:text-7xl uppercase leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
            >
              Catálogo
            </h1>
          </HeadingReveal>
        </div>

        {/* Filter bar */}
        <div className="bg-[#0e0e0e] px-6 md:px-12 py-4 flex items-center gap-6 border-b border-white/10 overflow-x-auto">
          <span className="text-white/40 text-xs uppercase tracking-widest flex-shrink-0">Categorías:</span>
          {["Todos", ...CATEGORIES.map((c) => c.label)].map((cat) => (
            <button
              key={cat}
              className="text-white/60 hover:text-[#C9A84C] text-xs uppercase tracking-widest flex-shrink-0 transition-colors duration-200 whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category grid */}
        <StaggerContainer className="bg-[#171719] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.href}>
              <Link href={cat.href} className="group relative block overflow-hidden">
                <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.label}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p
                    className="text-white text-lg uppercase leading-none"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {cat.label}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{cat.count} productos</p>
                  <div className="w-0 group-hover:w-8 h-px bg-[#C9A84C] mt-2 transition-all duration-300" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Materials section */}
        <section className="bg-white px-6 md:px-12 py-20">
          <div className="max-w-xl mb-10">
            <FadeUp>
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">Materiales</p>
            </FadeUp>
            <HeadingReveal delay={0.1}>
              <h2
                className="text-[#171719] text-3xl md:text-5xl uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                Premium desde el origen
              </h2>
            </HeadingReveal>
          </div>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Roble Americano", desc: "Resistente y elegante" },
              { name: "Cedro del Inca",  desc: "Aromático y ligero" },
              { name: "Nogal Negro",     desc: "Oscuro y sofisticado" },
              { name: "Caoba Hondureña", desc: "Duradero y rico" },
            ].map((m) => (
              <StaggerItem key={m.name}>
                <div className="border-t border-[#171719]/20 pt-6 group">
                  <div className="w-6 h-px bg-[#C9A84C] mb-4 group-hover:w-10 transition-all duration-300" />
                  <p
                    className="text-[#171719] text-sm uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {m.name}
                  </p>
                  <p className="text-[#767676] text-xs">{m.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </main>
      <Footer />
    </>
  );
}
