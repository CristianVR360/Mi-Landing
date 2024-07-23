import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/puerto-mayor.png';

import puertoMayorIIPortada from './assets/PuertoMayor.jpg';
import puertoMayorIIPortada2 from './assets/PuertoMayorII2.jpg';
import workCafe from './assets/work-cafe.jpg';

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
    subtitles: ['Lorena Almendras, Vendedora', 'Lunes a viernes 9:30 a 14:00 y de 15:30 a 18:30 horas ', 'Sábados: 10:00 a 14:00 y de 15:30 a 18:00 horas.', 'Asesorate para adquirir el hogar de tus sueños'], //subtitulos moviles
    telefono: '+56973012365',
    message:'Necesito más información sobre el proyecto',
    footerText:"ventaslosangeles@ipuertomayor.cl",
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    instagramLink: 'https://www.instagram.com/puertomayorll/',
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
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-Emplazamiento/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: puertoMayorIIPortada2,
          videoUrl: "",
          title: 'Locales Comerciales',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: '2. En el primer piso contamos con 7 locales comerciales de un piso, con superficies de 39 a 92mts2, en plantas libres, cerca de puntos estratégicos de la ciudad. Quedan pocas unidades disponibles para arriendo.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-Fachada/output/index.html',
            buttonText: 'Ver Fachada',
          },
        },
        {
          image: workCafe,
          videoUrl: "",
          title: 'SALA DE REUNIONES Y WORK CAFÉ ',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Contamos con cómodas y amplias salas de reuniones de uso común, todas con acceso libre a work café en el hall del edificio para tener un espacio de relajo y trabajo',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-WorkCafe/output/index.html',
            buttonText: 'Ver Work Cafe',
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
