import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <Projects />
        <Skills />

        {/* Sections temporaires */}
        <section
          id="about"
          style={{ minHeight: "100vh", padding: "4rem 2rem" }}
        >
          <div className="container">
            <h2>À propos</h2>
            <p>Section à venir...</p>
          </div>
        </section>

        <section
          id="parcours"
          style={{
            minHeight: "100vh",
            padding: "4rem 2rem",
            background: "var(--bg-secondary)",
          }}
        >
          <div className="container">
            <h2>Parcours</h2>
            <p>Section à venir...</p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
