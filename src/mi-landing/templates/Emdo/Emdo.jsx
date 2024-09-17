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
import imgrelieve from './assets/imgrelieve.jpg';
import limites from './assets/limites.jpg';
import subdivi1 from './assets/subdivi1.jpg';
import subdivi2 from './assets/subdivi2.jpg';
import aseso from './assets/judi2.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(30, 30, 30, 0.8)',
    colorTerciario: '#1e1e1e',
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
        background: "linear-gradient(to bottom, rgba(30, 30, 29, 0) 0%, rgba(30, 30, 29, 0.2) 5%, rgba(30, 30, 29, 0.4) 20%, rgba(30, 30, 29, 0.7) 50%, rgba(30, 30, 29, 0.9) 70%, rgba(30, 30, 29, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: imgrelieve ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: limites ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
       

      ],

      carousel02: [
        {
          image: subdivi1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
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
          title: '',
          subtitle: '',
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
          image: aseso ,
          videoUrl: "",
          title: '',
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
          title: '',
          subtitle: '',
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
    { id: 'carousel01', texto: 'Servicio1' },
    { id: 'carousel02', texto: 'Servicio2' },
    { id: 'carousel03', texto: 'Servicio3' },
 
    
  ];

  useEffect(() => {
    document.title = 'EMDO';
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
