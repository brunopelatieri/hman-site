import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { ContactCta } from "../components/ContactCta";
import { PriceTable, type PriceRow } from "../components/PriceTable";
import { FAQ_MARIDO } from "../seo/meta";

const FIXACOES: PriceRow[] = [
  { service: "Instalação de suporte de TV", included: "Marcação, furação, buchas, fixação do suporte, montagem da TV, organização de cabos", price: "R$ 80–250 por suporte" },
  { service: "Instalação de prateleiras", included: "Nivelamento, marcação, furação, buchas/parafusos, fixação e conferência de alinhamento", price: "R$ 60–150 por peça" },
  { service: "Instalação de nichos/armários pequenos", included: "Fixação em parede sólida ou drywall com buchas adequadas, prumo e nível", price: "R$ 120–300 por peça" },
  { service: "Instalação de varão de cortina", included: "Medição, marcação, furação, buchas, instalação de suportes e varão", price: "R$ 60–150 por janela" },
  { service: "Instalação de quadros/decorativos", included: "Definição de posição, furação se necessário, buchas/ganchos, pendurar", price: "R$ 15–40 por unidade (pacote a partir de 4)" },
  { service: "Redes de proteção em janelas/sacadas", included: "Medição, fixação de perfis/ganchos, tensionamento da rede, acabamento", price: "R$ 50–90 por m²" },
  { service: "Tela mosquiteiro fixa", included: "Medição do vão, fixação de perfil/moldura, instalação da tela, acabamento", price: "R$ 80–180 por abertura" },
  { service: "Montagem de móveis (pequeno porte)", included: "Montagem conforme manual, fixação em parede quando necessário, ajuste de portas/gavetas", price: "R$ 100–300 por móvel" },
  { service: "Ajuste de dobradiças", included: "Regulagem contra atrito/folga, substituição se necessário", price: "R$ 60–150 por conjunto" },
  { service: "Suportes de banheiro (toalheiro, saboneteira)", included: "Marcação, furação, buchas, fixação e teste de firmeza", price: "R$ 40–120 por conjunto" },
  { service: "Ajustes gerais em móveis (puxadores, corrediças)", included: "Substituição de peças quebradas, ajuste de encaixe e funcionamento", price: "R$ 80–200 por conjunto" },
];

const PORTAS: PriceRow[] = [
  { service: "Troca de fechadura simples", included: "Remoção da antiga, instalação da nova, ajuste de encaixe e chave", price: "R$ 70–150 por porta" },
  { service: "Instalação de olho mágico", included: "Furação no ponto correto, encaixe da peça, teste de visão", price: "R$ 60–120 por porta" },
  { service: "Alinhamento de porta que pega no piso", included: "Ajuste de dobradiças, aplainamento quando autorizado, regulagem do batente", price: "R$ 100–220 por porta" },
  { service: "Instalação de porta de madeira simples", included: "Ajuste no vão, dobradiças, fixação, fechadura e batente", price: "R$ 250–450 por porta" },
];

const PINTURA: PriceRow[] = [
  { service: "Retoques de pintura", included: "Lixamento do ponto, massa, novo lixamento, pintura só na área afetada", price: "R$ 20–30/m² ou R$ 150–350 por cômodo" },
  { service: "Pintura de parede única (sem grande preparo)", included: "Proteção do piso, aplicação em demãos necessárias, limpeza final", price: "R$ 20–30/m² (mão de obra)" },
  { service: "Vedação de rejuntes (banheiro/cozinha)", included: "Remoção parcial do rejunte antigo, limpeza, novo rejunte ou silicone, acabamento", price: "R$ 150–300 por ambiente" },
  { service: "Calafetação com silicone (box/janelas)", included: "Limpeza da área, remoção de silicone antigo, aplicação de novo selante", price: "R$ 150–300 por ambiente" },
  { service: "Pequenos reparos em drywall", included: "Corte da área danificada, remendo, massa, lixamento, pintura local", price: "R$ 150–350 por ponto" },
];

