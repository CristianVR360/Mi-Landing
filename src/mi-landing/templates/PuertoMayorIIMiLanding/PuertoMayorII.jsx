import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/puerto-mayor.png';

import puertoMayorIIPortada from './assets/PuertoMayor.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2 ',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.8)',
    colorTerciario: '#313131',
    colorCuaternario: '#34495e',
    backgroundImage: puertoMayorIIPortada,
    title: 'BIENVENIDO A PUERTO MAYOR II', //titulo principal 
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctate con nosotros!', //msg wsp
    iframeBackground: "",
    subtitles: ['Lorena Almendras, Asesor de Venta ', 'Explora el menu a tu ritmo, en cualquier momento y lugar', 'Asesorate para adquirir el hogar de tus sueños'], //subtitulos moviles
    telefono: '+56973012365',
    footerText:" ventas@ipuertomayor.cl",
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/gfHdC1akMjBd6BzN8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(52, 152, 219, 0) 0%, rgba(52, 152, 219, 0.2) 5%, rgba(52, 152, 219, 0.4) 20%, rgba(52, 152, 219, 0.7) 50%, rgba(52, 152, 219, 0.9) 70%, rgba(52, 152, 219, 1) 100%)",
      textColor: '#f1f1f1'
    },
    
    carousels: {
    
      carousel01: [
        {
          image: puertoMayorIIPortada,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, moderno sistema de oficinas con plantas libres, para que diseñes como necesites',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: puertoMayorIIPortada,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, moderno sistema de oficinas con plantas libres, para que diseñes como necesites',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
      ]
    },
   
  };

  const opciones = [// declaro el boton - nombre del boton
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Tour Virtual' },
    
    
  ];

  useEffect(() => {
    document.title = 'Puerto Mayor';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href =  favUrl;

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
