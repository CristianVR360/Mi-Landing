import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
//import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import inicio2 from './assets/inicio2.jpg';
import subdivi from './assets/subdivisiones.jpg';
import juri from './assets/juri.jpg';
import logoblanco from './assets/logoblanco.png';


;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(255, 125, 0, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Servicios de Topografía',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Precisión en cada punto.', 'Mediciones exactas, resultados seguros.','Datos precisos para decisiones acertadas.', ],
    telefono: '+56944237234',
    message:'Necesito más información sobre el proyecto',
    footerText:"alejandrogebertf@gmail.com",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(236, 139, 45, 0) 0%, rgba(236, 139, 45, 0.2) 5%, rgba(236, 139, 45, 0.4) 20%, rgba(236, 139, 45, 0.7) 50%, rgba(236, 139, 45, 0.9) 70%, rgba(236, 139, 45, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: inicio2 ,
          videoUrl: "",
          title: 'Levantamientos Topográficos',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/5MMYR2gl8hI',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: 'Levantamientos Topográficos',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/5MMYR2gl8hI',
            buttonText: 'Ver video',
          },
        },
       

      ],

      carousel02: [
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Subdivisiones',
          subtitle: 'DISFRUTA LA EXPERIENCIA DE RECORRER TU PRÓXIMO DEPARTAMENTO',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Recorre nuestros espacios',
          subtitle: 'DISFRUTA LA EXPERIENCIA DE RECORRER TU PRÓXIMO DEPARTAMENTO',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },

      ],

      carousel03: [
        {
          image: juri ,
          videoUrl: "",
          title: 'Asesorías Juridicas',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: juri ,
          videoUrl: "",
          title: 'Recorre nuestros espacios',
          subtitle: 'DISFRUTA LA EXPERIENCIA DE RECORRER TU PRÓXIMO DEPARTAMENTO',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Levantamientos Topográficos' },
    { id: 'carousel02', texto: 'Subdivisiones' },
    { id: 'carousel03', texto: 'Asesorías Juridicas' },
 
    
  ];

  useEffect(() => {
    document.title = 'GeoPunto';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = FavIcon;

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
