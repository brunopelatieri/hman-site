import { Link } from "react-router-dom";
import { CITIES, SITE } from "../config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img
              src="/images/hman_logo_rectangular.webp"
              alt="HMan — serviços para sua casa e seu negócio"
              width={180}
              height={48}
              loading="lazy"
            />
            <p>
              <strong>HMan — {SITE.tagline}</strong>
              <br />
              CFTV e alarmes, computadores e redes, elétrica e reparos gerais — instalação,
              manutenção e suporte contínuo.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3>Páginas</h3>
            <ul>
              <li><Link to="/">Início — CFTV e Alarmes</Link></li>
              <li><Link to="/pc">Computadores e Redes</Link></li>
              <li><Link to="/eletrica">Elétrica</Link></li>
              <li><Link to="/marido-de-aluguel">Marido de Aluguel</Link></li>
              <li><Link to="/sobre">Quem atende — Bruno Goulart</Link></li>
            </ul>
          </nav>

          <div>
            <h3>Área de atendimento</h3>
            <p>{CITIES.join(" · ")}</p>
            <h3>Contato</h3>
            <address>
              <p>
                <a href={`tel:+${SITE.phone}`}>{SITE.phoneDisplay}</a>
                <br />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </address>
            <p>
              <a href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
              {" · "}
              <a href={`https://wa.me/${SITE.phone}`} target="_blank" rel="noopener">WhatsApp</a>
              {" · "}
              <a href={SITE.facebook} target="_blank" rel="noopener">Facebook</a>
            </p>
          </div>
        </div>

        <div className="footer__legal">
          <span>© {year} HMan. Todos os direitos reservados.</span>
          <span>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            {" · "}
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
