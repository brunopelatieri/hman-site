import { Link, useLocation } from "react-router-dom";
import { ContactCta } from "../components/ContactCta";
import { FOUNDER, whatsappLink } from "../config/site";

const RIGOR = [
  {
    title: "Orçamento por escrito, antes de começar",
    text: "Você sabe o que vai pagar e o que está incluso antes de qualquer serviço iniciar, hábito de quem passou a carreira escrevendo especificações.",
  },
  {
    title: "Serviço testado antes de entregar",
    text: "Câmera gravando, tomada com carga, torneira sem vazamento. Nada é dado como pronto sem teste, assim como um código que só sobe depois de aprovado.",
  },
  {
    title: "Documentação do que foi feito",
    text: "Quadro de disjuntores identificado, cabos etiquetados, fotos do antes e depois. Você (ou o próximo profissional) nunca fica no escuro.",
  },
  {
    title: "Diagnóstico antes de vender",
    text: "Primeiro entender o problema real, depois propor a solução, nunca o contrário. Sem empurrar equipamento ou serviço que você não precisa.",
  },
];

export function SobrePage() {
  const { pathname } = useLocation();
  return (
    <>
      {/* Hero da página Sobre */}
      <section className="hero" aria-labelledby="sobre-title">
        <img
          src="/images/hman_banner_about_sobre.webp"
          alt="Rede de conexões tecnológicas em dourado sobre fundo escuro, simbolizando a base de tecnologia por trás da HMan"
          className="hero__bg"
          fetchPriority="high"
          decoding="async"
          width={1500}
          height={500}
        />
        <div className="container">
          <div className="hero__inner">
            <h1 id="sobre-title">Quem está por trás da HMan</h1>
            <p className="hero__subtitle">
              Muito prazer, sou <strong>{FOUNDER.name}</strong>, profissional de tecnologia com
              mais de 18 anos de experiência. A HMan é onde coloco essa bagagem para trabalhar
              dentro da sua casa e do seu negócio.
            </p>
            <div className="btn-row">
              <a href={whatsappLink(pathname)} className="btn btn--whatsapp" target="_blank" rel="noopener">
                Falar comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação + foto */}
      <section className="section" aria-labelledby="historia-title">
        <div className="container about">
          <div className="about__photo-wrap">
            <img
              src={FOUNDER.photo}
              alt="Bruno Pelatieri Goulart, fundador da HMan"
              className="about__photo"
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                // Foto ainda não publicada — esconde o slot sem quebrar o layout
                e.currentTarget.closest(".about__photo-wrap")?.setAttribute("hidden", "");
              }}
            />
          </div>
          <div className="about__text">
            <h2 id="historia-title">De código a cabo de rede: por que a HMan existe</h2>
            <p>
              Trabalho com tecnologia desde 2006, sou desenvolvedor full stack e especialista em
              automação com inteligência artificial. Foi essa trajetória que me trouxe até aqui:
              câmera de segurança, rede, computador e infraestrutura elétrica são, literalmente, a
              minha área. A HMan nasceu para atender a região onde vivo com o mesmo padrão técnico
              que aplico em projetos de software.
            </p>
            <p>
              E os reparos gerais? Entram pelo mesmo motivo: quem procura um serviço bem feito não
              quer três telefones diferentes. Elétrica, hidráulica leve, montagem e fixação são
              trabalhos que faço com a mesma disciplina de engenharia: medido, testado e entregue
              funcionando.
            </p>
            <p>
              Quer conhecer meu lado desenvolvedor? Meu trabalho com software, IA e automação está
              em{" "}
              <a className="inline-link" href={FOUNDER.site} target="_blank" rel="noopener">
                brunogoulart.com.br
              </a>
              , minha história em{" "}
              <a className="inline-link" href={FOUNDER.siteSobre} target="_blank" rel="noopener">
                /sobre
              </a>
              , meus links em{" "}
              <a className="inline-link" href={FOUNDER.bio} target="_blank" rel="noopener">
                bio.brunogoulart.com.br
              </a>{" "}
              e meus projetos no{" "}
              <a className="inline-link" href={FOUNDER.github} target="_blank" rel="noopener">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Cabeça de engenheiro na mão na massa */}
      <section className="section section--alt" aria-labelledby="rigor-title">
        <div className="container">
          <span className="section__kicker">Meu jeito de trabalhar</span>
          <h2 id="rigor-title">Cabeça de engenheiro na mão na massa</h2>
          <p style={{ maxWidth: 760 }}>
            18 anos desenvolvendo sistemas ensinam uma coisa: o barato do improviso sai caro. O que
            muda quando quem atende pensa como engenheiro:
          </p>
          <div className="grid grid--2">
            {RIGOR.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p style={{ marginBottom: 0 }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O que faço pela HMan */}
      <section className="section" aria-labelledby="servicos-sobre-title">
        <div className="container">
          <span className="section__kicker">Serviços HMan</span>
          <h2 id="servicos-sobre-title">O que eu faço pela HMan</h2>
          <div className="grid grid--2">
            <article className="card">
              <h3>Minha especialidade de origem</h3>
              <p>
                <Link className="inline-link" to="/">CFTV e alarmes</Link> e{" "}
                <Link className="inline-link" to="/pc">computadores e redes</Link>: aqui você é
                atendido por alguém que projeta e mantém infraestrutura de tecnologia
                profissionalmente. Câmera, gravação, rede wi-fi de hotel, servidor: é o meu mundo.
              </p>
            </article>
            <article className="card">
              <h3>Com o mesmo rigor</h3>
              <p>
                <Link className="inline-link" to="/eletrica">Elétrica residencial e comercial</Link>{" "}
                e <Link className="inline-link" to="/marido-de-aluguel">reparos gerais</Link>,
                preço claro por serviço, normas técnicas, EPI e teste final. A tabela de preços
                publicada no site é o compromisso: sem surpresa na hora de pagar.
              </p>
            </article>
          </div>
          <p className="note" style={{ marginTop: 20 }}>
            Sua empresa também precisa de site, sistema ou automação com IA? Isso eu atendo pela
            minha marca pessoal, fale comigo pelo{" "}
            <a className="inline-link" href={FOUNDER.site} target="_blank" rel="noopener">
              brunogoulart.com.br
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCta
        title="Fale direto com quem faz"
        text="Sem intermediário, sem central de atendimento: quem responde o WhatsApp, faz o orçamento e executa o serviço é a mesma pessoa."
      />
    </>
  );
}
