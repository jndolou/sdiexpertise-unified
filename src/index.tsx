import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./UserInterface/components/layout";
import { AccueilMobile } from "./UserInterface/screens/AccueilMobile";
import { MetierMobile } from "./UserInterface/screens/MetierMobile";
import { MtierMobile } from "./UserInterface/screens/MtierMobile";
import { AboutPage } from "./UserInterface/screens/AboutPage";
import { ContactPage } from "./UserInterface/screens/ContactPage";
import { ContrleTechnique } from "./UserInterface/screens/ContrleTechnique";
import { Performance } from "./UserInterface/screens/Performance";
import { PageRessources } from "./UserInterface/screens/PageRessources";
import { BureauDTudeMobile } from "./UserInterface/screens/BureauDTudeMobile";
import { Diagnostics } from "./UserInterface/screens/Diagnostics";
import { PageArticle } from "./UserInterface/screens/PageArticle";
import { Actualits } from "./UserInterface/screens/Actualits";
import { ProjetMobile } from "./UserInterface/screens/ProjetMobile";
import { TousLesServices } from "./UserInterface/screens/TousLesServices";
import { VilleMobile } from "./UserInterface/screens/VilleMobile";
import { ProPage } from "./UserInterface/screens/ProPage";
import { Commande } from "./UserInterface/screens/Commande";
import { Commande3 } from "./UserInterface/screens/Commande3";
import { CommandePack } from "./UserInterface/screens/CommandePack";
import { CommandePaiement } from "./UserInterface/screens/CommandePaiement";
import { CommandeValidation } from "./UserInterface/screens/CommandeValidation";
import { RendezVous } from "./UserInterface/screens/RendezVous";

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
          <Route path="/commande" element={<Commande />} />
          <Route path="/commande-rendez-vous" element={<Commande3 />} />
          <Route path="/commande-pack" element={<CommandePack />} />
          <Route path="/commande-paiement" element={<CommandePaiement />} />
          <Route path="/commande-validation" element={<CommandeValidation />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  </StrictMode>,
);
