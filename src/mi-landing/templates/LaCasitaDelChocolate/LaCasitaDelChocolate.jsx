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
    colorPrimario: '#7e3912',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(30, 30, 30, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Chocolatería Artesanal de temuco',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['El arte del chocolate hecho a mano', 'Sabor y tradición en cada bocado', 'Chocolatería artesanal con amor desde Temuco'  ],
    telefono: '+56988033706',
    message:'Necesito más información',
    footerText:"lacasitadelchocolate@gmail.com",
    instagramLink: 'https://www.instagram.com/lacasitadelchocolate.tco/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(234, 28, 49, 0) 0%, rgba(234, 28, 49, 0.2) 5%, rgba(234, 28, 49, 0.4) 20%, rgba(234, 28, 49, 0.7) 50%, rgba(234, 28, 49, 0.9) 70%, rgba(234, 28, 49, 1) 100%)",

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
    document.title = 'La Casita del Chocolate';
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
