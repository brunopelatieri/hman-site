import { useEffect } from "react";

export interface FaqItem {
  q: string;
  /** Resposta curta: usada também no JSON-LD (FAQPage), por isso fica sem tabela/HTML. */
  a: string;
  /** Id estável usada para linkar direto a esta pergunta (ex: de um card de diferencial). */
  id?: string;
  /** Conteúdo estendido, exibido só na página (não vai para o JSON-LD). */
  details?: {
    table: { label: string; text: string }[];
    colLabel: string;
    colText: string;
    outro: string;
  };
}

interface FaqProps {
  items: FaqItem[];
  title?: string;
}

/**
 * FAQ em acordeão nativo (<details>) — funciona por toque, sem JS pesado.
 * Itens com `id` podem ser abertos direto via link âncora (ex: "#faq-lgpd");
 * o efeito abaixo abre o <details> certo e rola até ele.
 */
export function Faq({ items, title = "Perguntas frequentes" }: FaqProps) {
  useEffect(() => {
    function openFromHash() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <section className="section section--alt" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">{title}</h2>
        <div className="faq">
          {items.map((item) => (
            <details key={item.q} id={item.id}>
              <summary>
                <h3 style={{ display: "inline", font: "inherit" }}>{item.q}</h3>
              </summary>
              <p className="faq__answer">{item.a}</p>
              {item.details && (
                <div className="faq__answer">
                  <div style={{ overflowX: "auto" }}>
                    <table className="price-table">
                      <thead>
                        <tr>
                          <th scope="col">{item.details.colLabel}</th>
                          <th scope="col">{item.details.colText}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.details.table.map((row) => (
                          <tr key={row.label}>
                            <td className="service-name">{row.label}</td>
                            <td data-label={item.details!.colText}>{row.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginTop: 16, marginBottom: 0 }}>{item.details.outro}</p>
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
