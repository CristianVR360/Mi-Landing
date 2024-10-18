import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MiLanding.css";

const MiLanding = ({ landingPageData, opciones }) => {
  const [activeComponent, setActiveComponent] = useState("inicio");

  // Controla la navegación entre Hero y Carousel, no dentro de los carruseles
  const handleWheel = (e) => {
    const currentIndex = opciones.findIndex((opcion) => opcion.id === activeComponent);

    // Si se desplaza hacia arriba (retroceder)
    if (e.deltaY < 0 && currentIndex > 0) {
      setActiveComponent(opciones[currentIndex - 1].id);
    } 
    // Si se desplaza hacia abajo (avanzar)
    else if (e.deltaY > 0 && currentIndex < opciones.length - 1) {
      setActiveComponent(opciones[currentIndex + 1].id);
    }
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
      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={activeComponent === "inicio" ? "mi-landing-transition-inicio" : "mi-landing-transition-carousel"}
        >
          <div className="mi-landing__content">
            {activeComponent === "inicio" ? (
              <Hero
                backgroundImage={landingPageData.backgroundImage}
                iframeBackground={landingPageData.iframeBackground}
                title={landingPageData.title}
                description={landingPageData.description}
                bookButtonText={landingPageData.bookButtonText}
                bookDescription={landingPageData.bookDescription}
                consultationButtonText={landingPageData.consultationButtonText}
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
            ) : (
              <Carousel
                logo={landingPageData.logo}
                carouselLinks={landingPageData.carousels[activeComponent]}
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
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default MiLanding;
