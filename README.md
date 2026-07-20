# HMan — local.ia.br

Site institucional da **HMan** (serviços para sua casa e seu negócio): CFTV e alarmes, computadores e redes, elétrica e marido de aluguel.

## Stack

- **React 19 + Vite + TypeScript**
- **React Router DOM 7** (4 rotas de conteúdo + páginas legais)
- **SSG** — cada rota é pré-renderizada em HTML estático no build (SEO não depende de JavaScript)
- CSS puro com design tokens da identidade visual (`src/styles/global.css`)
- Sem dependências de terceiros no front além do React — zero scripts externos bloqueando renderização

## Rotas

| Rota | Página |
|---|---|
| `/` | Home — CFTV e Alarmes (Águas de Lindóia / Monte Sião) |
| `/pc` | Computadores e Redes |
| `/eletrica` | Elétrica (Águas de Lindóia / Monte Sião / Circuito das Águas) |
| `/marido-de-aluguel` | Marido de Aluguel / Reparos Gerais |
| `/politica-de-privacidade`, `/termos-de-uso` | Páginas legais |

## Comandos

```bash
npm install       # instalar dependências
npm run dev       # servidor de desenvolvimento
npm run build     # build SSG completo → dist/client
npm run preview   # servir o build localmente
npm run typecheck # verificação de tipos
```

## Deploy

Publique o conteúdo de **`dist/client`** em qualquer hospedagem estática (Cloudflare Pages, Netlify, Vercel, GitHub Pages...). O build já gera:

- HTML pré-renderizado por rota (com meta tags, Open Graph, canonical e JSON-LD próprios)
- `sitemap.xml` (com lastmod do dia do build) e `robots.txt`
- `404.html` para fallback de rota inexistente

Como as rotas são pré-renderizadas em `pasta/index.html`, **não** é necessário rewrite de SPA — mas se a hospedagem oferecer, aponte o fallback 404 para `404.html`.

## ⚠️ Antes de publicar (TODOs)

1. **`src/config/site.ts`** — substituir os placeholders de Instagram e Facebook. (O CNPJ está oculto por enquanto — comentado em `site.ts` e removido do Footer; reativar nos dois lugares quando for exibir.)
2. **Foto do Bruno** — salvar em `public/images/bruno-goulart.webp` (quadrada, ~800×800). A página `/sobre` já tem o slot pronto; enquanto o arquivo não existir, o espaço fica oculto automaticamente.
2. **Números da Home** — a seção "Números" usa afirmações de capacidade (não estatísticas inventadas, exigência da spec/CDC). Quando houver histórico real (+X instalações), atualizar em `src/pages/HomePage.tsx`.
3. **Páginas legais** — revisar os textos de Política de Privacidade e Termos de Uso com orientação jurídica.
4. **Perfil da Empresa no Google** — criar com nome, endereço e telefone idênticos aos do site (P0 do checklist de SEO local).
5. Testar em celular real (checklist em `docs/spec/spec-local-ia-br-checklist-mobile.md`, seção 6).

## Onde editar

- **Conteúdo das páginas:** `src/pages/*.tsx` (tabelas de preço são arrays no topo de cada arquivo)
- **SEO/metadados/JSON-LD por rota:** `src/seo/meta.ts` (fonte única — o prerender e a navegação SPA leem daqui)
- **Dados de contato e mensagens de WhatsApp por página:** `src/config/site.ts`
- **Identidade visual:** `src/styles/global.css` (variáveis no `:root`)

## Specs de origem

O conteúdo segue os documentos em `docs/spec/` (conteúdo/SEO, páginas de elétrica e marido de aluguel, checklist mobile-first e identidade visual).
