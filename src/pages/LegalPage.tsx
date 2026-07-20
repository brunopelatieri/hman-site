import { SITE } from "../config/site";

/**
 * Textos genéricos de base — TODO: revisar com orientação jurídica
 * antes de publicar (LGPD / Marco Civil).
 */

export function PrivacidadePage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <h1>Política de Privacidade</h1>
          <p>
            A {SITE.name} respeita a sua privacidade. Este site não utiliza formulários que coletem
            dados sensíveis: o contato é feito diretamente por WhatsApp, telefone ou e-mail, por
            iniciativa sua.
          </p>
          <h2>Dados coletados</h2>
          <p>
            Ao entrar em contato, você nos informa voluntariamente nome, telefone e a descrição do
            serviço desejado. Esses dados são usados exclusivamente para elaborar seu orçamento e
            prestar o atendimento, e não são vendidos nem compartilhados com terceiros.
          </p>
          <h2>Câmeras e LGPD</h2>
          <p>
            Em serviços de CFTV, orientamos a sinalização correta de área monitorada e o uso das
            imagens em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
          </p>
          <h2>Contato</h2>
          <p>
            Para dúvidas sobre esta política ou sobre seus dados, escreva para{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}

export function TermosPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <h1>Termos de Uso</h1>
          <p>
            Este site tem caráter informativo sobre os serviços prestados pela {SITE.name} na
            região de Águas de Lindóia, Monte Sião e Circuito das Águas Paulista.
          </p>
          <h2>Preços e orçamentos</h2>
          <p>
            Os valores exibidos são faixas de referência de mão de obra e podem variar conforme a
            avaliação técnica de cada caso. O valor final é sempre confirmado em orçamento antes do
            início do serviço. Materiais são cobrados à parte, mediante aprovação prévia.
          </p>
          <h2>Propriedade</h2>
          <p>
            Marcas de terceiros citadas (fabricantes de equipamentos) pertencem aos seus
            respectivos donos e são mencionadas apenas a título de compatibilidade e indicação
            técnica.
          </p>
        </div>
      </section>
    </>
  );
}
