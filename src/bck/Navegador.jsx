import React from 'react'
import '../styles/animations.css';

const Navegador = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className="App">
      <nav className="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about-section');
            }}
          >
            INICIO
          </a>
          <a
            className="navbar-item"
            href="#products-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products-section');
            }}
          >
            PRODUCTOS
          </a>
          <a
            className="navbar-item"
            href="#making-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('making-section');
            }}
          >
            PROCESOS
          </a>
          <a
            className="navbar-item"
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact-section');
            }}
          >
            CONTACTO
          </a>
        </div>
      </nav>
      
    </div>
  )
}

export default Navegador