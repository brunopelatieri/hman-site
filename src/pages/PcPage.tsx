import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { ContactCta } from "../components/ContactCta";
import { FAQ_PC } from "../seo/meta";

const SERVICOS = [
  {
    title: "Montagem e manutenção de computadores",
    items: [
      "Montagem de computadores novos ou sob medida.",
      "Troca de hardware e periféricos (memória, armazenamento, fonte, placas, mouse, teclado, monitor).",
    ],
  },
  {
    title: "Instalação e suporte de software",
    items: ["Instalação de softwares em geral.", "Formatação e instalação de Windows e Linux."],
  },
  {
    title: "Cabeamento e redes",
    items: [
      "Crimpagem (montagem) de cabo de rede LAN RJ45.",
      "Teste de cabos de rede para garantir conexão estável.",
      "Configuração de redes Windows e Linux.",
      "Configuração de hub/switch de rede e wi-fi.",
      "Dimensionamento de rede cabeada e sem fio para residência e comércio.",
    ],
  },
  {
    title: "Consultoria e dimensionamento sob medida",
    items: [
      "Escolha do computador certo para cada uso: desktop de trabalho, servidor, computador dedicado a gravação de CFTV, computador para jogos.",
      "Inclui também escolha e configuração de periféricos.",
    ],
  },
];

const DIFERENCIAIS = [
  { title: "Atendimento local", text: "Mesma equipe que já atende CFTV e alarme na região." },
  { title: "Diagnóstico antes do orçamento", text: "Identificamos o problema real antes de vender peça ou serviço." },
  { title: "Suporte contínuo", text: "Não paramos no dia da instalação." },
  { title: "Dimensionamento sob medida", text: "Nada de vender mais rede ou mais máquina do que você precisa." },
];

export function PcPage() {
  return (
    <>
      <Hero
        title="Computadores e Redes em Águas de Lindóia e Monte Sião"
        subtitle="Montagem, manutenção, cabeamento, wi-fi e redes bem dimensionadas para residência, comércio, indústria e hotelaria. O mesmo cuidado técnico que aplicamos em CFTV, agora para toda a sua estrutura de tecnologia."
        bgImage="/images/hman_computadores_redes_servicos_instalacao_banner.webp"
        bgAlt="Cabeamento de rede organizado em rack instalado pela HMan para comércio na região de Águas de Lindóia"
        secondaryCta={{ label: "Pedir orçamento grátis", href: "#contact-title" }}
      />

      {/* 2. Serviços */}
      <section className="section" aria-labelledby="servicos-title">
        <div className="container">
          <span className="section__kicker">Serviços</span>
          <h2 id="servicos-title">Tudo que sua estrutura de tecnologia precisa, em um só lugar</h2>
          <p style={{ maxWidth: 760 }}>
            Quem atende é <Link className="inline-link" to="/sobre">Bruno Goulart, desenvolvedor
            full stack com mais de 18 anos de experiência</Link>: computador, servidor e rede são
            o dia a dia profissional dele, do código ao cabo.
          </p>
          <div className="grid grid--2">
            {SERVICOS.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Especialidade: redes para hotéis */}
      <section className="section section--dark" aria-labelledby="hoteis-title">
        <div className="container">
          <span className="section__kicker">Especialidade</span>
          <h2 id="hoteis-title">Especialistas em rede wi-fi para hotéis e pousadas</h2>
          <p style={{ maxWidth: 760 }}>
            Rede de hóspede lenta ou instável gera reclamação, avaliação ruim e cancelamento.
            Dimensionamos a rede wi-fi e cabeada do seu hotel ou pousada para aguentar múltiplos
            hóspedes conectados ao mesmo tempo, com cobertura em todas as áreas (quartos, área
            comum e recepção) e prioridade correta entre rede de hóspede e rede
            administrativa/CFTV.
          </p>
          <p style={{ maxWidth: 760 }}>
            Combina diretamente com nossos{" "}
            <Link className="inline-link" to="/">
              serviços de CFTV e alarmes para hospedagem
            </Link>
            : câmera bem instalada precisa de rede bem dimensionada para gravar e transmitir sem
            falha.
          </p>
          <img
            src="/images/hman_computadores_redes_servicos_instalacao_banner_1.webp"
            alt="Técnico da HMan configurando switch de rede e access points wi-fi em hotel"
            className="banner-img"
            loading="lazy"
            decoding="async"
            width={1200}
            height={630}
          />
        </div>
      </section>

      {/* 4. Diferenciais */}
      <section className="section" aria-labelledby="dif-title">
        <div className="container">
          <span className="section__kicker">Diferenciais</span>
          <h2 id="dif-title">Por que chamar a HMan PC & Redes</h2>
          <div className="grid grid--4">
            {DIFERENCIAIS.map((d, i) => (
              <article className="card" key={d.title}>
                <div className="card__icon" aria-hidden="true">{i + 1}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <Faq items={FAQ_PC} />

      {/* 6. Contato final */}
      <ContactCta
        title="Sua estrutura de tecnologia, resolvida de uma vez"
        text="Fale agora e receba um diagnóstico e orçamento sem compromisso."
        secondaryLabel="Enviar e-mail"
      />
    </>
  );
}
