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
    colorPrimario: '#9dcaa1',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(30, 30, 30, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Repostería y Chocolatería vegana.',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['Productos caseros.', 'Tortas veganas', 'sin azúcar y sin gluten' ],
    telefono: '+56964892938',
    message:'Necesito más información',
    footerText:"ventasvegansweet@gmail.com",
    instagramLink: 'https://www.instagram.com/sweetveganpv/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(75, 49, 36, 0) 0%, rgba(75, 49, 36, 0.2) 5%, rgba(75, 49, 36, 0.4) 20%, rgba(75, 49, 36, 0.7) 50%, rgba(75, 49, 36, 0.9) 70%, rgba(75, 49, 36, 1) 100%)",

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
    document.title = 'Sweet Vegan';
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
