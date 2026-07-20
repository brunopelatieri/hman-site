import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="section" style={{ minHeight: "50vh" }}>
      <div className="container">
        <h1>Página não encontrada</h1>
        <p>O endereço que você acessou não existe ou mudou de lugar.</p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary">Voltar ao início</Link>
          <Link to="/marido-de-aluguel" className="btn btn--outline">Ver serviços de reparos</Link>
        </div>
      </div>
    </section>
  );
}
