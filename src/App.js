import React from "react";
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
import AnimatedBackground from "./components/AnimatedBackground";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import "./styles/theme.css";

// Composant pour la page d'accueil principale
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Timeline />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Effets visuels globaux - z-index gérés dans leurs CSS respectifs */}
        <AnimatedBackground />
        <Particles />
        <CustomCursor />

        {/* Structure principale du site */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueConfidentialite />}
          />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