const HIDRAULICA: PriceRow[] = [
  { service: "Troca de torneira simples", included: "Fechamento do registro, remoção, instalação da nova, teste de vazamento", price: "R$ 55–120 por unidade" },
  { service: "Troca de torneira com misturador", included: "Retirada cuidadosa, instalação do conjunto quente/frio, ajustes e testes", price: "R$ 75–180 por unidade" },
  { service: "Troca de sifão de pia/tanque", included: "Remoção do antigo, limpeza, instalação do novo, vedação e teste", price: "R$ 60–120 por unidade" },
  { service: "Reparo de pequenos vazamentos", included: "Troca de vedantes, reaperto de conexões, veda-rosca/silicone", price: "R$ 60–150 por ponto" },
  { service: "Instalação de ducha higiênica", included: "Fixação do suporte, conexão na saída de água, teste de vedação", price: "R$ 70–180 por conjunto" },
  { service: "Instalação/substituição de vaso sanitário", included: "Retirada do antigo, limpeza da base, instalação, vedação, teste de descarga", price: "R$ 190–400 por unidade" },
  { service: "Troca de assento/tampa de vaso", included: "Remoção da tampa antiga, instalação da nova, ajuste dos fixadores", price: "R$ 60–120 por unidade" },
  { service: "Reparo de descarga/caixa acoplada", included: "Troca do conjunto interno, regulagem, teste de vazamento", price: "R$ 90–200 por unidade" },
  { service: "Desentupimento leve (vaso/pia)", included: "Uso de cabo/ferramenta simples, produto adequado, teste de escoamento", price: "R$ 180–250 por ponto" },
  { service: "Limpeza de caixa de gordura", included: "Abertura, remoção de resíduos, limpeza interna, descarte adequado", price: "R$ 130–250 por unidade" },
  { service: "Troca de boia de caixa d'água", included: "Substituição da boia, ajuste de nível, teste", price: "R$ 100–200 por unidade" },
  { service: "Limpeza de caixa d'água", included: "Esvaziamento, escovação, remoção de resíduos, enxágue e reenchimento", price: "R$ 250–400 (até 1.000 L)" },
  { service: "Ponto de água aparente", included: "Derivação externa, abraçadeiras/suportes, instalação de registro/torneira", price: "R$ 90–200 por ponto" },
  { service: "Ponto de água embutido", included: "Quebra de parede, passagem de tubulação, caixa/saída, reboco simples", price: "R$ 130–350 por ponto" },
];

const ELETRO: PriceRow[] = [
  { service: "Instalação de máquina de lavar roupa", included: "Entrada de água, dreno, ponto elétrico, nivelamento, teste de ciclo", price: "R$ 80–180 por unidade" },
  { service: "Instalação de máquina de lavar louça", included: "Água e esgoto, ponto elétrico, nivelamento, teste de funcionamento", price: "R$ 80–250 por unidade" },
  { service: "Instalação de tanque de lavar roupa", included: "Fixação em base/suporte, conexão de entrada/saída, teste de vazamento", price: "R$ 180–350 por unidade" },
  { service: "Instalação de filtro/purificador de água", included: "Furação se necessário, fixação, ligação na rede de água, teste", price: "R$ 120–250 por unidade" },
];

const COBRANCA = [
  { title: "Visita + pequeno reparo", text: "Deslocamento, identificação e resolução rápida (ex: 1 prateleira, 1 torneira).", price: "R$ 80–200" },
  { title: "Hora técnica", text: "Para diagnóstico ou lista de reparos variados na casa toda.", price: "R$ 50–120/hora" },
  { title: "Diária", text: "\"Faxina de manutenção\" geral: elétrica leve, hidráulica leve, fixações, pintura pequena.", price: "R$ 200–450/dia" },
  { title: "Pacote de divulgação", text: "Até 2h, até 5 tarefas pequenas.", price: "a partir de R$ 180 + materiais" },
];

