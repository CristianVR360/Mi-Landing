import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3d3e4c',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(61, 62, 76, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: 'I Edición ',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '',
    iframeBackground: '',
    subtitles: ['I edición de Expo Chef Araucanía', 'Este 7 y 8 de Dic | 2024','100+ Expositores con artesanías y elaborados', 'Estadio German Becker | Temuco'],
    telefono: '',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: 'https://www.instagram.com/expochefaraucania?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(51, 200, 186, 0) 0%, rgba(51, 200, 186, 0.2) 5%, rgba(51, 200, 186, 0.4) 20%, rgba(51, 200, 186, 0.7) 50%, rgba(51, 200, 186, 0.9) 70%, rgba(51, 200, 186, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img2 ,
          videoUrl: "",
          title: 'Expo Chef Araucanía',
          subtitle: 'Festival Gastronómico 2024',
          description: 'Vuelve a Temuco un festival gastronómico sin igual, esta vez bajo el nombre de Expo Chef Araucanía, edición Primera. Celebrando y promoviendo la cocina de la región de la Araucanía con un enfoque en la innovación, la cultura local y la sostenibilidad. La misión de la expo es conectar a chefs, productores, emprendedores y el público general en un espacio que destaca la riqueza de ingredientes autóctonos y las prácticas culinarias tradicionales. Su objetivo es también educar e inspirar a una audiencia diversa, desde amantes de la gastronomía hasta profesionales del sector.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img3 ,
          videoUrl: "",
          title: '¿Cuándo y dónde tendrá vida esta Expo Feria?',
          subtitle: '',
          description: 'La Expo Chef Araucanía 2024, abrirá sus puertas este 7 & 8 de diciembre en el Estadio Germán Becker, en Temuco.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '¿De qué podrás disfrutar en esta feria?',
          subtitle: 'Es la primera edición de esta Expo Chef Araucanía contará con',
          description: 'Punto sustentable | Artesanía y agro elaborados | Gastronomía tradicional & Gourmet | Concursos y sorteos | Cooking Show | Juegos Infantiles y Familiares | Master Class Invitados especiales | Cocinerías y patio de comida | Música en vivo ',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img1 ,
          videoUrl: "",
          title: 'Personalidades que asistirán',
          subtitle: '',
          description: 'Este evento contará con la entrada totalmente gratuita y contaremos con la presencia de los chef: Yann Yvin, Diefo Bustos, Juan Quiñeman ',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
       

      ],

      
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Expo Chef Araucanía' },

 
    
  ];

  useEffect(() => {
    document.title = 'Expo Chef Araucanía 2024';
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
