import { useEffect } from 'react';
import './Particles.css';

const Particles = () => {
  useEffect(() => {
    const footer = document.querySelector('.app-footer');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Posición y tamaño aleatorio
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}%;
        top: ${posY}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
      `;
      
      footer.appendChild(particle);
    }
    
    return () => {
      document.querySelectorAll('.particle').forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default Particles;