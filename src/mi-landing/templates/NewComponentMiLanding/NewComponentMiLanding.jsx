import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

const NewComponenteMiLanding = () => {
  const landingPageData = {
    logo: '',
    colorPrimario: '',
    colorSecundario: '',
    colorPrimarioTransparente: '',
    colorTerciario: '',
    colorCuaternario: '',
    backgroundImage: '',
    title: '',
    description: '',
    bookButtonText: '',
    bookDescription: '',
    consultationButtonText: '',
    ctaWhatsappButton: '',
    iframeBackground: '',
    subtitles: ['', '', ''],
    carouselLinks: [
      {
        image: '',
        videoUrl: '',
        title: '',
        subtitle: '',
        description: '',
        cta: '',
        buttonConfig: {
          type: '',
          iframeUrl: '',
          buttonText: '',
        },
      },
      {
        image: '',
        videoUrl: '',
        title: '',
        subtitle: '',
        description: '',
        cta: '',
      },
    ],
    newCarouselLinks: [
      {
        image: '',
        videoUrl: '',
        title: '',
        subtitle: '',
        description: '',
        cta: '',
      },
      {
        image: '',
        videoUrl: '',
        title: '',
        subtitle: '',
        description: '',
        cta: '',
      },
    ],

    telefono: '',
    instagramLink: '',
    facebookLink: '',
    gpsLink: '',
    footerAfterStyles: {
      background: '',
      textColor: '',
    },
  };

  const opciones = [
    { id: 'inicio', texto: '' },
    { id: 'carousel', texto: '' },
    { id: 'newCarousel', texto: '' }
    // Agrega más opciones según sea necesario
  ];

  useEffect(() => {
    // Actualizar el título de la página
    document.title = '';

    // Actualizar el favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.href = '';

    // Limpieza (opcional)
    return () => {
      // Restaurar el título y el favicon a su estado original al desmontar el componente
      document.title = '';
      if (favicon) favicon.href = '';
    };
  }, []);

  return (
    <div>
      <MiLanding landingPageData={landingPageData} opciones={opciones} />
      {/* Otros elementos específicos del cliente */}
    </div>
  );
};

export default NewComponenteMiLanding;
