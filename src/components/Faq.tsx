interface FaqProps {
  items: { q: string; a: string }[];
  title?: string;
}

/** FAQ em acordeão nativo (<details>) — funciona por toque, sem JS pesado. */
export function Faq({ items, title = "Perguntas frequentes" }: FaqProps) {
  return (
    <section className="section section--alt" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title">{title}</h2>
        <div className="faq">
          {items.map((item) => (
            <details key={item.q}>
              <summary>
                <h3 style={{ display: "inline", font: "inherit" }}>{item.q}</h3>
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
