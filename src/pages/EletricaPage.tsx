import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { ContactCta } from "../components/ContactCta";
import { PriceTable, type PriceRow } from "../components/PriceTable";
import { FAQ_ELETRICA } from "../seo/meta";

const ILUMINACAO: PriceRow[] = [
  { service: "Troca de lâmpada comum", included: "Substituição da lâmpada queimada, teste de soquete e tensão, limpeza leve da luminária", price: "R$ 30–40 por ponto" },
  { service: "Troca de lâmpada fluorescente", included: "Retirada da tubular antiga, checagem de reator/soquete, instalação e teste", price: "R$ 40–50 por ponto" },
  { service: "Conversão para LED", included: "Remoção do reator, adaptação da fiação conforme fabricante, instalação e teste", price: "R$ 40–80 por ponto" },
  { service: "Instalação de luminária simples", included: "Fixação da base, ligação na caixa de passagem, acabamento e teste", price: "R$ 70–120 por peça" },
  { service: "Instalação de lustre/pendente", included: "Montagem, reforço de fixação no teto, ligação, ajuste de altura", price: "R$ 120–250 por peça" },
  { service: "Instalação de plafon/spot embutido", included: "Furação ou aproveitamento de recorte existente, fixação, ligação e teste", price: "R$ 80–180 por ponto" },
  { service: "Instalação de refletor externo", included: "Fixação em parede/mastro, passagem de cabo, ligação com sensor/comando", price: "R$ 150–300 por ponto" },
  { service: "Iluminação de jardim", included: "Montagem de luminárias baixas, cabos protegidos, ligação a circuito ou temporizador", price: "R$ 200–600 por área" },
  { service: "Instalação de sensor de presença", included: "Fixação, ajuste de tempo/alcance, ligação na iluminação, teste", price: "R$ 90–180 por unidade" },
];

const TOMADAS: PriceRow[] = [
  { service: "Troca/instalação de interruptor simples", included: "Desenergizar o circuito, remoção do antigo, ligação correta, teste", price: "R$ 40–60 por unidade" },
  { service: "Interruptor paralelo/three-way", included: "Adequação de fiação entre caixas, instalação e teste em múltiplos pontos", price: "R$ 80–150 por circuito" },
  { service: "Troca/instalação de tomada 110/220V", included: "Checagem de bitola, aterramento e tensão, ligação correta, teste com carga", price: "R$ 40–70 por unidade" },
  { service: "Tomada dupla/múltipla", included: "Troca de suporte/espelho, adequação de fiação, teste de todos os encaixes", price: "R$ 60–90 por unidade" },
  { service: "Tomada de rede (RJ45) — ponto físico", included: "Crimpagem de cabo, montagem da tomada, teste de conexão", price: "R$ 60–100 por ponto" },
  { service: "Ponto de rede completo (passagem de cabo)", included: "Passagem por conduíte/aparente, fixação, terminação nas duas pontas, teste", price: "R$ 90–180 por ponto" },
];

const QUADRO: PriceRow[] = [
  { service: "Troca de disjuntor", included: "Desenergizar o quadro, remoção do antigo, instalação, aperto de conexões, teste", price: "R$ 60–100 por unidade" },
  { service: "Instalação de novo disjuntor no quadro", included: "Adequação do barramento, ligação do novo circuito, identificação em legenda", price: "R$ 75–150 por unidade" },
  { service: "Montagem/troca de quadro completo", included: "Avaliação de carga, montagem do quadro novo, transferência de circuitos, teste geral", price: "R$ 400–900 (ou sob orçamento)" },
  { service: "Instalação de DR/DPS", included: "Instalação de proteção diferencial/contra surtos, ajuste de ligações, teste", price: "R$ 250–600 por quadro" },
  { service: "Mini quadro para área externa", included: "Montagem de quadro com disjuntores/DR para quintal ou área gourmet", price: "R$ 350–800 por quadro" },
  { service: "Laudo simples de verificação", included: "Visita, inspeção visual, relatório com recomendações (sem ART)", price: "R$ 200–450 por imóvel" },
];

