import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import Contact from "./components/sections/Contact";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
