import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logoblanco from './assets/logoblanco.png';
import portada from './assets/portada.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#5b5d62',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(35, 81, 158, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: portada,
    title: 'Desamaduria repuestos nuevos y usados consultas',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['¡Contáctanos y recibe una oferta hoy mismo!', ],
    telefono: '+56974777149',
    message:'Necesito más información',
    footerText:"repuestosflorestemuco@gmail.com",
    instagramLink: 'https://www.instagram.com/impactodesarmaduria/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://www.google.com/maps/place/Orella+0815/data=!4m7!3m6!1s0x9614d3c9688a864b:0x357d5f71849fc593!8m2!3d-38.7264808!4d-72.5745372!16s%2Fg%2F11jt0rg18n!19sChIJS4aKaMnTFJYRk8WfhHFffTU?authuser=0&hl=es&rclk=1',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(35, 81, 158, 0) 0%, rgba(35, 81, 158, 0.2) 5%, rgba(35, 81, 158, 0.4) 20%, rgba(35, 81, 158, 0.7) 50%, rgba(35, 81, 158, 0.9) 70%, rgba(35, 81, 158, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: portada ,
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
          image: portada ,
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
          image: img1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',

        },
        {
          image: img2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          className: 'photoGallery',
        },
        {
          image: img3 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          className: 'photoGallery',
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          className: 'photoGallery',
        },
        {
          image: img5 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          className: 'photoGallery',
        },
        {
          image: img6 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          className: 'photoGallery',
        },
        

      ],

    
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Galería' },
  
 
    
  ];

  useEffect(() => {
    document.title = 'Desarmaduría Impacto';
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
