import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png'
import portada from './assets/portada.jpg';
import quienes from './assets/quienessomos.jpg';
import quienes2 from './assets/quienes2.jpg';
import calidad from './assets/calidad-y-frescura.jpg';
import comunidad from './assets/comunidad.jpg';
import sostenibilidad from './assets/sostenibilidad.jpg';
import salud from './assets/salud.jpg';
import conexion from './assets/conexion-emocional.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#000dd2',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(5, 13, 76,0.8)',
    colorTerciario: '#1d3fce', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Desde el sur de Chile a los hogares del mundo', 'Contamos con teconología de punta'],
    telefono: '+56994333501',
    message: "¡Hola! Quiero más información.",
    instagramLink: '',
    facebookLink: '',
    footerText:'contacto@iceberggreen.com',
    //gpsLink: 'https://maps.google.com/?q=Astra360',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(7, 31, 81, 0) 0%, rgba(7, 31, 81, 0.2) 5%, rgba(7, 31, 81, 0.4) 20%, rgba(7, 31, 81, 0.7) 50%, rgba(7, 31, 81, 0.9) 70%, rgba(7, 31, 81, 1) 100%)",

      textColor: '#fff'
    },




    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: quienes,
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
          image: quienes2,
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
          image: calidad,
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
          image: comunidad,
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
          image: sostenibilidad,
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
          image: salud,
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
          image: conexion,
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
    document.title = 'Iceberg Green';
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
