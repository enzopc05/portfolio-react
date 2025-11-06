import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";
import MentionsLegales from "./components/legal/MentionsLegales";
import PolitiqueConfidentialite from "./components/legal/PolitiqueConfidentialite";

// ============================================
// NOUVEAUX IMPORTS - Composants UX/UI
// ============================================
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/common/ScrollToTop";

// Composants visuels existants
import AnimatedBackground from "./components/AnimatedBackground";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import ThemeTransition from "./components/ThemeTransition.jsx";
import FloatingShapes from "./components/FloatingShapes";

// Hooks personnalisés pour les animations
import { useScrollAnimations } from "./hooks/useScrollAnimations";

// Styles
import "./styles/theme.css";
import "./styles/visual-enhancements.css";

// Composant pour la page d'accueil principale
const HomePage = () => {
  // Activer les animations au scroll
  useScrollAnimations();

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </>
  );
};

function App() {
  // Ajouter les classes pour les effets visuels
  useEffect(() => {
    // Ajouter la classe glass-card aux éléments appropriés
    const addGlassEffect = () => {
      const cards = document.querySelectorAll(
        ".project-card, .contact__info-card, .about__interest, .skills__tab, .timeline__card"
      );
      cards.forEach((card) => {
        card.classList.add("dynamic-shadow");
      });

      // Ajouter l'effet shine aux boutons
      const buttons = document.querySelectorAll(
        ".hero__btn, .about__btn, .contact__submit, .projects__filter"
      );
      buttons.forEach((btn) => {
        btn.classList.add("shine-effect");
      });

      // Ajouter l'effet aux titres
      const titles = document.querySelectorAll(
        "h1, h2.projects__title, h2.skills__title, h2.timeline-section__title"
      );
      titles.forEach((title) => {
        title.classList.add("gradient-text-animated", "title-hover-effect");
      });
    };

    // Attendre que le DOM soit chargé
    setTimeout(addGlassEffect, 100);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {/* Effets visuels d'arrière-plan (ordre important pour le z-index) */}
        <AnimatedBackground />
        <FloatingShapes />
        <Particles />

        {/* Effets visuels de premier plan */}
        <CustomCursor />
        <ThemeTransition />

        {/* Structure principale du site */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/politique-confidentialite"
              element={<PolitiqueConfidentialite />}
            />
            {/* ============================================
                NOUVELLE ROUTE 404 - DOIT ÊTRE LA DERNIÈRE
                ============================================ */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* ============================================
            NOUVEAU COMPOSANT - Bouton Scroll to Top
            ============================================ */}
        <ScrollToTop showAfter={300} position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
