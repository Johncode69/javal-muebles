import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FadeUp, FadeIn, HeadingReveal, ParallaxImage, StaggerContainer, StaggerItem } from "@/components/animate";

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="pt-[90px]">
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <ParallaxImage className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
              alt="Contacto ORIGEN STUDIO"
              fill
              className="object-cover object-center"
            />
          </ParallaxImage>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-16">
            <FadeUp>
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3">ORIGEN STUDIO</p>
            </FadeUp>
            <HeadingReveal delay={0.15}>
              <h1
                className="text-white text-5xl md:text-7xl uppercase leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 400 }}
              >
                Contacto
              </h1>
            </HeadingReveal>
          </div>
        </section>

        {/* Contact section */}
        <section className="bg-[#171719] grid md:grid-cols-2 min-h-[600px]">
          {/* Form */}
          <FadeIn direction="left" className="px-8 md:px-16 py-16">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-8">
              Cuéntanos tu proyecto
            </p>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {["Nombre", "Apellido"].map((field) => (
                  <div key={field}>
                    <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">{field} *</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#C9A84C] transition-colors duration-300"
                      placeholder={`Tu ${field.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#C9A84C] transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#C9A84C] transition-colors duration-300"
                  placeholder="+51 999 000 000"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Tipo de proyecto</label>
                <select className="w-full bg-transparent border-b border-white/20 pb-3 text-white/60 text-sm outline-none focus:border-[#C9A84C] transition-colors duration-300">
                  <option value="" className="bg-[#171719]">Seleccionar...</option>
                  {["Dormitorios","Sala","Comedor","Cocina","Closet","Oficina","Otro"].map((o) => (
                    <option key={o} value={o.toLowerCase()} className="bg-[#171719]">{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Mensaje *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-sm placeholder:text-white/20 outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="self-start border border-[#C9A84C] text-[#C9A84C] px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
              >
                Enviar mensaje →
              </button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn direction="right" className="bg-[#0e0e0e] px-8 md:px-16 py-16 flex flex-col gap-12">
            <StaggerContainer>
              <StaggerItem>
                <div>
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6">Estudio</p>
                  <p className="text-white text-sm">Av. Larco 1301, Miraflores</p>
                  <p className="text-white/50 text-sm">Lima, Perú — CP 15074</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6">Contacto</p>
                  <p className="text-white text-sm">
                    <a href="mailto:hola@origenstudio.pe" className="hover:text-[#C9A84C] transition-colors">hola@origenstudio.pe</a>
                  </p>
                  <p className="text-white text-sm mt-1">
                    <a href="tel:+51987654321" className="hover:text-[#C9A84C] transition-colors">+51 987 654 321</a>
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6">Horario</p>
                  {[["Lunes – Viernes","9:00 – 18:00"],["Sábados","10:00 – 14:00"],["Domingos","Cerrado"]].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">{day}</span>
                      <span className={hrs === "Cerrado" ? "text-white/30" : "text-white"}>{hrs}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-10">
                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6">Redes sociales</p>
                  <div className="flex gap-6">
                    {["Instagram","Facebook","Pinterest","LinkedIn"].map((s) => (
                      <a key={s} href="#" className="text-white/40 hover:text-[#C9A84C] text-xs uppercase tracking-widest transition-colors duration-200">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>
        </section>

        <div className="bg-[#0e0e0e] h-[300px] flex items-center justify-center border-t border-white/10">
          <p className="text-white/20 text-xs uppercase tracking-widest">Miraflores, Lima · Perú</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
