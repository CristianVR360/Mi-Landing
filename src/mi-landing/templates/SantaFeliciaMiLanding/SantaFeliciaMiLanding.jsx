import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos
import logoSantaFelicia from './assets/REDUCCIÓN VERTICAL - BLANCO.png';
import fav from './assets/FAVICON -NEGRO.png';
//import videoBkg from './assets/bkg.mp4';
import imagenBkg from './assets/tolter1.jpg';

import img02 from './assets/img02.jpg';
import img03 from './assets/img03.jpg';
import img04 from './assets/img04.jpg';
import img05 from './assets/img05.jpg';
import img06 from './assets/img06.jpg';
import img07 from './assets/img07.jpg';
import img08 from './assets/img08.jpg';
import img09 from './assets/img09.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoSantaFelicia , // Agrega la ruta de tu logo aquí
    colorPrimario: '#606060',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(162, 163, 162, 0.8)',
    colorTerciario: '#606060',
    colorCuaternario: '#34495e',
    backgroundImage: imagenBkg ,
    title: 'Parcelas en Toltén',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    message:'Necesito más información sobre el proyecto',
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
        image:img04 ,
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
        subtitle: 'Toltén, Sector Fintucue, Region de la Araucanía Costera.',
        description: 'Parcelas Santa Felicia se encuentra en Toltén, a 4.5 km del camino asfaltado (ruta S-658), ofreciendo fácil acceso y conectividad. La zona destaca por su proximidad a destinos turísticos como Queule, conocido por su puerto y mariscos, y Mehuín, con playas y bosques ideales para actividades al aire libre como senderismo y surf. Estos lugares son perfectos para quienes buscan combinar la tranquilidad de su parcela con emocionantes experiencias turísticas.',
        buttonConfig: {
          type: 'link',
          url: 'https://maps.app.goo.gl/2ttPthCYNqsYX4wC7',
          buttonText: 'Ver ubicación',
        },
      },


      {
        image: img13,
        videoUrl: "",
        title: 'CARACTERÍSTICAS',
        subtitle: 'Detalles únicos en un espacio ideal',
        description: 'Parcelas desde los 5,000 m², ofrecen amplios espacios ideales para el desarrollo residencial. Ubicadas en una pradera verde con borde de estero, estas parcelas garantizan un entorno natural y fresco, perfecto para aquellos que buscan un estilo de vida en armonía con la naturaleza. Parcelas Santa Felicia asegura la factibilidad de servicios básicos como luz y agua, garantizando que su nueva propiedad esté lista para ser habitada desde el primer día. Además, contamos con caminos de acceso directo a cada parcela, facilitando la llegada y salida de su futuro hogar.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelassantafelicia.cl/masterplan.html',
          buttonText: 'Ver MasterPlan',
        },
      },

      {
        image: img20,
        videoUrl: "",
        title: 'PRECIOS Y FINANCIAMIENTO',
        subtitle: 'Desde $18.990.000',
        description: 'Pago en efectivo, vale vistas, tarjetas de crédito/débito. Para reserva de algún lote con promesa de venta, pie de $5.000.000. Además contamos con Crédito Directo de hasta 36 cuotas.',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56950937296?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
          buttonText: 'Más informacion',
        },
      },
    ],

    carousel02:[
      {
        image:img19 ,
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelassantafelicia.cl/masterplan.html',
          buttonText: 'Ver Master Plan',
        },
      },
      {
        image:img19 ,
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Santa-Felicia/output/index.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03:[
      {
        image: img02,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img03,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img04,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img05,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img06,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img07,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img08,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img09,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img10,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img11,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img12,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img13,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      {
        image: img14,
        videoUrl: "",
        title: 'PARCELAS SANTA FELICIA',
        subtitle: "",
        description: '',
      },
      

    ]



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
    { id: 'carousel03', texto: 'Galería' },
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
