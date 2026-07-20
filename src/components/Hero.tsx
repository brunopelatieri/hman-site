import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { whatsappLink } from "../config/site";

interface HeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  bgImage?: string;
  bgAlt?: string;
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
}

export function Hero({ title, subtitle, badge, bgImage, bgAlt = "", secondaryCta, children }: HeroProps) {
  const { pathname } = useLocation();
  return (
    <section className="hero">
      {bgImage && (
        <img
          src={bgImage}
          alt={bgAlt}
          className="hero__bg"
          fetchPriority="high"
          decoding="async"
          width={1200}
          height={630}
        />
      )}
      <div className="container">
        <div className="hero__inner">
          <h1>{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
          {badge && <p className="hero__badge">📍 {badge}</p>}
          <div className="btn-row">
            <a href={whatsappLink(pathname)} className="btn btn--whatsapp" target="_blank" rel="noopener">
              Falar agora no WhatsApp
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn btn--outline">
                {secondaryCta.label}
              </a>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
