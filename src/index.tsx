import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout";
import { AccueilMobile } from "./screens/AccueilMobile";
import { MetierMobile } from "./screens/MetierMobile";
import { MtierMobile } from "./screens/MtierMobile";
import { AboutPage } from "./screens/AboutPage";
import { ContactPage } from "./screens/ContactPage";
import { ContrleTechnique } from "./screens/ContrleTechnique";
import { Performance } from "./screens/Performance";
import { PageRessources } from "./screens/PageRessources";
import { BureauDTudeMobile } from "./screens/BureauDTudeMobile";
import { Diagnostics } from "./screens/Diagnostics";
import { PageArticle } from "./screens/PageArticle";
import { Actualits } from "./screens/Actualits";
import { ProjetMobile } from "./screens/ProjetMobile";
import { TousLesServices } from "./screens/TousLesServices";
import { VilleMobile } from "./screens/VilleMobile";
import { ProPage } from "./screens/ProPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<AccueilMobile />} />
          <Route path="/metier" element={<MetierMobile />} />
          <Route path="/metier-2" element={<MtierMobile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/controle-technique" element={<ContrleTechnique />} />
          <Route path="/performance-energetique" element={<Performance />} />
          <Route path="/ressources" element={<PageRessources />} />
          <Route path="/bureau-etude" element={<BureauDTudeMobile />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/article" element={<PageArticle />} />
          <Route path="/actualites" element={<Actualits />} />
          <Route path="/projet" element={<ProjetMobile />} />
          <Route path="/services" element={<TousLesServices />} />
          <Route path="/ville" element={<VilleMobile />} />
          <Route path="/pro" element={<ProPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </StrictMode>,
);
