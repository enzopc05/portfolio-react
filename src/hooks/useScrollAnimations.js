import { useEffect } from "react";

/**
 * Hook personnalisé pour ajouter des animations au scroll
 * - Effet parallaxe
 * - Animations d'apparition
 * - Transitions fluides entre sections
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    // Gestion du parallaxe
    const handleParallax = () => {
      const scrolled = window.pageYOffset;

      // Appliquer l'effet parallaxe aux particules et au fond
      const particles = document.querySelector(".particles-canvas");
      const animatedBg = document.querySelector(".animated-background");

      if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
      }

      if (animatedBg) {
        const orbs = animatedBg.querySelectorAll(".gradient-orb");
        orbs.forEach((orb, index) => {
          const speed = 0.3 + index * 0.1;
          orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    // Animation des éléments au scroll (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observer tous les éléments animables
    const animatableElements = document.querySelectorAll(
      ".project-card, .skill-bar, .timeline__item, .about__interest, .contact__info-card, section > *"
    );

    animatableElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    // Ajouter l'événement de scroll pour le parallaxe
    window.addEventListener("scroll", handleParallax, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleParallax);
      observer.disconnect();
    };
  }, []);
};

/**
 * Hook pour les animations de texte (apparition lettre par lettre)
 */
export const useTextAnimation = (elementSelector, delay = 50) => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelector);

    elements.forEach((element, elemIndex) => {
      const text = element.textContent;
      element.textContent = "";
      element.style.opacity = "1";

      text.split("").forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.animation = `fadeInChar 0.3s ease forwards`;
        span.style.animationDelay = `${elemIndex * 500 + charIndex * delay}ms`;
        element.appendChild(span);
      });
    });
  }, [elementSelector, delay]);
};

/**
 * Hook pour l'effet de morphing/transition entre sections
 */
export const useSectionTransitions = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter une classe pour la section active
          sections.forEach((s) => s.classList.remove("section-active"));
          entry.target.classList.add("section-active");

          // Effet de transition de couleur
          entry.target.style.transition = "background-color 1s ease";
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;
