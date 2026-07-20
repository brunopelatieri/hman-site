import { useLocation } from "react-router-dom";
import { whatsappLink } from "../config/site";

/** Botão flutuante de WhatsApp — P0 do checklist mobile (fixo em todas as páginas). */
export function WhatsAppFloat() {
  const { pathname } = useLocation();
  return (
    <a
      href={whatsappLink(pathname)}
      className="wa-float"
      target="_blank"
      rel="noopener"
      aria-label="Falar agora no WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 2.7C8.7 2.7 2.8 8.6 2.8 15.9c0 2.3.6 4.6 1.8 6.6L2.7 29.3l7-1.8c1.9 1 4.1 1.6 6.3 1.6 7.3 0 13.2-5.9 13.2-13.2S23.3 2.7 16 2.7zm0 24.1c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9C5 9.8 9.9 4.9 16 4.9S27 9.8 27 15.9 22.1 26.8 16 26.8zm6-8.2c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2.1-.4 0-.6-.1-.2-.8-1.8-1-2.5-.3-.6-.5-.5-.8-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
