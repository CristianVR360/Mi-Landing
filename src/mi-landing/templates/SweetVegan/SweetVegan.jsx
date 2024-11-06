import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import inicio from './assets/inicio.jpg';
import logo from './assets/logo.png';
import img1 from './assets/img1.jpg';


;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#e6c010',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(30, 30, 30, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Chocolatería y cervecería Artesanal',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['Enviamos a todo Chile', 'Ubicados en Purén IX Regíon', 'Nos apasiona lo Natural' ],
    telefono: '+56964135889',
    message:'Necesito más información',
    footerText:"rodrigomendoza04@gmail.com",
    instagramLink: 'https://www.instagram.com/bergland.cl/?hl=es',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(6, 112, 46, 0) 0%, rgba(6, 112, 46, 0.2) 5%, rgba(6, 112, 46, 0.4) 20%, rgba(6, 112, 46, 0.7) 50%, rgba(6, 112, 46, 0.9) 70%, rgba(6, 112, 46, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',      
          },
          className: 'photoGallery',
        },
        {
          image: img1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
          className: 'photoGallery',
        },
        
       

      ],

      

     
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Galería' },
   
 
    
  ];

  useEffect(() => {
    document.title = 'Berg Land';
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
