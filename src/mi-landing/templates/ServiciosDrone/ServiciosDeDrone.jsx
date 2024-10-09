import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/Logo-Full Color@300x.png';
import masterplan from './assets/masterplan.jpg';
import favIcon from './assets/favicon.png'
import tomasaereas from './assets/tomasaereas.jpg';
import aeromensura from './assets/aeromensurta.jpg';
import produadiovisual from './assets/prodaudiovisualdrone.jpg';






const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#000dd2',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(85, 57, 216,0.8)',
    colorTerciario: '#0b0150', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: masterplan ,
    title: 'Servicios de Drone',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingServiciosDrone/index.html',
    subtitles: ['Tomas Aéreas','Producción Audiovisual', 'Master Plan 360', 'Fotogrametría y Aero mensura',],
    telefono: '+56931354518',
    message: "¡Hola! Quiero más información.",
    instagramLink: 'https://instagram.com/astra.360',
    facebookLink: 'https://facebook.com/astra360.marketing',
    footerText:'marketing@astra360.cl',
    //gpsLink: 'https://maps.google.com/?q=Astra360',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(111, 96, 255, 0) 0%, rgba(111, 96, 255, 0.2) 5%, rgba(111, 96, 255, 0.4) 20%, rgba(111, 96, 255, 0.7) 50%, rgba(111, 96, 255, 0.9) 70%, rgba(111, 96, 255, 1) 100%)",

      textColor: '#fff'
    },




    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: tomasaereas,
          videoUrl: "",
          title: 'Tomas Aéreas',
          subtitle: "",
          description: 'Captura de imágenes y videos desde el aire, proporcionando una perspectiva única para mostrar terrenos, propiedades o áreas extensas con alta calidad visual. Ideal para proyectos inmobiliarios, publicitarios o documentales.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/ZDqds6I9dXE',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: masterplan,
          videoUrl: "",
          title: 'Master Plan 360',
          subtitle: 'Creación de recorridos virtuales y visualizaciones interactivas de proyectos inmobiliarios a partir de tomas aéreas 360°.',
          description: 'Esto permite a los clientes explorar una parcela o desarrollo desde una vista aérea inmersiva, dando una visión completa del entorno.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Marcos-Willer/output/index.html',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: aeromensura,
          videoUrl: "",
          title: 'Fotogrametría y Aeromensura',
          subtitle: '',
          description: 'Utilización de drones para la medición precisa de terrenos mediante la recopilación de datos aéreos. Estos datos se procesan para generar mapas topográficos, modelos 3D y análisis geoespaciales con fines de planificación y construcción.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://parqueconecta-production.up.railway.app/',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: produadiovisual,
          videoUrl: "",
          title: 'Producción Audiovisual',
          subtitle: 'Creación de contenido visual como videos promocionales o documentales utilizando drones.',
          description: ' Gracias a su capacidad de grabar desde diferentes ángulos y alturas, se logran tomas dinámicas y espectaculares que capturan la atención de los espectadores.',
          buttonConfig: {
            type: 'popup',
            iframeUrl:'https://www.youtube.com/embed/6PC3STetosw',
            buttonText: 'Ver ejemplo',
          },
        },
        
      ],
      

    
    
    
    

    

    
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Servicios' },

   
    
    
  ];

  useEffect(() => {
    document.title = 'Servicios de Drone';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = favIcon ;

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
