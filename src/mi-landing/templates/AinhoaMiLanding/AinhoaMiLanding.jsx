import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos
import logo from './assets/baby-logo.png'
import bkg from './assets/bkg03.jpg'


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo, // Agrega la ruta de tu logo aquí
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: bkg,
    title: 'BABY SHOWER: Ainhoa Jazmin Triviño Carvajal',
    bookButtonText: 'Book Now',
    bookDescription: 'AINHOA JAZMIN TRIVIÑO CARVAJAL.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Confirma tu asistencia!',
    iframeBackground: '',
    subtitles: ['El evento se realizara el dia 28 de Julio', 'En el recinto Garden Club Temuco, desde las 14:00 hastsa las 18:00 hrs', 'Esperamos contar con tu presencia'],
    telefono: '+56984305751',
   
    gpsLink: 'https://maps.app.goo.gl/4CoLzsD3AwAc2gM76',
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
