import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/components/Particles.css';

const Particles = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Créer les particules
    const createParticles = () => {
      const particleCount = theme === 'light' ? 50 : 100;
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (theme === 'light' ? 3 : 2) + 1,
          speedX: (Math.random() - 0.5) * (theme === 'light' ? 0.5 : 0.3),
          speedY: (Math.random() - 0.5) * (theme === 'light' ? 0.5 : 0.3),
          opacity: Math.random() * 0.5 + 0.3,
          twinkle: theme === 'dark' ? Math.random() * 0.02 : 0,
          twinkleDirection: 1
        });
      }
    };

    createParticles();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Dessiner la particule
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (theme === 'light') {
          // Particules dorées pour le mode jour
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, `rgba(218, 171, 58, ${particle.opacity})`);
          gradient.addColorStop(1, `rgba(182, 115, 50, ${particle.opacity * 0.5})`);
          ctx.fillStyle = gradient;
        } else {
          // Étoiles scintillantes pour le mode nuit
          particle.opacity += particle.twinkle * particle.twinkleDirection;
          if (particle.opacity >= 1 || particle.opacity <= 0.2) {
            particle.twinkleDirection *= -1;
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
          
          // Effet de croix pour les étoiles
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(255, 255, 255, ${particle.opacity})`;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;

        // Déplacer la particule
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebondir sur les bords
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;