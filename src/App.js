import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />

        {/* Contenu temporaire pour tester */}
        <main style={{ paddingTop: "100px", minHeight: "100vh" }}>
          <div className="container">
            <section
              id="accueil"
              style={{ minHeight: "80vh", paddingTop: "2rem" }}
            >
              <h2>Accueil</h2>
              <p>Bienvenue sur mon portfolio !</p>
            </section>

            <section
              id="about"
              style={{ minHeight: "80vh", paddingTop: "2rem" }}
            >
              <h2>À propos</h2>
              <p>Section à propos...</p>
            </section>

            <section
              id="projets"
              style={{ minHeight: "80vh", paddingTop: "2rem" }}
            >
              <h2>Mes Projets</h2>
              <p>Mes projets...</p>
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
