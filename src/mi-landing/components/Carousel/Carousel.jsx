import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import PopUpIframe from "../PopUpIframe/PopUpIframe"; // Importa el componente PopUpIframe

const Carousel = ({
  logo,
  carouselLinks,
  colorPrimario,
  colorPrimarioTransparente,
  colorSecundario,
  colorTerciario,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const [showIframe, setShowIframe] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    pauseOnHover: false,
    swipe: true,
    vertical: false,
    verticalSwiping: false,
    swipeToSlide: true,
    arrows: true,
    draggable: true,
    touchMove: true,
  };

  const handleButtonClick = (buttonConfig) => {
    if (buttonConfig.type === 'link') {
      window.open(buttonConfig.url, '_blank', 'noopener,noreferrer');
    } else if (buttonConfig.type === 'popup') {
      setIframeUrl(buttonConfig.iframeUrl);
      setShowPopUp(true);
    } else if (buttonConfig.type === 'iframe') {
      setIframeUrl(buttonConfig.iframeUrl);
      setShowIframe(true);
    }
  };

  return (
    <div className="carrusel">
      <Slider {...settings}>
        {carouselLinks && carouselLinks.length > 0 ? (
          carouselLinks.map((link, index) => (
            <div key={index} className="carrusel__slide">
              {showIframe && link.buttonConfig && link.buttonConfig.type === 'iframe' && (
                <iframe
                  src={iframeUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Contenido Iframe"
                ></iframe>
              )}
              {!showIframe && (
                <>
                  {link.videoUrl ? (
                    <div className="carrusel__video-container">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        webkit-playsinline
                        poster={link.image}
                        className="carrusel__video"
                      >
                        <source src={link.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div
                      className="carrusel__image-container"
                      style={{ backgroundImage: `url(${link.image})` }}
                    />
                  )}
                  <div
                    className="carrusel__content"
                    style={{ backgroundColor: colorPrimarioTransparente }}
                  >
                    <div className="carrusel__overlay">
                      <h2
                        className="carrusel__title"
                        style={{ color: colorSecundario }}
                      >
                        {link.title}
                      </h2>
                      <h3
                        className="carrusel__subtitle"
                        style={{ color: colorSecundario }}
                      >
                        {link.subtitle}
                      </h3>
                      <p
                        className="carrusel__description"
                        style={{ color: colorSecundario }}
                      >
                        {link.description}
                      </p>
                      {link.buttonConfig && (
                        <button
                          className="carrusel__button"
                          style={{
                            backgroundColor: colorTerciario,
                            color: colorSecundario,
                          }}
                          onClick={() => handleButtonClick(link.buttonConfig)}
                        >
                          {link.buttonConfig.buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No hay elementos para mostrar en este carrusel.</p>
        )}
      </Slider>
      <PopUpIframe
      logo={logo}
        colorPrimario={colorPrimario}
        show={showPopUp}
        onClose={() => setShowPopUp(false)}
        iframeUrl={iframeUrl}
      />
    </div>
  );
};

export default Carousel;
