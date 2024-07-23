import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./MiLanding.css";

const MiLanding = ({ landingPageData, opciones }) => {
  const [activeComponent, setActiveComponent] = useState("inicio");

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  const getTransitionClassName = () => {
    return activeComponent === "inicio" ? "mi-landing-transition-inicio" : "mi-landing-transition-carousel";
  };

  return (
    <div className="mi-landing">
      <Header
        colorPrimario={landingPageData.colorPrimario}
        colorSecundario={landingPageData.colorSecundario}
        handleNavigation={handleNavigation}
        activeComponent={activeComponent}
        opciones={opciones}
      />
      <TransitionGroup>
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames={getTransitionClassName()}
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
                footerText= {landingPageData.footerText}
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
