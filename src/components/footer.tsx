import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Inicio",     href: "/" },
  { label: "Catálogo",   href: "/catalogo" },
  { label: "Proyectos",  href: "/proyectos" },
  { label: "Nosotros",   href: "/nosotros" },
  { label: "Contacto",   href: "/contacto" },
  { label: "Privacidad", href: "/privacidad" },
];

const SOCIAL = [
  { label: "IG", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg> },
  { label: "FB", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { label: "PI", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> },
  { label: "LI", href: "#", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
];

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 container-henge py-20">
        <div className="max-w-lg">
          <h3 className="heading-lg text-white mb-3">
            Suscríbete a<br />nuestro boletín
          </h3>
          <p className="body-sm text-white/40 mb-8">
            Mantente al día con nuestros nuevos proyectos y productos
          </p>
          <form className="flex items-center border border-white/15 max-w-[360px] hover:border-white/30 transition-colors duration-300">
            <input
              type="email"
              placeholder="Email*"
              className="flex-1 bg-transparent px-5 py-4 body-sm placeholder:text-white/25 outline-none text-white"
            />
            <button
              type="submit"
              className="w-12 h-12 flex items-center justify-center bg-white text-[#171719] hover:bg-[#C9A84C] transition-colors duration-300 flex-shrink-0 text-lg"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-henge py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C14 2 8 6.5 8 14C8 17.5 9.5 20.5 12 22.5C10 20 9 17 9 14C9 8.5 14 4.5 14 4.5C14 4.5 19 8.5 19 14C19 17 18 20 16 22.5C18.5 20.5 20 17.5 20 14C20 6.5 14 2 14 2Z" fill="#C9A84C"/>
            <path d="M14 7C14 7 10 10.5 10 14C10 16.5 11.5 18.5 14 20C16.5 18.5 18 16.5 18 14C18 10.5 14 7 14 7Z" fill="#C9A84C" opacity="0.5"/>
            <circle cx="14" cy="14" r="2" fill="#C9A84C"/>
          </svg>
          <span className="label text-white/70">ORIGEN STUDIO</span>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="label text-white/30 hover:text-white/70 transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-5">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}
              className="text-white/30 hover:text-[#C9A84C] transition-colors duration-200">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="container-henge pb-8">
        <p className="label text-white/20" style={{ fontSize: "11px" }}>
          © {new Date().getFullYear()} ORIGEN STUDIO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
