import { FOUNDER, SITE } from "../config/site";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  /** Blocos JSON-LD específicos da rota (além do LocalBusiness global) */
  jsonLd: object[];
}

const OG_IMAGE = `${SITE.url}/images/og-image.webp`;

/* ---------------------------------------------------------------- */
/* JSON-LD compartilhado                                             */
/* ---------------------------------------------------------------- */

const AREA_SERVED = [
  { "@type": "City", name: "Águas de Lindóia", address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
  { "@type": "City", name: "Monte Sião", address: { "@type": "PostalAddress", addressRegion: "MG", addressCountry: "BR" } },
  { "@type": "City", name: "Lindóia", address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
  { "@type": "City", name: "Serra Negra", address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
  { "@type": "City", name: "Socorro", address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
  { "@type": "City", name: "Itapira", address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" } },
];

/** Entidade Person do fundador — conecta a HMan à marca pessoal (E-E-A-T). */
export const FOUNDER_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/sobre#bruno`,
  name: FOUNDER.name,
  jobTitle: FOUNDER.jobTitle,
  image: `${SITE.url}${FOUNDER.photo}`,
  url: FOUNDER.site,
  worksFor: { "@id": `${SITE.url}/#business` },
  sameAs: [FOUNDER.site, FOUNDER.siteSobre, FOUNDER.bio, FOUNDER.github],
};

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  slogan: SITE.tagline,
  description:
    "CFTV e alarmes, computadores e redes, elétrica e reparos gerais — instalação, manutenção e suporte contínuo.",
  url: SITE.url,
  logo: `${SITE.url}/images/hman_logo_square.webp`,
  image: OG_IMAGE,
  telephone: `+${SITE.phone}`,
  email: SITE.email,
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Águas de Lindóia", addressRegion: "SP", addressCountry: "BR" },
  areaServed: AREA_SERVED,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [SITE.instagram, SITE.facebook],
  founder: {
    "@type": "Person",
    "@id": `${SITE.url}/sobre#bruno`,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    url: FOUNDER.site,
    sameAs: [FOUNDER.site, FOUNDER.bio, FOUNDER.github],
  },
};

function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}${path}` },
    ],
  };
}

function servicesJsonLd(services: string[], serviceType: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceType,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
  };
}

/* ---------------------------------------------------------------- */
/* FAQs (fonte única — usadas na página e no JSON-LD)                */
/* ---------------------------------------------------------------- */

export const FAQ_HOME = [
  { q: "Quanto custa instalar CFTV ou alarme em Águas de Lindóia ou Monte Sião?", a: "O valor varia conforme número de câmeras/sensores, resolução e tipo de imóvel. Fazemos visita técnica gratuita e enviamos orçamento fechado." },
  { q: "Consigo ver as câmeras e o status do alarme pelo celular?", a: "Sim. Trabalhamos com sistemas com acesso remoto por aplicativo." },
  { q: "As câmeras funcionam à noite?", a: "Sim, com visão noturna infravermelho ou colorida de baixa luminosidade." },
  { q: "É legal gravar minha loja, pousada ou condomínio?", a: "Sim, desde que a área monitorada esteja sinalizada e o uso das imagens respeite a LGPD. Orientamos a sinalização correta em toda instalação." },
  { q: "Vocês fazem manutenção de câmera já instalada por outra empresa?", a: "Sim. Fazemos revisão, ajuste de posição, troca de cabo, conector e fonte de alimentação em sistemas já existentes." },
  { q: "Qual a diferença entre um alarme básico e um alarme com monitoramento 24h?", a: "O básico dispara localmente (sirene/app); o monitorado aciona uma central que verifica e pode acionar apoio. Ajudamos a escolher o nível certo para o seu caso e orçamento." },
  { q: "Atendem apenas Águas de Lindóia e Monte Sião?", a: "Nosso foco é essas duas cidades, mas atendemos também Lindóia, Serra Negra, Socorro e Itapira." },
];

export const FAQ_PC = [
  { q: "Vocês fazem backup dos meus arquivos antes de formatar?", a: "Sim, orientamos e podemos realizar backup antes de qualquer formatação, para garantir que nada se perca." },
  { q: "Atendem empresas e não só residências?", a: "Sim, atendemos residências, comércio, indústria e hotelaria." },
  { q: "Fazem rede para hotel pequeno, com poucos quartos?", a: "Sim, dimensionamos a rede para o tamanho real do seu negócio, de pousadas pequenas a hotéis maiores." },
  { q: "Trabalham com Windows e Linux?", a: "Sim, instalamos, formatamos e configuramos rede nos dois sistemas." },
  { q: "Montam computador para gravação de CFTV?", a: "Sim, dimensionamos o computador certo conforme número de câmeras, resolução e tempo de gravação necessário." },
  { q: "Qual o prazo de um serviço de rede ou formatação?", a: "Depende do porte — após diagnóstico, você recebe prazo exato antes de aprovar o orçamento." },
];

export const FAQ_ELETRICA = [
  { q: "Vocês emitem ART?", a: "Sim, quando o serviço exige — informamos antes se o seu caso precisa." },
  { q: "O material está incluso no preço?", a: "Não, os valores são de mão de obra. Material é orçado à parte e você aprova antes de comprarmos." },
  { q: "Atendem urgência (sem luz, curto-circuito)?", a: "Sim, priorizamos chamados de risco (curto, cheiro de queimado, sem energia total)." },
  { q: "Fazem serviço em comércio, não só residência?", a: "Sim, atendemos lojas, pequenos comércios e escritórios." },
  { q: "Qual a região de atendimento?", a: "Águas de Lindóia/SP, Monte Sião/MG e região — incluindo Lindóia, Serra Negra, Socorro e Itapira, no Circuito das Águas Paulista." },
];

export const FAQ_MARIDO = [
  { q: "Preciso saber exatamente o que quero, ou vocês ajudam a decidir?", a: "Você pode chegar só com a lista de \"problemas\" — a gente avalia o que dá para resolver na mesma visita." },
  { q: "O material está incluso?", a: "Não, é orçado à parte e sempre aprovado por você antes da compra." },
  { q: "Fazem serviço elétrico e hidráulico na mesma visita?", a: "Sim, o pacote marido de aluguel é justamente para resolver tarefas de áreas diferentes numa visita só." },
  { q: "Atendem comércio, não só residência?", a: "Sim, atendemos pequenos comércios e escritórios também." },
  { q: "Qual a região de atendimento?", a: "Águas de Lindóia/SP, Monte Sião/MG e região — incluindo Lindóia, Serra Negra, Socorro e Itapira, no Circuito das Águas Paulista." },
];

/* ---------------------------------------------------------------- */
/* Metadados por rota                                                */
/* ---------------------------------------------------------------- */

export const ROUTES_META: Record<string, RouteMeta> = {
  "/": {
    path: "/",
    title: "CFTV e Alarmes em Águas de Lindóia e Monte Sião",
    description:
      "Instalação, manutenção e suporte de CFTV e alarmes em Águas de Lindóia, Monte Sião e região. Segurança para pousadas, lojas, fábricas e residências.",
    ogTitle: "HMan Segurança — CFTV e Alarmes em Águas de Lindóia e Monte Sião",
    ogDescription:
      "Câmeras e alarmes com instalação, manutenção e suporte contínuo. Atendimento em Águas de Lindóia, Monte Sião, Lindóia, Serra Negra, Socorro e Itapira.",
    ogImage: OG_IMAGE,
    jsonLd: [
      LOCAL_BUSINESS_JSONLD,
      faqJsonLd(FAQ_HOME),
      servicesJsonLd(
        ["Instalação de CFTV", "Manutenção de CFTV", "Instalação de alarmes residenciais e comerciais", "Monitoramento remoto por aplicativo", "Troca de cabos, conectores e fontes de alimentação"],
        "Segurança eletrônica — CFTV e alarmes",
      ),
    ],
  },
  "/pc": {
    path: "/pc",
    title: "Informática e Redes em Águas de Lindóia e Monte Sião",
    description:
      "Montagem de computadores, redes cabeadas e wi-fi, formatação Windows/Linux e suporte técnico. Especialistas em redes para hotéis. Atendimento local, orçamento grátis.",
    ogTitle: "HMan PC & Redes — Informática e Redes em Águas de Lindóia e Monte Sião",
    ogDescription:
      "Montagem, formatação, cabeamento de rede e wi-fi para residências, comércio, hotéis e pousadas. Consultoria de dimensionamento para cada necessidade.",
    ogImage: `${SITE.url}/images/hman_computadores_redes_servicos_instalacao_banner.webp`,
    jsonLd: [
      faqJsonLd(FAQ_PC),
      breadcrumbJsonLd("Computadores e Redes", "/pc"),
      servicesJsonLd(
        ["Montagem de computadores", "Troca de hardware e periféricos", "Instalação de softwares", "Formatação e instalação de Windows e Linux", "Crimpagem e teste de cabo de rede LAN RJ45", "Configuração de redes Windows e Linux", "Configuração de hub/switch e wi-fi", "Dimensionamento de rede wi-fi para hotéis e pousadas", "Consultoria de computadores: desktop, servidor, CFTV e gamer"],
        "Informática e redes",
      ),
    ],
  },
  "/eletrica": {
    path: "/eletrica",
    title: "Eletricista em Águas de Lindóia, Monte Sião e Região",
    description:
      "Serviços de elétrica residencial e comercial de pequeno porte: tomadas, disjuntores, chuveiro, iluminação e mais. Atendimento em Águas de Lindóia, Monte Sião e Circuito das Águas Paulista. Orçamento rápido.",
    ogTitle: "HMan Elétrica — Serviços Elétricos em Águas de Lindóia e Monte Sião",
    ogDescription:
      "Do reparo pontual à instalação completa. Elétrica residencial e comercial com segurança, normas técnicas e preço claro por serviço.",
    ogImage: `${SITE.url}/images/hman_eletrica_servicos_instalacao_banner.webp`,
    jsonLd: [
      faqJsonLd(FAQ_ELETRICA),
      breadcrumbJsonLd("Elétrica", "/eletrica"),
      servicesJsonLd(
        ["Iluminação residencial e comercial", "Instalação de tomadas e interruptores", "Quadro de disjuntores, DR e DPS", "Instalação de chuveiro e torneira elétrica", "Instalação de ventiladores e exaustores", "Diagnóstico e reparo de curto-circuito", "Infraestrutura de pontos novos"],
        "Serviços elétricos residenciais e comerciais",
      ),
    ],
  },
  "/marido-de-aluguel": {
    path: "/marido-de-aluguel",
    title: "Marido de Aluguel em Águas de Lindóia e Monte Sião",
    description:
      "Montagem de móveis, fixações, hidráulica leve, pintura e pequenos reparos. Marido de aluguel em Águas de Lindóia, Monte Sião e Circuito das Águas Paulista. Peça seu orçamento.",
    ogTitle: "HMan Reparos — Marido de Aluguel em Águas de Lindóia e Monte Sião",
    ogDescription:
      "Aquela lista de pequenos reparos que fica sempre para depois? Resolvemos tudo numa visita só — fixações, hidráulica leve, móveis, pintura e mais.",
    ogImage: `${SITE.url}/images/hman_marido_aluguel_servicos_instalacao_banner.webp`,
    jsonLd: [
      faqJsonLd(FAQ_MARIDO),
      breadcrumbJsonLd("Marido de Aluguel", "/marido-de-aluguel"),
      servicesJsonLd(
        ["Montagem de móveis", "Instalação de suporte de TV e prateleiras", "Portas e fechaduras", "Pintura e acabamento", "Hidráulica leve", "Instalação de eletrodomésticos", "Pacote de pequenos reparos"],
        "Marido de aluguel e reparos gerais",
      ),
    ],
  },
  "/sobre": {
    path: "/sobre",
    title: "Quem está por trás da HMan — Bruno Goulart",
    description:
      "A HMan é tocada por Bruno Pelatieri Goulart, profissional de tecnologia com 18+ anos de experiência. Cabeça de engenheiro na mão na massa: preço claro, serviço testado e documentado.",
    ogTitle: "Quem está por trás da HMan — Bruno Goulart",
    ogDescription:
      "Profissional de tecnologia com 18+ anos de experiência atendendo CFTV, redes, elétrica e reparos em Águas de Lindóia, Monte Sião e Circuito das Águas.",
    ogImage: OG_IMAGE,
    jsonLd: [FOUNDER_JSONLD, LOCAL_BUSINESS_JSONLD, breadcrumbJsonLd("Sobre", "/sobre")],
  },
  "/politica-de-privacidade": {
    path: "/politica-de-privacidade",
    title: "Política de Privacidade | HMan",
    description: "Como a HMan trata seus dados de contato e as imagens de CFTV, em conformidade com a LGPD.",
    ogTitle: "Política de Privacidade | HMan",
    ogDescription: "Como a HMan trata seus dados de contato e as imagens de CFTV, em conformidade com a LGPD.",
    ogImage: OG_IMAGE,
    jsonLd: [breadcrumbJsonLd("Política de Privacidade", "/politica-de-privacidade")],
  },
  "/termos-de-uso": {
    path: "/termos-de-uso",
    title: "Termos de Uso | HMan",
    description: "Condições de uso do site da HMan: preços de referência, orçamentos e propriedade de marcas citadas.",
    ogTitle: "Termos de Uso | HMan",
    ogDescription: "Condições de uso do site da HMan: preços de referência, orçamentos e propriedade de marcas citadas.",
    ogImage: OG_IMAGE,
    jsonLd: [breadcrumbJsonLd("Termos de Uso", "/termos-de-uso")],
  },
};

/** Gera as tags de head (string) de uma rota — usado no prerender (SSG). */
export function buildHeadHtml(path: string): string {
  const meta = ROUTES_META[path] ?? ROUTES_META["/"];
  const canonical = `${SITE.url}${meta.path === "/" ? "/" : meta.path}`;
  const jsonLdBlocks = meta.jsonLd
    .map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`)
    .join("\n    ");
  return [
    `<title>${meta.title}</title>`,
    `<meta name="description" content="${meta.description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${meta.ogTitle}" />`,
    `<meta property="og:description" content="${meta.ogDescription}" />`,
    `<meta property="og:image" content="${meta.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`,
    `<meta name="twitter:image" content="${meta.ogImage}" />`,
    jsonLdBlocks,
  ].join("\n    ");
}
