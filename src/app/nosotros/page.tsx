import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, HeadingReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/animate";

const VALORES = [
  { num: "01", title: "Artesanía",     desc: "Cada pieza es elaborada a mano por maestros carpinteros con décadas de experiencia en madera fina." },
  { num: "02", title: "Diseño",        desc: "Colaboramos con arquitectos e interioristas para crear muebles que son obras de arte funcionales." },
  { num: "03", title: "Sostenibilidad",desc: "Trabajamos con madera certificada y procesos responsables con el medio ambiente." },
  { num: "04", title: "Durabilidad",   desc: "Construimos para generaciones. Cada mueble está pensado para durar 50 años o más." },
];

const STATS = [
  { value: "12+",  label: "Años de experiencia" },
  { value: "350+", label: "Proyectos completados" },
  { value: "8",    label: "Maestros carpinteros" },
  { value: "100%", label: "Diseño personalizado" },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        {/* Hero */}
        <section className="relative h-[600px] overflow-hidden">
          <ParallaxImage className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600&q=85"
              alt="Taller ORIGEN STUDIO"
              fill
              className="object-cover object-center"
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-16">
            <FadeUp>
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">ORIGEN STUDIO</p>
            </FadeUp>
            <HeadingReveal delay={0.15}>
              <h1
                className="text-white text-5xl md:text-7xl uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                Nosotros
              </h1>
            </HeadingReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#171719] grid md:grid-cols-2">
          <div className="px-8 md:px-16 py-20">
            <FadeUp><p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6">Nuestra Misión</p></FadeUp>
            <HeadingReveal delay={0.15}>
              <h2
                className="text-white text-3xl md:text-5xl uppercase leading-tight mb-8"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                Convertimos
                <br />Espacios en
                <br />Experiencias
              </h2>
            </HeadingReveal>
            <FadeUp delay={0.3}>
              <p className="text-white/50 text-sm leading-loose mb-6">
                ORIGEN STUDIO nació de la pasión por la madera y el diseño arquitectónico.
                Somos una empresa especializada en remodelaciones y carpintería de alta gama,
                donde cada proyecto es tratado como una obra única.
              </p>
              <p className="text-white/50 text-sm leading-loose">
                Desde nuestra fundación, hemos trabajado con las familias y empresas más
                exigentes del Perú, entregando espacios que combinan funcionalidad,
                estética y durabilidad excepcional.
              </p>
            </FadeUp>
          </div>
          <ParallaxImage className="relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?w=900&q=80"
              alt="Nuestro taller"
              fill
              className="object-cover object-center"
            />
          </ParallaxImage>
        </section>

        {/* Stats */}
        <section className="bg-[#0e0e0e] border-y border-white/10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {STATS.map((stat) => (
              <StaggerItem key={stat.value}>
                <div className="px-8 md:px-12 py-12 text-center">
                  <p
                    className="text-[#C9A84C] text-4xl md:text-5xl uppercase mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Values */}
        <section className="bg-[#171719] px-8 md:px-16 py-20">
          <div className="mb-12">
            <FadeUp><p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">Nuestros Valores</p></FadeUp>
            <HeadingReveal delay={0.1}>
              <h2
                className="text-white text-4xl md:text-5xl uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                Lo que nos define
              </h2>
            </HeadingReveal>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-px">
            {VALORES.map((v) => (
              <StaggerItem key={v.num}>
                <div className="border border-white/10 p-8 hover:border-[#C9A84C]/30 transition-colors duration-300 group h-full">
                  <p className="text-[#C9A84C] text-xs mb-6 font-mono">{v.num}</p>
                  <h3
                    className="text-white text-xl uppercase mb-4 group-hover:text-[#C9A84C] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA */}
        <section className="bg-[#171719] px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10">
          <div>
            <FadeIn direction="left">
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">Empecemos</p>
              <h2
                className="text-white text-4xl md:text-5xl uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                ¿Tienes un<br />proyecto?
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="right">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-10 py-5 text-xs uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300 flex-shrink-0"
            >
              Contáctanos →
            </Link>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