const CHUVEIRO: PriceRow[] = [
  { service: "Instalação de chuveiro elétrico", included: "Checagem de bitola, disjuntor exclusivo, aterramento, fixação, teste de aquecimento", price: "R$ 90–180 por unidade" },
  { service: "Troca de resistência de chuveiro", included: "Desligar chave geral, abertura, troca conforme modelo, remontagem e teste", price: "R$ 70–120 por unidade" },
  { service: "Instalação de torneira elétrica", included: "Fixação, ligação elétrica segura, teste de aquecimento", price: "R$ 100–200 por unidade" },
  { service: "Instalação de aquecedor elétrico pequeno", included: "Fixação, ligação conforme manual, teste de aquecimento e segurança", price: "R$ 200–400 por unidade" },
];

const VENTILADORES: PriceRow[] = [
  { service: "Instalação de ventilador de teto", included: "Fixação da base, montagem de pás/motor, ligação, teste de rotação e ruído", price: "R$ 150–300 por unidade" },
  { service: "Troca de ventilador de teto", included: "Remoção do antigo, aproveitamento do ponto, instalação e teste", price: "R$ 120–250 por unidade" },
  { service: "Instalação de exaustor (banheiro/cozinha)", included: "Fixação, ligação elétrica, duto se necessário, teste de fluxo de ar", price: "R$ 150–300 por unidade" },
];

const REPARO: PriceRow[] = [
  { service: "Reparo de curto em tomada/ponto de luz", included: "Diagnóstico, identificação do curto/fio solto, substituição do componente, teste", price: "R$ 120–250 por chamado" },
  { service: "Revisão de fiação em ambiente", included: "Abertura de caixas, verificação de emendas, troca pontual de fios danificados", price: "R$ 250–600 por ambiente" },
  { service: "Adequação de tensão 110/220V", included: "Verificação da rede, reconfiguração de ligações, troca de tomadas/disjuntores se necessário", price: "R$ 180–450 por circuito" },
];

const INFRA: PriceRow[] = [
  { service: "Nova tomada/ponto de luz (infraestrutura)", included: "Rasgo/furação, caixa de embutir ou sobrepor, fiação, ligação no quadro", price: "R$ 250–600 por ponto (sem material)" },
  { service: "Instalação de nobreak em estação de trabalho", included: "Checagem de potência, ligação entre tomada e equipamentos, organização de cabos", price: "R$ 80–180 por ponto" },
  { service: "Filtro de linha / organização de cabos", included: "Instalação, etiquetagem, organização com abraçadeiras, orientação de carga máxima", price: "R$ 60–120 por ponto" },
];

