/**
 * Dados centrais do site — edite aqui e o site inteiro atualiza.
 * TODO: substituir os placeholders (redes sociais) por dados reais antes de publicar.
 */
export const SITE = {
  name: "HMan",
  tagline: "Serviços para sua casa e seu negócio",
  url: "https://www.local.ia.br",
  /** Telefone em formato internacional, só dígitos — usado no wa.me e tel: */
  phone: "5519992496598",
  phoneDisplay: "(19) 99249-6598",
  email: "brunopelatieri@gmail.com",
  // CNPJ oculto por enquanto — quando for exibir, reative aqui e no Footer.tsx
  // cnpj: "00.000.000/0001-00",
  instagram: "https://instagram.com/hman", // TODO: perfil real
  facebook: "https://facebook.com/hman", // TODO: perfil real
} as const;

/** Fundador — marca pessoal (endosso e E-E-A-T) */
export const FOUNDER = {
  name: "Bruno Pelatieri Goulart",
  shortName: "Bruno Goulart",
  jobTitle: "Especialista em Automação com IA e Desenvolvedor Full Stack",
  photo: "/images/bruno-goulart.webp",
  site: "https://brunogoulart.com.br/",
  siteSobre: "https://brunogoulart.com.br/sobre",
  bio: "https://bio.brunogoulart.com.br/",
  github: "https://github.com/brunopelatieri",
} as const;

/** Área de atendimento consolidada (todas as cidades das 4 páginas) */
export const CITIES = [
  "Águas de Lindóia/SP",
  "Monte Sião/MG",
  "Lindóia/SP",
  "Serra Negra/SP",
  "Socorro/SP",
  "Itapira/SP",
  //"Conchal/SP",
  //"Região de Campinas/SP",
] as const;

/** Mensagem pré-preenchida do WhatsApp por página (rastreio de origem do lead) */
export const WHATSAPP_MESSAGES: Record<string, string> = {
  "/": "Vim do site, quero orçamento de CFTV/Alarme",
  "/pc": "Vim do site, quero orçamento de Informática/Redes",
  "/eletrica": "Vim do site, quero orçamento de Elétrica",
  "/marido-de-aluguel": "Vim do site, quero orçamento de reparos",
  "/sobre": "Vim do site, quero falar com o Bruno sobre um serviço",
};

export function whatsappLink(pathname: string): string {
  const msg = WHATSAPP_MESSAGES[pathname] ?? WHATSAPP_MESSAGES["/"];
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(msg)}`;
}
