import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Seo } from "./seo/Seo";
import { HomePage } from "./pages/HomePage";
import { PcPage } from "./pages/PcPage";
import { EletricaPage } from "./pages/EletricaPage";
import { MaridoAluguelPage } from "./pages/MaridoAluguelPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacidadePage, TermosPage } from "./pages/LegalPage";
import { SobrePage } from "./pages/SobrePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const { pathname } = useLocation();
  const isClient = typeof window !== "undefined";

  return (
    <>
      {isClient && <ScrollToTop />}
      {isClient && <Seo path={pathname} />}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pc" element={<PcPage />} />
          <Route path="/eletrica" element={<EletricaPage />} />
          <Route path="/marido-de-aluguel" element={<MaridoAluguelPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
          <Route path="/termos-de-uso" element={<TermosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
