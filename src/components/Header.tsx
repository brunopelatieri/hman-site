import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { whatsappLink } from "../config/site";

const NAV_ITEMS = [
  { to: "/", label: "Início" },
  { to: "/pc", label: "Computadores e Redes" },
  { to: "/eletrica", label: "Elétrica" },
  { to: "/marido-de-aluguel", label: "Marido de Aluguel" },
  { to: "/sobre", label: "Sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = NAV_ITEMS.map((item) => (
    <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setOpen(false)}>
      {item.label}
    </NavLink>
  ));

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo" aria-label="HMan: página inicial" onClick={() => setOpen(false)}>
          <img
            src="/images/hman_logo_rectangular.webp"
            alt="HMan, serviços para sua casa e seu negócio"
            width={160}
            height={42}
          />
        </NavLink>

        <nav className="header__nav" aria-label="Navegação principal">
          {links}
        </nav>

        <a href={whatsappLink(pathname)} className="btn btn--primary header__cta" target="_blank" rel="noopener">
          Falar no WhatsApp
        </a>

        <button
          type="button"
          className="header__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação principal (celular)">
          {links}
          <a href={whatsappLink(pathname)} className="btn btn--whatsapp" target="_blank" rel="noopener">
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
