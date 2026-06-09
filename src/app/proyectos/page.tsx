import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, HeadingReveal, StaggerContainer, StaggerItem } from "@/components/animate";

const ALL_PROJECTS = [
  { title: "Casa Miraflores",      location: "Lima, Perú",       year: "2024", category: "Residencia Privada",    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", href: "/proyectos/casa-miraflores",      size: "large" },
  { title: "Penthouse San Isidro", location: "Lima, Perú",       year: "2024", category: "Apartamento de Lujo",   img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",  href: "/proyectos/penthouse-san-isidro", size: "normal" },
  { title: "Villa Chaclacayo",     location: "Lima, Perú",       year: "2023", category: "Casa de Campo",         img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",  href: "/proyectos/villa-chaclacayo",     size: "normal" },
  { title: "Oficina Corporativa",  location: "Miraflores, Lima", year: "2023", category: "Espacio Corporativo",   img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", href: "/proyectos/oficina",              size: "large" },
  { title: "Restaurante Noso",     location: "Barranco, Lima",   year: "2023", category: "Espacio Gastronómico",  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",  href: "/proyectos/restaurante-noso",     size: "normal" },
  { title: "Suite Hotel B",        location: "Barranco, Lima",   year: "2022", category: "Hospitalidad",          img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",  href: "/proyectos/hotel-b",              size: "normal" },
];

const largeProjects  = ALL_PROJECTS.filter((p) => p.size === "large");
const normalProjects = ALL_PROJECTS.filter((p) => p.size === "normal");

export default function ProyectosPage() {
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
              Proyectos
            </h1>
          </HeadingReveal>
        </div>

        {/* Large projects */}
        <div className="bg-[#171719]">
          {largeProjects.map((project, i) => (
            <FadeIn key={project.href} direction="none" delay={i * 0.1}>
              <Link href={project.href} className="group relative block overflow-hidden">
                <div className="relative h-[500px] md:h-[700px] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-10 left-8 md:left-12">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">
                    {project.category} · {project.year}
                  </p>
                  <h2
                    className="text-white text-3xl md:text-5xl uppercase leading-none mb-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-4">{project.location}</p>
                  <span className="text-white/60 text-xs uppercase tracking-widest group-hover:text-[#C9A84C] transition-colors duration-300">
                    + Descubrir
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Normal projects grid */}
        <StaggerContainer className="bg-[#171719] grid md:grid-cols-2 lg:grid-cols-3 gap-px">
          {normalProjects.map((project) => (
            <StaggerItem key={project.href}>
              <Link href={project.href} className="group relative block overflow-hidden">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-8 left-6">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-1">{project.category}</p>
                  <h3
                    className="text-white text-2xl uppercase leading-none"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-xs mt-1">{project.location}</p>
                  <div className="w-0 group-hover:w-8 h-px bg-[#C9A84C] mt-3 transition-all duration-300" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <section className="bg-[#0e0e0e] px-6 md:px-12 py-20 text-center">
          <FadeUp>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-4">¿Tienes un proyecto?</p>
          </FadeUp>
          <HeadingReveal delay={0.15}>
            <h2
              className="text-white text-4xl md:text-6xl uppercase leading-none mb-8"
              style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
            >
              Trabajemos<br />Juntos
            </h2>
          </HeadingReveal>
          <FadeUp delay={0.3}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-xs uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            >
              Contactar →
            </Link>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </>
  );
}