export function MaridoAluguelPage() {
  return (
    <>
      <Hero
        title="Marido de Aluguel em Águas de Lindóia e Monte Sião"
        subtitle="Aquela lista de pequenos reparos que vive adiada — prateleira, suporte de TV, torneira pingando, porta que emperra. Resolvemos tudo numa visita só, com preço claro por serviço."
        bgImage="/images/hman_marido_aluguel_servicos_instalacao_banner.webp"
        bgAlt="Profissional da HMan instalando suporte de TV na parede em residência em Águas de Lindóia"
        secondaryCta={{ label: "Ver pacote de reparos", href: "#pacote-title" }}
      />

      {/* 2. Pacote */}
      <section className="section section--dark" aria-labelledby="pacote-title">
        <div className="container">
          <span className="section__kicker">Pacote Marido de Aluguel</span>
          <h2 id="pacote-title">Não precisa chamar um profissional diferente para cada coisa</h2>
          <p style={{ maxWidth: 760 }}>
            <strong style={{ color: "#ffc400" }}>
              Até 2 horas de serviços diversos (elétrica leve, hidráulica leve, instalações na
              parede), cobrindo até 5 tarefas pequenas — a partir de R$ 180 + materiais.
            </strong>
          </p>
          <p style={{ maxWidth: 760 }}>
            Ideal para quem tem aquela listinha: 1 prateleira, 1 torneira, 1 quadro na parede, 1
            dobradiça ajustada — tudo numa visita só, sem pagar deslocamento e diagnóstico separado
            para cada item.
          </p>
        </div>
      </section>

      {/* 3. Fixações e montagens */}
      <section className="section" aria-labelledby="fixacoes-title">
        <div className="container">
          <h2 id="fixacoes-title">Na parede, com firmeza de verdade</h2>
          <PriceTable rows={FIXACOES} />
        </div>
      </section>

      {/* 4. Portas e fechaduras */}
      <section className="section section--alt" aria-labelledby="portas-title">
        <div className="container">
          <h2 id="portas-title">Porta que fecha direito, fechadura que funciona</h2>
          <PriceTable rows={PORTAS} />
        </div>
      </section>

      {/* 5. Pintura e acabamento */}
      <section className="section" aria-labelledby="pintura-title">
        <div className="container">
          <h2 id="pintura-title">Retoque ou parede inteira, sem sujeira desnecessária</h2>
          <PriceTable rows={PINTURA} />
        </div>
      </section>

      {/* 6. Hidráulica leve */}
      <section className="section section--alt" aria-labelledby="hidraulica-title">
        <div className="container">
          <h2 id="hidraulica-title">Vazamento resolvido antes de virar conta de água alta</h2>
          <PriceTable rows={HIDRAULICA} />
        </div>
      </section>

      {/* 7. Eletrodomésticos */}
      <section className="section" aria-labelledby="eletro-title">
        <div className="container">
          <h2 id="eletro-title">Da caixa até funcionando</h2>
          <PriceTable rows={ELETRO} />
          <p className="note" style={{ marginTop: 16 }}>
            Precisa de um ponto elétrico novo, chuveiro ou quadro de disjuntores? Isso é serviço da
            nossa página de <Link className="inline-link" to="/eletrica">Elétrica</Link> — mesma
            equipe, mesmo padrão de preço claro.
          </p>
          <img
            src="/images/hman_marido_aluguel_servicos_instalacao_banner_1.webp"
            alt="Montagem de móvel concluída pela HMan com ferramentas e nível sobre a bancada"
            className="banner-img"
            loading="lazy"
            decoding="async"
            width={1200}
            height={630}
            style={{ marginTop: 24 }}
          />
        </div>
      </section>

      {/* 8. Formas de cobrança */}
      <section className="section section--dark" aria-labelledby="cobranca-title">
        <div className="container">
          <span className="section__kicker">Formas de cobrança</span>
          <h2 id="cobranca-title">Como funciona a cobrança</h2>
          <div className="grid grid--4">
            {COBRANCA.map((c) => (
              <article className="card" key={c.title} style={{ background: "#1e1f1e", borderColor: "#2c2d2c", color: "#e8e8e8" }}>
                <h3 style={{ color: "#ffc400" }}>{c.title}</h3>
                <p>{c.text}</p>
                <p style={{ marginBottom: 0 }}><strong>{c.price}</strong></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <Faq items={FAQ_MARIDO} />

      {/* 10. Contato final */}
      <ContactCta
        title="Aquela lista de pequenos reparos? Resolve numa visita só"
        text="Chame agora e conte o que precisa ajustar, montar, trocar ou consertar."
        secondaryLabel="Pedir orçamento por e-mail"
      />
    </>
  );
}
