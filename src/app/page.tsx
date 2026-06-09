"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";
import { FadeUp, FadeIn, HeadingReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/animate";
import { DraggableCarousel } from "@/components/draggable-carousel";

const CATEGORIES = [
  { label: "Iluminación",           href: "/catalogo/iluminacion",           img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" },
  { label: "Libreros",              href: "/catalogo/libreros",              img: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80" },
  { label: "Aparadores y Vitrinas", href: "/catalogo/aparadores",            img: "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=600&q=80" },
  { label: "Mesas",                 href: "/catalogo/mesas",                 img: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=600&q=80" },
  { label: "Mesas de Centro",       href: "/catalogo/mesas-centro",          img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80" },
  { label: "Sofás y Sillones",      href: "/catalogo/sofas",                 img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80" },
  { label: "Sillas y Taburetes",    href: "/catalogo/sillas",                img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80" },
  { label: "Cocinas",               href: "/catalogo/cocinas",               img: "/images/luxury_kitchen.png" },
  { label: "Revestimientos",        href: "/catalogo/revestimientos",        img: "https://images.unsplash.com/photo-1632148110234-20f11fed7a39?w=600&q=80" },
  { label: "Accesorios",            href: "/catalogo/accesorios",            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" },
];

const FEATURED_PROJECTS = [
  { title: "Casa Miraflores",      subtitle: "Residencia Privada",  img: "/images/wood_detail.png", href: "/proyectos/casa-miraflores" },
  { title: "Penthouse San Isidro", subtitle: "Apartamento de Lujo", img: "/images/luxury_living.png", href: "/proyectos/penthouse-san-isidro" },
];

const INDUSTRIAL_MATERIALS = [
  { id: "melamina", name: "Melamina (MDP)", img: "/images/wood_melamina_hd.png", desc: "El rey indiscutible para el ensamblaje de muebles modulares (clósets, cocinas y oficinas). Ya viene terminado, lo que evita pintura, y es muy fácil de instalar." },
  { id: "mdf", name: "MDF (Tablero de Fibra)", img: "/images/wood_mdf_hd.png", desc: "Usado ampliamente para muebles a medida, cajones y piezas que requieren formas curvas o molduras por su superficie uniforme." },
  { id: "triplex", name: "Triplex de Pino", img: "/images/wood_triplex_hd.png", desc: "Ideal para la parte trasera de los muebles (espaldarios) o fondos de cajones gracias a su increíble ligereza y resistencia." },
];

const SOLID_MATERIALS = [
  { id: "pino", name: "Pino", img: "/images/wood_pino_hd.png", desc: "La madera maciza más abundante y accesible. Muy usada para camas, repisas y mobiliario de estilo rústico y cálido." },
  { id: "flor-morado", name: "Flor Morado", img: "/images/wood_flor_morado_hd.png", desc: "Una de las mejores maderas nativas para carpintería de lujo. Semidura, muy estable y atractiva para interiores." },
  { id: "cedro", name: "Cedro y Roble", img: "/images/wood_cedro_hd.png", desc: "Utilizados para comedores, puertas y muebles que requieren una altísima durabilidad, resistencia estructural y acabados clásicos." },
];

const ALL_MATERIALS = [...INDUSTRIAL_MATERIALS, ...SOLID_MATERIALS];

function MaterialShowcase() {
  const [activeId, setActiveId] = useState<string>("melamina");
  const activeMaterial = ALL_MATERIALS.find(m => m.id === activeId) || ALL_MATERIALS[0];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-henge relative">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 mt-12 lg:mt-0 relative">
          {/* LEFT COLUMN (Title + Image Sticky + Description) - Span 5 cols */}
          <div className="lg:col-span-5 lg:col-start-1 flex flex-col self-start sticky top-[90px] lg:top-24 z-20 w-full bg-white pb-4 pt-6 lg:pt-0 lg:pb-0 lg:bg-transparent">
            <div className="w-full">
              <FadeUp className="mb-4 lg:mb-6">
                <div>
                  <p className="text-[#C9A84C] text-[10px] uppercase tracking-[0.2em] mb-4">Colección 2025</p>
                  <h2 className="text-[clamp(2.2rem,8vw,5rem)] font-condensed uppercase leading-[0.9] text-black break-words">
                    MADERA VIVA
                  </h2>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <div 
                  className="relative aspect-[16/9] lg:aspect-[4/5] w-full lg:w-[55%] overflow-hidden bg-[#e8e8e8] mb-4 ml-0 lg:ml-12 lg:translate-x-[15%] mt-4 lg:mt-[5%]"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMaterial.img}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeMaterial.img}
                        alt={activeMaterial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </FadeUp>
              
              {/* Static Technical Spec moved inside sticky container */}
              <div className="hidden lg:block w-full">
                <div className="w-full lg:w-[55%] lg:ml-12">
                  <FadeUp delay={0.2}>
                    <div className="pt-3 border-t border-[#e2e2e2]">
                      <div className="flex flex-col gap-1 items-start">
                        <div className="flex items-center gap-1.5">
                          <div className="w-[4px] h-[4px] bg-[#C9A84C]" />
                          <h4 className="text-[10px] text-black font-semibold uppercase tracking-[0.2em]">
                            Especificación Técnica
                          </h4>
                        </div>
                        <p className="text-[11px] leading-[1.5] text-justify text-[#767676] font-light italic">
                          En zonas húmedas como cocinas y baños, empleamos tableros RH (Resistentes a la Humedad) para garantizar su máxima durabilidad estructural.
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Giant Typography) - Span 6 cols, start at 7 */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col pt-4 lg:pt-0 h-full">
            <div className="flex flex-col h-full">
              {/* Desktop Descubrir Link */}
              <FadeUp delay={0.1}>
                <div className="hidden lg:flex justify-end pb-8">
                  <Link href="/catalogo" className="group relative flex items-center gap-3 text-black uppercase text-[12px] font-medium tracking-[0.05em]">
                    <div className="w-[8px] h-[8px] flex-shrink-0">
                      <svg viewBox="0 0 8 8" fill="currentColor" className="transition-transform duration-300 ease-in-out group-hover:rotate-90">
                        <path d="M3.5 0h1v8h-1zM0 3.5h8v1H0z" />
                      </svg>
                    </div>
                    <span className="transition-transform duration-300 ease-in-out group-hover:-translate-x-[6px]">
                      Descubrir
                    </span>
                  </Link>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="flex flex-col gap-16 lg:gap-24 lg:mt-0 pb-32">
                  {ALL_MATERIALS.map((item) => {
                    const isActive = activeId === item.id;
                    const cleanName = item.name.replace(/\s*\(.*?\)/, '');
                    
                    return (
                      <div 
                        key={item.id}
                        className="group cursor-pointer w-full text-left"
                        onClick={() => setActiveId(item.id)}
                        onMouseEnter={() => setActiveId(item.id)}
                      >
                        <h3 
                          className={`font-condensed uppercase transition-all duration-500 text-[clamp(2.2rem,8vw,5.5rem)] leading-[0.85] break-words ${
                            isActive 
                              ? 'text-black lg:translate-x-4' 
                              : 'text-[#e2e2e2] group-hover:text-[#b0b0b0]'
                          }`}
                        >
                          {cleanName}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>


              {/* Mobile Discover Link */}
              <div className="lg:hidden mt-10">
                <Link href="/catalogo" className="group relative flex items-center gap-3 text-black uppercase text-[12px] font-medium tracking-[0.05em]">
                  <div className="w-[8px] h-[8px] flex-shrink-0">
                    <svg viewBox="0 0 8 8" fill="currentColor" className="transition-transform duration-300 ease-in-out group-hover:rotate-90">
                      <path d="M3.5 0h1v8h-1zM0 3.5h8v1H0z" />
                    </svg>
                  </div>
                  <span className="transition-transform duration-300 ease-in-out group-hover:-translate-x-[6px]">
                    Descubrir
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* <PageLoader /> */}
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative w-full h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <video
              src="/7578540-uhd_3840_2160_30fps.mp4"
              poster="/images/wood_detail.png"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

          {/* Hero text — Idea A: Asymmetrical Split Layout */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end pb-[80px] px-[clamp(24px,5vw,80px)]">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 w-full">
              {/* Left Side: Giant Title */}
              <div className="flex-1">
                <motion.p
                  className="bg-gradient-to-r from-[#C9A84C] via-[#FFE58F] to-[#C9A84C] bg-clip-text text-transparent text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] mb-4 drop-shadow-[0_2px_10px_rgba(201,168,76,0.3)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Diseño a Medida
                </motion.p>

                <div className="overflow-hidden mb-[-10px]">
                  <motion.h1
                    className="text-white font-condensed uppercase text-[clamp(3rem,8vw,8rem)] leading-[0.85] tracking-[0.02em]"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.1, ease: [0.74, 0, 0.15, 0.99], delay: 1.5 }}
                  >
                    ORIGEN
                  </motion.h1>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    className="text-white font-condensed uppercase text-[clamp(3rem,8vw,8rem)] leading-[0.85] tracking-[0.02em]"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.1, ease: [0.74, 0, 0.15, 0.99], delay: 1.65 }}
                  >
                    STUDIO
                  </motion.h1>
                </div>
              </div>

              {/* Right Side: Description and Link */}
              <motion.div 
                className="flex-1 flex flex-col items-start md:items-end text-left md:text-right md:max-w-md pb-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                <p className="text-white/80 text-[12px] md:text-[13px] font-light tracking-[0.05em] leading-[1.8] mb-6">
                  Arquitectura interior y carpintería de autor. Creamos atmósferas únicas materializando tus ideas con precisión y elegancia.
                </p>
                <Link href="/catalogo" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-white hover:text-[#C9A84C] transition-colors duration-300 group">
                  <span className="text-[#C9A84C] group-hover:rotate-90 transition-transform duration-300 text-[14px] leading-none">+</span> Ver Proyectos
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div
              className="w-px bg-white"
              animate={{ height: [20, 44, 20] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: 20 }}
            />
          </motion.div>
        </section>

        {/* ── PRODUCTS HORIZONTAL DRAG SCROLL (HENGE STYLE) ── */}
        <section 
          className="bg-white overflow-hidden"
          style={{ paddingTop: 'clamp(120px, 25vh, 280px)', paddingBottom: 'clamp(120px, 25vh, 280px)' }}
        >
          {/* We use padding on the left to align with the grid container-henge, but let the right side scroll freely */}
          <DraggableCarousel>
            <div className="flex gap-4 md:gap-8 px-[clamp(24px,8vw,117px)] pb-10">
              {CATEGORIES.map((cat, i) => (
                <motion.div
                  key={cat.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex-shrink-0"
                >
                  {/* Note: we prevent click if dragging in the wrapper */}
                  <Link href={cat.href} className="group flex flex-col w-[60vw] sm:w-[220px] lg:w-[260px] xl:w-[290px] pointer-events-auto">
                    {/* Image Container - Vertical Rectangle, no filters */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#e8e8e8]">
                      <Image 
                        src={cat.img} 
                        alt={cat.label} 
                        fill 
                        draggable={false}
                        className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105 select-none" 
                      />
                    </div>
                    {/* Label under image - exactly 35px margin-top */}
                    <div className="mt-[35px] text-[#171719] uppercase flex items-center gap-3">
                      {/* Plus icon wrapper */}
                      <div className="w-[8px] h-[8px] flex-shrink-0">
                        <svg viewBox="0 0 8 8" fill="currentColor" className="transition-transform duration-300 ease-in-out group-hover:rotate-90">
                          <path d="M3.5 0h1v8h-1zM0 3.5h8v1H0z" />
                        </svg>
                      </div>
                      {/* Text span */}
                      <span className="text-[16px] font-light tracking-[0.03em] transition-transform duration-300 ease-in-out group-hover:-translate-x-[6px]">
                        {cat.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </DraggableCarousel>
        </section>

        {/* ── EDITORIAL 1: COLECCIÓN (Material Showcase) ── */}
        <MaterialShowcase />

        {/* ── VISUAL SEPARATOR ── */}
        <div className="w-full h-24 md:h-40 bg-white" />

        {/* ── EDITORIAL 2: LIBRO DE PROYECTOS (dark bg) ── */}
        <section className="bg-[#171719] grid md:grid-cols-2">
          <div className="flex flex-col justify-center container-henge py-20 order-2 md:order-1">
            <FadeUp delay={0.05}>
              <p className="label text-[#C9A84C] mb-5">Catálogo</p>
            </FadeUp>
            <HeadingReveal delay={0.15}>
              <h2 className="heading-lg text-white mb-6">
                Libro de<br />Proyectos
              </h2>
            </HeadingReveal>
            <FadeUp delay={0.25}>
              <p className="body-sm text-white/50 mb-10 max-w-[380px]">
                Una selección de interiores a través de espacios, contextos y escalas.
                El libro sigue el lenguaje de ORIGEN STUDIO tal como toma forma en espacios habitados.
              </p>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-3 label text-white border border-white/25 px-7 py-4 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 self-start"
              >
                Ver proyectos →
              </Link>
            </FadeUp>
          </div>
          <ParallaxImage className="relative min-h-[450px] md:min-h-[600px] order-1 md:order-2">
            <Image
              src="/images/luxury_living.png"
              alt="Libro de Proyectos"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15" />
          </ParallaxImage>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="bg-[#171719] overflow-hidden">
          {/* Section label */}
          <div className="container-henge pt-20 pb-10 flex items-end justify-between">
            <div>
              <FadeUp>
                <p className="label text-[#C9A84C] mb-4">Proyectos Destacados</p>
              </FadeUp>
              <HeadingReveal delay={0.1}>
                <h2 className="heading-lg text-white">Nuestros<br />Trabajos</h2>
              </HeadingReveal>
            </div>
            <FadeIn direction="right">
              <Link href="/proyectos" className="hidden md:inline-flex label text-white/40 hover:text-[#C9A84C] transition-colors duration-300">
                Ver todos →
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-px">
            {FEATURED_PROJECTS.map((p, i) => (
              <FadeIn key={p.href} direction={i === 0 ? "left" : "right"} delay={i * 0.12}>
                <Link href={p.href} className="group relative block overflow-hidden">
                  <div className="relative h-[420px] md:h-[580px] overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-8 left-[clamp(20px,4vw,48px)]">
                    <p className="label text-[#C9A84C] mb-2">{p.subtitle}</p>
                    <h3 className="heading-md text-white mb-3">{p.title}</h3>
                    <span className="label text-white/50 group-hover:text-[#C9A84C] transition-colors duration-300">
                      + Descubrir
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── MATERIALS ── */}
        <section className="bg-[#171719] container-henge py-24">
          <FadeUp>
            <p className="label text-[#C9A84C] mb-5">Nuestra Filosofía</p>
          </FadeUp>
          <HeadingReveal delay={0.1}>
            <h2 className="heading-xl text-white mb-8">
              Materiales<br />Que Duran
            </h2>
          </HeadingReveal>
          <FadeUp delay={0.2}>
            <p className="body-sm text-white/45 max-w-[480px] mb-14">
              Trabajamos con maderas nobles seleccionadas: roble, cedro, nogal y caoba.
              Cada pieza pasa por un proceso artesanal riguroso que garantiza calidad
              excepcional y durabilidad generacional.
            </p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-px">
            {["Roble", "Cedro", "Nogal", "Caoba"].map((m) => (
              <StaggerItem key={m}>
                <div className="border border-white/10 px-8 py-10 hover:border-[#C9A84C]/30 transition-colors duration-300 group">
                  <motion.div
                    className="h-px bg-[#C9A84C] mb-6"
                    initial={{ width: 32 }}
                    whileHover={{ width: 52 }}
                    transition={{ duration: 0.3 }}
                  />
                  <p className="heading-sm text-white">{m}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ── NOSOTROS STRIP ── */}
        <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
          <ParallaxImage className="absolute inset-0">
            <Image
              src="/images/luxury_kitchen.png"
              alt="Taller ORIGEN STUDIO"
              fill
              className="object-cover object-center"
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 flex flex-col justify-center h-full container-henge py-24">
            <FadeUp>
              <p className="label text-[#C9A84C] mb-5">Nosotros</p>
            </FadeUp>
            <HeadingReveal delay={0.1}>
              <h2 className="heading-xl text-white mb-6">
                Artesanía<br />Arquitectónica
              </h2>
            </HeadingReveal>
            <FadeUp delay={0.25}>
              <p className="body-sm text-white/55 max-w-[400px] mb-8">
                En ORIGEN STUDIO combinamos la tradición artesanal con el diseño arquitectónico moderno
                para crear espacios que trascienden el tiempo.
              </p>
              <Link href="/nosotros" className="inline-flex items-center gap-2 label text-white hover:text-[#C9A84C] transition-colors duration-300 group">
                <span className="text-[#C9A84C]">+</span>
                <span className="hover-line">Conocer más</span>
              </Link>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
