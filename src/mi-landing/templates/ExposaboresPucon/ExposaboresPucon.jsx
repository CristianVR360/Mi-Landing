import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png';
import img1 from'./assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#000dd2',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(5, 13, 76,0.8)',
    colorTerciario: '#1d3fce', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Sabores auténticos en un festival gastronómico único.',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Saboreando 10 años de historia gastronómica', 'Hotel Enjoy Pucón'],
    telefono: '+',
    message: "¡Hola! Quiero más información.",
    instagramLink: 'https://www.instagram.com/exposaborespucon/',
    facebookLink: '',
    footerText:'pucon.exposabores@gmail.com',
    gpsLink: 'https://goo.gl/maps/MGfArjqFhd6V3HP88',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.2) 5%, rgba(26, 26, 26, 0.4) 20%, rgba(26, 26, 26, 0.7) 50%, rgba(26, 26, 26, 0.9) 70%, rgba(26, 26, 26, 1) 100%)",

      textColor: '#fff'
    },




    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img1,
          videoUrl: "",
          title: 'Quienes Somos',
          subtitle: "",
          description: 'Nos especializamos en exportar productos congelados (IQF) de alta calidad, cosechados en los fértiles campos del sur de Chile mediante prácticas agrícolas sostenibles. ',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: 'Quienes Somos',
          subtitle: "",
          description: 'Procesamos en instalaciones propias con altos estándares de tecnología y calidad, para abastecer al mercado global en formatos retail y granel, ofreciendo productos nutritivos y saludables que aportan valor a la cadena alimenticia a nivel mundial.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
       
        
      ],

      carousel02: [
        {
          image: img3,
          videoUrl: "",
          title: 'Enfoque en calidad y frescura',
          subtitle: "",
          description: 'Cada producto que exportamos es seleccionado y procesado con tecnología de última generación, asegurando la máxima frescura y calidad. Así, llevamos desde el sur de Chile a todo el mundo productos saludables y nutritivos que conservan su valor natural y sabor original.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
        {
          image: img4,
          videoUrl: "",
          title: 'Buscamos crear comunidad',
          subtitle: "",
          description: 'En Iceberg Green, creemos en el poder de la colaboración. Trabajamos junto a agricultores locales y profesionales del sector para construir una comunidad sólida que, mediante prácticas responsables, pueda aportar valor y crecimiento a todos sus integrantes.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
        {
          image: img5,
          videoUrl: "",
          title: 'Compromiso con la sostenibilidad',
          subtitle: "",
          description: 'Nos enorgullece cultivar en armonía con el entorno, adoptando prácticas agrícolas sostenibles para proteger nuestros campos y preservar la biodiversidad. Este compromiso se refleja en cada producto que entregamos, apostando por un futuro verde y responsable.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
        {
          image: img1,
          videoUrl: "",
          title: 'Preocupados de la salud de todos',
          subtitle: "",
          description: 'Sabemos que una buena alimentación es clave para una vida saludable. Por eso, nuestros productos congelados son una alternativa natural y nutritiva que contribuye al bienestar de quienes eligen una dieta balanceada y consciente.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },

        {
          image: img1,
          videoUrl: "",
          title: 'Creemos en la conexión emocional',
          subtitle: "",
          description: 'Más que productos, llevamos emociones a la mesa. Creemos en el poder de la conexión que genera la comida, desde el campo a la cocina, creando momentos que unen a las personas y se transforman en recuerdos duraderos.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
       
        
      ],
      

    
    
    
    

    

    
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Quienes somos' },
    { id: 'carousel02', texto: 'Nuestra Visión' },

   
    
    
  ];

  useEffect(() => {
    document.title = 'Exposabores Pucon';
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