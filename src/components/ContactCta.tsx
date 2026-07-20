import { useLocation } from "react-router-dom";
import { SITE, whatsappLink } from "../config/site";

interface ContactCtaProps {
  title: string;
  text: string;
  secondaryLabel?: string;
}

/** Section final de conversão, compartilhada pelas 4 páginas. */
export function ContactCta({ title, text, secondaryLabel }: ContactCtaProps) {
  const { pathname } = useLocation();
  return (
    <section className="section section--dark" aria-labelledby="contact-title">
      <div className="container">
        <span className="section__kicker">Fale com a gente</span>
        <h2 id="contact-title">{title}</h2>
        <p style={{ maxWidth: 640 }}>{text}</p>
        <div className="btn-row">
          <a href={whatsappLink(pathname)} className="btn btn--whatsapp" target="_blank" rel="noopener">
            Chamar no WhatsApp
          </a>
          <a href={`tel:+${SITE.phone}`} className="btn btn--primary">
            Ligar: {SITE.phoneDisplay}
          </a>
          {secondaryLabel && (
            <a href={`mailto:${SITE.email}`} className="btn btn--outline">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
