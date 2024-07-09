import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

import logo from  './assets/img/logo-op2.png';
import inmobkg from './assets/img/img01.jpg';
import fav from './assets/img/fav.png';
import prop01 from './assets/img/prop01/prop04.jpg';
import marcosBkg from './assets/img/bkg01.mp4';
import marcosBkgImg from './assets/img/bkg-entregable.jpg'

// const parqueVicunaBkg = '';
// const foto01 = '';
// const catalunaPiloto = '';
// const catalunaA = '';
// const catalunaC2 = '';
// const catalunaGourmet = '';
// const aragonPiloto = '';
// const aragonPortada = '';
// const catalunaPortada = '';

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo, // Agrega la ruta de tu logo aquí
    colorPrimario: 'rgb(29, 30, 17)',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: 'rgb(0,0,0)',
    backgroundImage: '',
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingMarcosWiller/output/index.html',
    subtitles: ['Expertos en el mercado Inmobiliario del sur de chile', 'Asesoría personalizada y compromiso con nuestros clientes', 'Innovación y Transparencia en cada operación'],
    telefono: 'Fco Bilbao 1129, OF 404, Osrono',
    instagramLink: 'https://www.instagram.com/hoffmannywiller',
    facebookLink: 'https://www.facebook.com/hoffmannywiller',
    gpsLink: 'https://maps.app.goo.gl/s9sAskBr9cvfkxWg7',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },



    carousels: {
      carousel01: [
        {
          image: inmobkg,
          videoUrl: '',
          title: 'CORREDORA',
          subtitle: 'Encuentra o vende tu propiedad con nosotros',
          description: 'Con más de 12 años de experiencia en el mercado inmobiliario del sur de Chile, contamos con un equipo multidisciplinario dedicado a trabajar para usted, ofreciendo soluciones personalizadas para cada cliente. Nos destacamos por la personalización de nuestros servicios, desde el contacto inicial hasta el pago final y la entrega de las propiedades, asegurando una experiencia única y satisfactoria en cada transacción.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
        {
          image: marcosBkgImg,
          videoUrl: marcosBkg,
          title: 'PARCELACION MARCOS WILLER',
          subtitle: 'Exclusivo loteo a los pies del Volcán Osorno',
          description: 'Descripción 2',
          buttonConfig: {
            type: 'link',
            url: 'https://marcos-willer-production.up.railway.app/',
            buttonText: 'Reserva ahora',
          },
        },
        {
          image: prop01,
          videoUrl: '',
          title: 'CASA NUEVA EN PARCELA a minutos de Osorno',
          subtitle: '120 m2, 3 Dormitorio, 2 Baños',
          description: 'Se vende Hermosa casa nueva en parcela con entrega inmediata ubicada en loteo jardín los colonos en el sector de Pichil a 13 km de Osorno',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más Informacion',
          },
        },

        
      ],
      carousel02: [
        {
          image: inmobkg,
          videoUrl: '',
          title: 'DESARROLLO INMOBILIARIO',
          subtitle: 'Tu asesor inmobiliario de confianza',
          description: 'Descripción 3',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Más información',
          },
        },
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 4',
          subtitle: 'Subtitulo 4',
          description: 'Descripción 4',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
      ],
      carousel03: [
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 5',
          subtitle: 'Subtitulo 5',
          description: 'Descripción 5',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 6',
          subtitle: 'Subtitulo 6',
          description: 'Descripción 6',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
      ],
    },
    
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
   
    
  ];

  useEffect(() => {
    document.title = 'Hoffman y Willer';
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
