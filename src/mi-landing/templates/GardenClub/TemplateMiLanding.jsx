import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: '', // Agrega la ruta de tu logo aquí
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: '',
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita virtual!',
    iframeBackground: '',
    subtitles: ['Subtitulo 1', 'Subtitulo 2', 'Subtitulo 3'],
    telefono: '',
    instagramLink: '',
    facebookLink: '',
    gpsLink: '',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },



    
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
   
  ];

  useEffect(() => {
    document.title = 'MiLanding';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'default_favicon.ico';

    return () => {
      document.title = 'MiLanding';
      favicon.href = 'default_favicon.ico';
    };
  }, []);

  return (
    <div>
      <MiLanding landingPageData={landingPageData} opciones={opciones} />
    </div>
  );
};

export default TemplateMiLanding;
