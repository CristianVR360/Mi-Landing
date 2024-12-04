import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Carousel from '../../components/Carousel/Carousel';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './MiLanding.css';

function MiLanding({ landingPageData, opciones }) {
  const [activeComponent, setActiveComponent] = useState('inicio');
  const [touchStartY, setTouchStartY] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevComponent, setPrevComponent] = useState(null);

  const navigateToSection = (direction) => {
    if (isTransitioning) return;

    const currentIndex = opciones.findIndex((opcion) => opcion.id === activeComponent);
    let nextIndex;

    if (direction === 'next' && currentIndex < opciones.length - 1) {
      nextIndex = currentIndex + 1;
    } else if (direction === 'prev' && currentIndex > 0) {
      nextIndex = currentIndex - 1;
    }

    if (nextIndex !== undefined) {
      setIsTransitioning(true);
      setPrevComponent(activeComponent);
      setActiveComponent(opciones[nextIndex].id);
      
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevComponent(null);
      }, 500);
    }
  };

  const handleTouchStart = (e) => {
    if (!isTransitioning) {
      setTouchStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartY === null || isTransitioning) return;

    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    const minSwipeDistance = 50;

    if (Math.abs(deltaY) >= minSwipeDistance) {
      if (deltaY > 0) {
        navigateToSection('next');
      } else {
        navigateToSection('prev');
      }
      setTouchStartY(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  const handleWheel = (e) => {
    if (!isTransitioning) {
      if (e.deltaY > 0) {
        navigateToSection('next');
      } else {
        navigateToSection('prev');
      }
    }
  };

  useEffect(() => {
    const element = document.querySelector('.mi-landing');
    if (!element) return;

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart); 
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line
  }, [activeComponent, isTransitioning, touchStartY]);

  // Renderizar el contenido basado en el componente activo
  const renderContent = (componentId) => {
    if (componentId === 'inicio') {
      return (
        <Hero
          isExiting={prevComponent !== null}
          backgroundImage={landingPageData.backgroundImage}
          videoBkgHero={landingPageData.videoBkgHero}
          iframeBackground={landingPageData.iframeBackground}
          title={landingPageData.title}
          description={landingPageData.description}
          bookButtonText={landingPageData.bookButtonText}
          bookDescription={landingPageData.bookDescription}
          consultationButtonText={landingPageData.consultationButtonText}
          subtitlePosition={landingPageData.subtitlePosition}
          logoPosition={landingPageData.logoPosition}
          subtitle={landingPageData.ctaWhatsappButton}
          colorPrimario={landingPageData.colorPrimario}
          colorPrimarioTransparente={landingPageData.colorPrimarioTransparente}
          colorSecundario={landingPageData.colorSecundario}
          colorTerciario={landingPageData.colorTerciario}
          colorCuaternario={landingPageData.colorCuaternario}
          subtitles={landingPageData.subtitles}
          telefono={landingPageData.telefono}
          linkedinLink={landingPageData.linkedinLink}
          instagramLink={landingPageData.instagramLink}
          facebookLink={landingPageData.facebookLink}
          gpsLink={landingPageData.gpsLink}
          footerAfterStyles={landingPageData.footerAfterStyles}
          logo={landingPageData.logo}
          footerText={landingPageData.footerText}
          message={landingPageData.message}

        />
      );
    }
    return (
      <Carousel
        logo={landingPageData.logo}
        carouselLinks={landingPageData.carousels[componentId]}
        colorPrimario={landingPageData.colorPrimario}
        colorPrimarioTransparente={landingPageData.colorPrimarioTransparente}
        colorSecundario={landingPageData.colorSecundario}
        colorTerciario={landingPageData.colorTerciario}
        colorCuaternario={landingPageData.colorCuaternario}
        telefono={landingPageData.telefono}
        instagramLink={landingPageData.instagramLink}
        facebookLink={landingPageData.facebookLink}
        gpsLink={landingPageData.gpsLink}
        footerAfterStyles={landingPageData.footerAfterStyles}
      />
    );
  };

  return (
    <div className="mi-landing" onWheel={handleWheel}>
      <Header
        colorPrimario={landingPageData.colorPrimario}
        colorSecundario={landingPageData.colorSecundario}
        handleNavigation={setActiveComponent}
        activeComponent={activeComponent}
        opciones={opciones}
      />
      
      {/* Mantener el componente anterior durante la transición */}
      {prevComponent && (
        <div className="mi-landing__content">
          {renderContent(prevComponent)}
        </div>
      )}

      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={
            activeComponent === 'inicio' 
              ? 'mi-landing-transition-inicio' 
              : 'mi-landing-transition-carousel'
          }
        >
          <div className="mi-landing__content" id={activeComponent}>
            {renderContent(activeComponent)}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default MiLanding;