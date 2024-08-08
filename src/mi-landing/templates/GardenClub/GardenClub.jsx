import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos
import logo from './assets/logoGC.png';
import fav from './assets/favicon.png';

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo, // Agrega la ruta de tu logo aquí
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: '',
    title: 'Garden Club',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Reserva aquí!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingGardenClub/output/index.html',
    subtitles: ['¡Bienvenidos a Garden Club!', 'La mejor casa club de eventos de Temuco', 'Cumpleaños, reuniones, eventos y más'],
    telefono: '+56947441018',
    instagramLink: 'https://www.instagram.com/gardenclubtco',
    facebookLink: 'https://www.facebook.com/profile.php?id=100083870003458&mibextid=LQQJ4d',
    footerText:'gardenclub.reservas@gmail.com',
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
    document.title = 'Garden Club Temuco';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = fav;

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
