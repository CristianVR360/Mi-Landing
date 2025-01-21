import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
//import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import logoblanco from './assets/logoblanco.png';
import calbuco from './assets/calbuco.jpg';
//import calbuco2 from './assets/calbuco2.jpg';
import calbuco4 from './assets/calbuco4.jpg';
import puertovaras from './assets/puertovaras.jpg';
import playafrutillar from './assets/playa-frutillar.jpg';
import master1 from './assets/master1.jpg';
//import master2 from './assets/master2.jpg';
import financiamiento from './assets/financiamiento.jpg';
import volcanosorno from './assets/volcanosorno.jpg';
import volcanosorno2 from './assets/volcanosorno2.jpg';
import lagollanquihue from './assets/lago-llanquihue.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#2c2734',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 161, 121, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'X región, Chile',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Acabas de encontrar el lugar que siempre quisiste.', 'Tu propio refugio a orillas del cristalino Lago Llanquihue','Bajo la imponenente mirada del majestuoso Volcán Osorno','A pasos de Ensenada, Puerto Varas y Puerto Montt', ],
    telefono: '+56990913110',
    message:'Necesito más información sobre el proyecto',
    footerText:"contacto@vistavolcanes.cl",
    instagramLink: 'https://www.instagram.com/vistavolcanes_ensenada_chile/',
    facebookLink: 'https://www.facebook.com/profile.php?id=61550704600661',
    linkedinLink: '',
    gpsLink: 'https://goo.gl/maps/yYh1o9ScJg3bFQWq5',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(44, 39, 52, 0) 0%, rgba(44, 39, 52, 0.2) 5%, rgba(44, 39, 52, 0.4) 20%, rgba(44, 39, 52, 0.7) 50%, rgba(44, 39, 52, 0.9) 70%, rgba(44, 39, 52, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: calbuco4 ,
          videoUrl: "",
          title: 'Carácteristicas',
          subtitle: '',
          description: 'El proyecto Vista Volcanes ofrece parcelas de 5000 m² diseñadas para disfrutar de un entorno natural único en la Región de Los Lagos. Cada parcela cuenta con acceso a agua, electricidad e internet, brindando todas las comodidades necesarias para quienes buscan tranquilidad sin desconectarse del mundo. Además, el proyecto dispone de acceso controlado, rol propio y una ubicación privilegiada a tan solo 200 metros de la playa, ideal para quienes valoran la cercanía al lago Llanquihue.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56990913110?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más información',
          },
        },
        {
          image: puertovaras ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Vista Volcanes se encuentra estratégicamente ubicado en la X Región, en la ruta 225 que conecta a Puerto Varas con Ensenada, a orillas del majestuoso lago Llanquihue. Este privilegiado sector ofrece vistas panorámicas a los imponentes volcanes Osorno y Calbuco, así como fácil acceso a ciudades cercanas como Puerto Montt y Puerto Varas, convirtiéndose en un punto central para residir o vacacionar en el sur de Chile.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://goo.gl/maps/yYh1o9ScJg3bFQWq5',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: playafrutillar ,
          videoUrl: "",
          title: 'Turismo',
          subtitle: '',
          description: 'El entorno del proyecto es perfecto para los amantes del turismo y la naturaleza. Vista Volcanes se encuentra rodeado de atractivos turísticos destacados, como playas lacustres, senderos para trekking y deportes acuáticos en el lago Llanquihue. Su cercanía a destinos icónicos como el Parque Nacional Vicente Pérez Rosales y los volcanes Osorno y Calbuco permite a sus residentes disfrutar de actividades como esquí, pesca y excursiones, inmersos en la espectacular belleza de la Región de Los Lagos.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://goo.gl/maps/yYh1o9ScJg3bFQWq5',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: financiamiento ,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56990913110?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más información',
          },
        },
       

      ],

      carousel02: [
        {
          image: master1 ,
          videoUrl: "",
          title: 'Master Plan 360',
          subtitle: '',
          description: 'Revisa disponibilidad y explora de manera inmersiva nuestro poryecto',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://vistavolcanesmaster-production.up.railway.app/',
            buttonText: 'Ver Master Plan',
          },
        },
        

      ],

      carousel03: [
        {
          image: calbuco ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: volcanosorno ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: volcanosorno2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: calbuco4 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: inicio ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: lagollanquihue ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },

        

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
    { id: 'carousel03', texto: 'Galería' },
 
    
  ];

  useEffect(() => {
    document.title = 'Vista Volcanes';
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
