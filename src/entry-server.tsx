import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";
import { buildHeadHtml, ROUTES_META } from "./seo/meta";

/** Rotas a pré-renderizar no build (SSG). */
export const PRERENDER_PATHS = Object.keys(ROUTES_META);

export function render(url: string): { appHtml: string; headHtml: string } {
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { appHtml, headHtml: buildHeadHtml(url) };
}