export function EletricaPage() {
  return (
    <>
      <Hero
        title="Eletricista Residencial e Comercial em Águas de Lindóia e Monte Sião"
        subtitle="De uma lâmpada trocada a um quadro de disjuntores novo — serviço elétrico com preço claro, segurança e atendimento rápido em Águas de Lindóia, Monte Sião e todo o Circuito das Águas Paulista."
        badge="Preço por serviço, sem letra miúda — você sabe o que vai pagar antes de fecharmos."
        bgImage="/images/hman_eletrica_servicos_instalacao_banner.webp"
        bgAlt="Eletricista da HMan trabalhando com EPI em quadro de disjuntores residencial organizado"
        secondaryCta={{ label: "Ver tabela de serviços e preços", href: "#iluminacao-title" }}
      />

      {/* 2. Confiança e segurança */}
      <section className="section" aria-labelledby="seguranca-title">
        <div className="container">
          <span className="section__kicker">Confiança e segurança</span>
          <h2 id="seguranca-title">Trabalho elétrico não é lugar para economizar em segurança</h2>
          <p style={{ maxWidth: 780 }}>
            Todo atendimento é feito com uso de EPI (equipamento de proteção individual), seguindo
            as normas técnicas da ABNT (NBR 5410 para instalações elétricas de baixa tensão) e,
            quando o serviço exige, com emissão de ART (Anotação de Responsabilidade Técnica) por
            profissional habilitado. Instalação elétrica malfeita não é só risco de defeito — é
            risco de incêndio e choque. Fazemos direito da primeira vez.
          </p>
        </div>
      </section>

      {/* 3. Iluminação */}
      <section className="section section--alt" aria-labelledby="iluminacao-title">
        <div className="container">
          <h2 id="iluminacao-title">Iluminação para casa, loja e comércio</h2>
          <PriceTable rows={ILUMINACAO} />
        </div>
      </section>

      {/* 4. Tomadas */}
      <section className="section" aria-labelledby="tomadas-title">
        <div className="container">
          <h2 id="tomadas-title">Tomadas e interruptores, feitos com segurança e testados na hora</h2>
          <PriceTable rows={TOMADAS} />
          <p className="note" style={{ marginTop: 16 }}>
            Este é o ponto físico/infraestrutura do cabo de rede. Para configuração de rede, wi-fi
            e testes avançados de conexão, veja nossa página de{" "}
            <Link className="inline-link" to="/pc">Computadores e Redes</Link>.
          </p>
        </div>
      </section>

      {/* 5. Quadro de disjuntores */}
      <section className="section section--alt" aria-labelledby="quadro-title">
        <div className="container">
          <h2 id="quadro-title">O coração da sua instalação elétrica</h2>
          <PriceTable rows={QUADRO} />
        </div>
      </section>

      {/* 6. Chuveiro */}
      <section className="section" aria-labelledby="chuveiro-title">
        <div className="container">
          <h2 id="chuveiro-title">Água quente com segurança elétrica de verdade</h2>
          <PriceTable rows={CHUVEIRO} />
        </div>
      </section>

      {/* 7. Ventiladores */}
      <section className="section section--alt" aria-labelledby="ventiladores-title">
        <div className="container">
          <h2 id="ventiladores-title">Circulação de ar bem instalada</h2>
          <PriceTable rows={VENTILADORES} />
        </div>
      </section>

      {/* 8. Diagnóstico e reparo */}
      <section className="section" aria-labelledby="reparo-title">
        <div className="container">
          <h2 id="reparo-title">Quando algo já deu problema</h2>
          <PriceTable rows={REPARO} />
        </div>
      </section>

      {/* 9. Infraestrutura nova */}
      <section className="section section--alt" aria-labelledby="infra-title">
        <div className="container">
          <h2 id="infra-title">Ponto novo ou estrutura organizada</h2>
          <PriceTable rows={INFRA} />
          <img
            src="/images/hman_eletrica_servicos_instalacao_banner_1.webp"
            alt="Instalação elétrica concluída pela HMan com quadro de disjuntores identificado e organizado"
            className="banner-img"
            loading="lazy"
            decoding="async"
            width={1200}
            height={630}
            style={{ marginTop: 24 }}
          />
        </div>
      </section>

      {/* 10. Formas de cobrança */}
      <section className="section section--dark" aria-labelledby="cobranca-title">
        <div className="container">
          <span className="section__kicker">Formas de cobrança</span>
          <h2 id="cobranca-title">Como funciona a cobrança</h2>
          <div className="grid grid--2">
            <article className="card" style={{ background: "#1e1f1e", borderColor: "#2c2d2c", color: "#e8e8e8" }}>
              <h3 style={{ color: "#ffc400" }}>Visita técnica com pequeno reparo</h3>
              <p>Ideal para 1–2 itens simples (ex: trocar lâmpada, trocar tomada).</p>
              <p style={{ marginBottom: 0 }}><strong>Faixa: R$ 80–200</strong></p>
            </article>
            <article className="card" style={{ background: "#1e1f1e", borderColor: "#2c2d2c", color: "#e8e8e8" }}>
              <h3 style={{ color: "#ffc400" }}>Hora técnica</h3>
              <p>Para diagnóstico ou lista de pequenos reparos na casa/comércio todo.</p>
              <p style={{ marginBottom: 0 }}><strong>Faixa: R$ 50–120/hora</strong></p>
            </article>
          </div>
          <p className="note" style={{ marginTop: 20, color: "#bdbdbd" }}>
            Materiais (fios, disjuntores, luminárias, etc.) são cobrados à parte, sempre informados
            no orçamento antes de iniciar. Para reparos que não são elétricos, veja nossos serviços
            de <Link className="inline-link" to="/marido-de-aluguel">Marido de Aluguel</Link>.
          </p>
        </div>
      </section>

      {/* 11. FAQ */}
      <Faq items={FAQ_ELETRICA} />

      {/* 12. Contato final */}
      <ContactCta
        title="Elétrica bem feita não é gasto, é prevenção"
        text="Fio solto, tomada quente e disjuntor que desarma sozinho são avisos — não espere virar problema maior."
        secondaryLabel="Pedir orçamento por e-mail"
      />
    </>
  );
}
