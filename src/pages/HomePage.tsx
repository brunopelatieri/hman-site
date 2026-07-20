import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Faq } from "../components/Faq";
import { ContactCta } from "../components/ContactCta";
import { FAQ_HOME } from "../seo/meta";

const DIFERENCIAIS = [
  { icon: "📍", title: "Especialistas na região", text: "Conhecemos a realidade de quem vive de temporada em Águas de Lindóia e de quem vive do tricô em Monte Sião, além de atender bem Lindóia, Serra Negra, Socorro e Itapira." },
  { icon: "🏆", title: "Marcas líderes de mercado", text: "Trabalhamos com as principais marcas de câmeras e alarmes do Brasil, escolhidas conforme seu orçamento e a exigência do local." },
  { icon: "📱", title: "Acesso remoto pelo celular", text: "Veja sua casa, pousada, loja ou fábrica de qualquer lugar do mundo, em tempo real." },
  { icon: "🧹", title: "Instalação limpa e rápida", text: "Sem quebra-quebra, sem fio aparente." },
  { icon: "⚖️", title: "Conformidade com a LGPD", text: "Orientamos a sinalização correta de área monitorada." },
  { icon: "🤝", title: "Orçamento sem compromisso", text: "Visita técnica, projeto e proposta sem custo." },
];

const MARCAS_CFTV = [
  { marca: "Intelbras", perfil: "Custo-benefício", aplicacao: "Residências e pequenos comércios" },
  { marca: "Hikvision", perfil: "Custo-benefício avançado", aplicacao: "Lojas e projetos médios/grandes" },
  { marca: "Dahua", perfil: "Custo-benefício avançado", aplicacao: "Lojas e projetos médios/grandes" },
  { marca: "Vivotek", perfil: "Técnica intermediária", aplicacao: "Comércio e projetos mais exigentes" },
  { marca: "Axis", perfil: "Premium", aplicacao: "Fábricas, malharias e projetos corporativos" },
  { marca: "Bosch", perfil: "Premium", aplicacao: "Ambientes críticos e corporativos" },
  { marca: "Hanwha Vision", perfil: "Premium", aplicacao: "Projetos corporativos robustos" },
  { marca: "Avigilon", perfil: "Segurança avançada", aplicacao: "Grandes instalações" },
  { marca: "Geovision", perfil: "Custo-benefício", aplicacao: "Comércio e integração de sistemas" },
  { marca: "TecVoz", perfil: "Entrada", aplicacao: "Residências e pequenos comércios" },
];

const ALARMES_SEGMENTOS = [
  { segmento: "Residencial básico", marcas: "Intelbras, JFL, Giga, Positivo Casa Segura" },
  { segmento: "Residencial premium", marcas: "Verisure, Ajax" },
  { segmento: "Comércio pequeno e médio", marcas: "Intelbras, JFL, Ajax" },
  { segmento: "Comércio maior e corporativo", marcas: "Verisure, Ajax, Intelbras IP/monitorada" },
];

