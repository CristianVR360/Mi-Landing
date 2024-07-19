import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos
import logoSantaFelicia from './assets/REDUCCIÓN VERTICAL - BLANCO.png';
import fav from './assets/FAVICON -NEGRO.png';
import videoBkg from './assets/bkg.mp4';
import imagenBkg from './assets/tolter1.jpg';
import img05 from './assets/img05.jpg';
import img03 from './assets/img02.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoSantaFelicia , // Agrega la ruta de tu logo aquí
    colorPrimario: '#606060',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(96, 96, 96, 0.8)',
    colorTerciario: '#A2A3A2',
    colorCuaternario: '#34495e',
    backgroundImage: imagenBkg ,
    title: 'Parcelas en Toltén',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información',
    iframeBackground: '',
    subtitles: ['Parcelas cerca de Araucanía Costera', 'Ideal para pesca deportiva', 'Espacio y naturaleza asegurados', "Oportunidad única para invertir"],
    telefono: '+56950937296',
    instagramLink: '',
    facebookLink: '',
    gpsLink: 'https://maps.app.goo.gl/2ttPthCYNqsYX4wC7',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(96, 96, 96, 0) 0%, rgba(96, 96, 96, 0.2) 5%, rgba(96, 96, 96, 0.4) 20%, rgba(96, 96, 96, 0.7) 50%, rgba(96, 96, 96, 0.9) 70%, rgba(96, 96, 96, 1) 100%)",
      textColor: '#fff'
    },
    carousels: {
      carousel01:[
      {
        image:img05 ,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "En la Araucanía costera, a minutos de Queule y Mehuín",
        description: 'Parcelas agrícolas planas y verdes, rodeadas por un pequeño estero que añade un toque de serenidad al entorno. Nuestra visión está enfocada en brindar un refugio cercano al conocido río Toltén, ideal para los amantes de la pesca deportiva que buscan capturar el famoso "Chinook". ',
        buttonConfig: {
          type: 'popup',
          iframeUrl: '',
          buttonText: 'Ver video',
        },
      },

      {
        image: img03,
        videoUrl: "",
        title: 'UBICACIÓN',
        subtitle: 'Toltén, Region de la Araucanía Costera.',
        description: 'Parcelas Santa Felicia se encuentra en Toltén, a 4.5 km del camino asfaltado (ruta S-658), ofreciendo fácil acceso y conectividad. La zona destaca por su proximidad a destinos turísticos como Queule, conocido por su puerto y mariscos, y Mehuín, con playas y bosques ideales para actividades al aire libre como senderismo y surf. Estos lugares son perfectos para quienes buscan combinar la tranquilidad de su parcela con emocionantes experiencias turísticas.',
        buttonConfig: {
          type: 'link',
          url: 'https://maps.app.goo.gl/2ttPthCYNqsYX4wC7',
          buttonText: 'Ver ubicación',
        },
      },


      {
        image: "",
        videoUrl: videoBkg,
        title: 'CARACTERÍSTICAS',
        subtitle: 'Detalles únicos en un espacio ideal',
        description: 'Parcelas de 5,000 m², ofrecen amplios espacios ideales para el desarrollo residencial. Ubicadas en una pradera verde con borde de estero, estas parcelas garantizan un entorno natural y fresco, perfecto para aquellos que buscan un estilo de vida en armonía con la naturaleza. Parcelas Santa Felicia asegura la factibilidad de servicios básicos como luz y agua, garantizando que su nueva propiedad esté lista para ser habitada desde el primer día. Además, contamos con caminos de acceso directo a cada parcela, facilitando la llegada y salida de su futuro hogar.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Santa-Felicia/output/index.html',
          buttonText: 'Ver MasterPlan',
        },
      },

      {
        image: "",
        videoUrl: videoBkg,
        title: 'PRECIOS Y FINANCIAMIENTO',
        subtitle: 'Desde $18.990.000',
        description: 'Ofrecemos parcelas a precios competitivos y diversas opciones de financiamiento para adaptarse a sus necesidades. Consulte nuestras promociones y descuentos disponibles para facilitar su inversión en este paraíso natural.',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56950937296?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
          buttonText: 'Más informacion',
        },
      },
    ]
    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
  ];

  useEffect(() => {
    document.title = 'Parcelas Santa Felicia';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = fav;

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
