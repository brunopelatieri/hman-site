import { useEffect } from "react";
import { ROUTES_META } from "./meta";
import { SITE } from "../config/site";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Atualiza os metadados no client durante navegação SPA.
 * No primeiro carregamento o HTML já vem pré-renderizado (SSG) com as
 * mesmas tags, então não há flash nem divergência para o crawler.
 */
export function Seo({ path }: { path: string }) {
  useEffect(() => {
    const meta = ROUTES_META[path] ?? ROUTES_META["/"];
    const canonical = `${SITE.url}${meta.path === "/" ? "/" : meta.path}`;

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:title", meta.ogTitle);
    setMeta("property", "og:description", meta.ogDescription);
    setMeta("property", "og:image", meta.ogImage);
    setMeta("name", "twitter:title", meta.ogTitle);
    setMeta("name", "twitter:description", meta.ogDescription);
    setMeta("name", "twitter:image", meta.ogImage);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
    for (const block of meta.jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(block);
      document.head.appendChild(script);
    }
  }, [path]);

  return null;
}