export function HomePage() {
  return (
    <>
      <Hero
        title="CFTV e Alarmes em Águas de Lindóia e Monte Sião — Instalação, Manutenção e Suporte Real"
        subtitle="Câmeras e alarmes para pousada, loja, fábrica, condomínio ou residência — com instalação cuidadosa, manutenção periódica e um time que continua disponível depois que a câmera já está na parede."
        badge="Atendimento em Águas de Lindóia, Monte Sião, Lindóia, Serra Negra, Socorro e Itapira — sem taxa de deslocamento na região."
        bgImage="/images/hman_cftv_servicos_instalacao_banner.webp"
        bgAlt="Instalação de câmeras de segurança CFTV pela HMan em fachada na região de Águas de Lindóia"
        secondaryCta={{ label: "Pedir orçamento grátis em 2 minutos", href: "#contact-title" }}
      />

      {/*
        2. Números — a spec exige publicar SOMENTE dado real (CDC).
        Enquanto não houver histórico comprovável, usamos números de
        capacidade. TODO: substituir por volume real quando houver.
      */}
      <section className="section" aria-label="Nossos números">
        <div className="container grid grid--4">
          <div className="stat">
            <span className="stat__value">6</span>
            <span className="stat__label">cidades atendidas sem taxa de deslocamento</span>
          </div>
          <div className="stat">
            <span className="stat__value">24h</span>
            <span className="stat__label">retorno em até 24h após o contato</span>
          </div>
          <div className="stat">
            <span className="stat__value">R$ 0</span>
            <span className="stat__label">visita técnica e orçamento sem custo</span>
          </div>
          <div className="stat">
            <span className="stat__value">1 visita</span>
            <span className="stat__label">orçamento fechado em uma única visita técnica</span>
          </div>
        </div>
      </section>

      {/* 3. Diferenciais + Manutenção */}
      <section className="section section--alt" aria-labelledby="diferenciais-title">
        <div className="container">
          <span className="section__kicker">Por que a HMan</span>
          <h2 id="diferenciais-title">Por que escolher a HMan Segurança</h2>
          <p style={{ maxWidth: 760 }}>
            Aqui, quem projeta é quem instala: o atendimento é feito diretamente por{" "}
            <Link className="inline-link" to="/sobre">Bruno Goulart, profissional de tecnologia
            com mais de 18 anos de experiência</Link> — câmera, gravação e rede são a área de
            origem dele, não um bico.
          </p>
          <div className="grid grid--3">
            {DIFERENCIAIS.map((d) => (
              <article className="card" key={d.title}>
                <div className="card__icon" aria-hidden="true">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>

          <h3 style={{ marginTop: 40 }}>Não é só instalar — é manter funcionando</h3>
          <p style={{ maxWidth: 760 }}>
            A maior parte dos problemas de CFTV não aparece na instalação, aparece meses depois:
            cabo ressecado, conector oxidado, câmera desalinhada, fonte de alimentação queimada.
            Por isso, oferecemos:
          </p>
          <div className="grid grid--2">
            <article className="card">
              <h3>Manutenção periódica</h3>
              <p>Revisão de imagem, conexão e gravação de câmeras e alarmes.</p>
            </article>
            <article className="card">
              <h3>Ajuste e troca de local de câmeras</h3>
              <p>Quando o ambiente muda: nova estante em loja, novo quarto liberado para hóspede, novo layout de fábrica.</p>
            </article>
            <article className="card">
              <h3>Passagem e substituição de cabos</h3>
              <p>Cabos se desgastam com sol, chuva e tempo — trocamos antes de virar falha de gravação.</p>
            </article>
            <article className="card">
              <h3>Troca de conectores e fontes</h3>
              <p>Causa mais comum de câmera "fora do ar" sem ninguém perceber até o dia em que precisa da imagem e ela não existe.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Aplicações */}
      <section className="section" aria-labelledby="aplicacoes-title">
        <div className="container">
          <span className="section__kicker">Onde atuamos</span>
          <h2 id="aplicacoes-title">Onde instalamos e por quê</h2>

          <article style={{ marginBottom: 36 }}>
            <h3>Águas de Lindóia (SP): Segurança para quem vive de turismo</h3>
            <p>
              Águas de Lindóia recebe turistas o ano inteiro — e onde há fluxo de gente de fora, há
              risco. Hotéis, pousadas e principalmente imóveis de aluguel por temporada (Airbnb,
              VRBO, Booking.com e sistemas de gestão como o Stays) precisam de duas coisas ao mesmo
              tempo: hóspede protegido e proprietário protegido.
            </p>
            <p>Câmeras nas áreas comuns, portarias, garagens e acessos externos:</p>
            <ul>
              <li>Inibem furto, roubo e atos de violência antes que aconteçam.</li>
              <li>Geram prova em vídeo para resolver disputas de check-in/check-out, dano ao imóvel ou conduta do hóspede.</li>
              <li>Reduzem o risco de avaliação negativa causada por incidentes que poderiam ter sido evitados ou documentados.</li>
              <li>Dão segurança jurídica ao anfitrião em caso de acionamento de seguro ou disputa com plataforma.</li>
            </ul>
            <p className="note">
              Ideal para: pousadas, hotéis, casas e apartamentos de temporada, prédios com locação
              por curta duração.
            </p>
          </article>

          <article style={{ marginBottom: 36 }}>
            <h3>Monte Sião (MG): Segurança para o polo têxtil do Sul de Minas</h3>
            <p>
              Monte Sião é a Capital Nacional do Tricô, com mais de mil fábricas e 600 lojas
              recebendo compradores o ano inteiro. Onde há fluxo de dinheiro e mercadoria, há risco
              de furto, roubo e agressão a clientes e funcionários.
            </p>
            <p>Câmeras internas e externas na loja, no estoque e na linha de produção:</p>
            <ul>
              <li>Inibem furto de mercadoria e reduzem perdas.</li>
              <li>Protegem clientes durante a compra e funcionários durante o expediente.</li>
              <li>Geram prova em vídeo para ocorrência policial, seguro e processos trabalhistas.</li>
              <li>Nas fábricas e malharias, monitoram acesso, controle de produção e segurança da linha.</li>
            </ul>
            <p className="note">Ideal para: lojas de tricô, malharias, fábricas, estoques, centros de distribuição.</p>
          </article>

          <article style={{ marginBottom: 36 }}>
            <h3>Residências, condomínios e locais públicos</h3>
            <p>
              Casa, prédio, condomínio, academia — qualquer lugar com fluxo de pessoas precisa de
              tudo filmado. Em caso de furto, roubo, agressão ou disputa, quem tem imagem tem prova.
            </p>
            <ul>
              <li><strong>Residências:</strong> monitoramento de portão, garagem e áreas externas.</li>
              <li><strong>Condomínios e prédios:</strong> hall, portaria, elevador e áreas comuns.</li>
              <li><strong>Academias e locais com grande circulação:</strong> segurança de patrimônio e de pessoas.</li>
            </ul>
          </article>

          <article>
            <h3>Também atendemos: Lindóia, Serra Negra, Socorro e Itapira</h3>
            <p>
              Além do foco principal em Águas de Lindóia e Monte Sião, atendemos toda a região do
              Circuito das Águas Paulista e o entorno da divisa SP/MG:
            </p>
            <ul>
              <li><strong>Lindóia e Serra Negra:</strong> mesmo perfil turístico e de temporada de Águas de Lindóia — pousadas, hotéis e locação por plataforma.</li>
              <li><strong>Socorro:</strong> turismo de aventura e temporada, com necessidade semelhante de segurança patrimonial em pousadas e comércio.</li>
              <li><strong>Itapira:</strong> perfil mais comercial e residencial, com demanda por CFTV em lojas, condomínios e indústrias locais.</li>
            </ul>
            <p>
              Precisa de <Link className="inline-link" to="/eletrica">serviços elétricos em Águas de Lindóia, Monte Sião e região</Link>?
              Também atendemos — do reparo pontual ao quadro de disjuntores completo.
            </p>
          </article>

          <img
            src="/images/hman_cftv_servicos_instalacao_banner_1.webp"
            alt="Técnico da HMan instalando e ajustando câmera de segurança CFTV em área externa"
            className="banner-img"
            loading="lazy"
            decoding="async"
            width={1200}
            height={630}
          />
        </div>
      </section>

      {/* 5. Tecnologias CFTV */}
      <section className="section section--dark" aria-labelledby="tecnologias-title">
        <div className="container">
          <span className="section__kicker">Tecnologias CFTV</span>
          <h2 id="tecnologias-title">Trabalhamos com as marcas mais confiáveis do mercado</h2>
          <div className="grid grid--2" style={{ marginBottom: 28 }}>
            {MARCAS_CFTV.map((m) => (
              <article className="card" key={m.marca} style={{ background: "#1e1f1e", borderColor: "#2c2d2c", color: "#e8e8e8" }}>
                <h3 style={{ color: "#ffc400" }}>{m.marca}</h3>
                <p style={{ marginBottom: 4 }}><strong>{m.perfil}</strong></p>
                <p style={{ marginBottom: 0, color: "#bdbdbd" }}>{m.aplicacao}</p>
              </article>
            ))}
          </div>
          <h3>Recomendação rápida por perfil</h3>
          <ul>
            <li><strong>Residência / pousada pequena:</strong> Intelbras.</li>
            <li><strong>Loja de tricô / comércio de médio porte:</strong> Hikvision ou Dahua.</li>
            <li><strong>Fábrica / malharia / projeto corporativo:</strong> Axis, Bosch ou Hanwha Vision.</li>
          </ul>
        </div>
      </section>

      {/* 6. Alarmes */}
      <section className="section" aria-labelledby="alarmes-title">
        <div className="container">
          <span className="section__kicker">Alarmes</span>
          <h2 id="alarmes-title">Alarmes para todo perfil — do básico ao conectado</h2>
          <p style={{ maxWidth: 760 }}>
            Assim como em câmeras, no alarme existe uma faixa que vai do sistema simples e sem fio
            até soluções com monitoramento 24h, aplicativo e automação. Ajudamos você a escolher o
            nível certo para o seu caso — sem vender mais tecnologia do que você precisa.
          </p>

          <div className="grid grid--3">
            <article className="card">
              <h3>Entrada e custo-benefício</h3>
              <ul>
                <li><strong>Intelbras</strong> — a porta de entrada mais comum no Brasil, com boa disponibilidade e integração por aplicativo.</li>
                <li><strong>JFL</strong> — tradição em segurança eletrônica, com foco em robustez e boa relação preço/funcionalidade.</li>
                <li><strong>Giga</strong> — opção acessível para quem quer um sistema funcional sem partir para o premium.</li>
                <li><strong>Positivo Casa Segura</strong> — para quem busca praticidade e um app simples de usar.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Nível intermediário</h3>
              <ul>
                <li><strong>Intelbras (linhas IP e monitoradas)</strong> — sensores sem fio, app e comunicação por Ethernet ou Wi-Fi.</li>
                <li><strong>JFL Active 32 Duo</strong> — mais zonas e recursos que os kits mais simples.</li>
                <li><strong>Ajax</strong> — sobe o nível em tecnologia, automação e confiabilidade.</li>
                <li><strong>Verisure</strong> — entra aqui quando o foco é monitoramento contratado, não só equipamento.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Sofisticado e IoT</h3>
              <ul>
                <li><strong>Verisure</strong> — monitoramento 24h, sensores conectados, videomonitoramento e resposta profissional.</li>
                <li><strong>Ajax</strong> — ecossistema inteligente, sensores sem fio e automação de ponta.</li>
                <li><strong>Intelbras IP/monitoradas</strong> — acompanhamento em tempo real via app, ideal para projetos conectados.</li>
                <li><strong>Soluções corporativas premium</strong> — monitoramento profissional e múltiplos canais de comunicação.</li>
              </ul>
            </article>
          </div>

          <h3 style={{ marginTop: 36 }}>Leitura prática</h3>
          <ul>
            <li>Prioridade em <strong>custo-benefício:</strong> Intelbras e JFL são os nomes mais seguros para começar.</li>
            <li>Prioridade em <strong>tecnologia conectada e IoT:</strong> Ajax e Verisure se destacam pelo ecossistema e automação.</li>
            <li>Prioridade em <strong>facilidade de compra e suporte local:</strong> Intelbras continua sendo a referência mais prática.</li>
            <li>Prioridade em <strong>monitoramento profissional completo:</strong> Verisure é a opção mais forte.</li>
          </ul>

          <h3>Por segmento</h3>
          <div className="grid grid--2">
            {ALARMES_SEGMENTOS.map((s) => (
              <article className="card" key={s.segmento}>
                <h3>{s.segmento}</h3>
                <p style={{ marginBottom: 0 }}>{s.marcas}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Teaser Informática e Redes */}
      <section className="section section--alt" aria-labelledby="pc-teaser-title">
        <div className="container">
          <span className="section__kicker">Informática e Redes</span>
          <h2 id="pc-teaser-title">Também cuidamos do resto da sua estrutura de tecnologia</h2>
          <p style={{ maxWidth: 760 }}>
            Câmera e alarme dependem de rede, cabo e computador funcionando bem — por isso também
            oferecemos montagem e manutenção de computadores, redes cabeadas e wi-fi, formatação e
            instalação de sistemas, e uma especialidade em redes para hotéis e pousadas.
          </p>
          <ul>
            <li>Montagem de computadores, troca de hardware e periféricos.</li>
            <li>Instalação de softwares, formatação e instalação de Windows e Linux.</li>
            <li>Crimpagem e teste de cabos de rede (LAN RJ45).</li>
            <li>Configuração de redes Windows e Linux, cabeadas e wi-fi.</li>
            <li>Consultoria e dimensionamento de computadores para cada uso: desktop, servidor, computador para CFTV e computador gamer.</li>
            <li>Especialidade em dimensionamento de rede wi-fi para hotéis e pousadas.</li>
          </ul>
          <Link to="/pc" className="btn btn--primary">
            Conheça todos os serviços de Computadores e Redes
          </Link>
        </div>
      </section>

      {/* 8. FAQ */}
      <Faq items={FAQ_HOME} />

      {/* 9. Contato final */}
      <ContactCta
        title="Proteja o que você construiu — hoje, não depois de um problema"
        text="Furto, roubo e prejuízo não avisam. Fale agora com quem entende a realidade de Águas de Lindóia, Monte Sião e região."
        secondaryLabel="Enviar e-mail"
      />
    </>
  );
}
