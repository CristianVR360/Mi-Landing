import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

// Importación de recursos
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png';
import portada from './assets/portada.jpg';
import quienes from './assets/quienessomos.jpg';
import quienes2 from './assets/quienes2.jpg';
import calidad from './assets/calidad-y-frescura.jpg';
import comunidad from './assets/comunidad.jpg';
import sostenibilidad from './assets/sostenibilidad.jpg';
import salud from './assets/salud.jpg';
import conexion from './assets/conexion-emocional.jpg';
import triptico1 from './assets/triptico1.jpg';
import triptico2 from './assets/triptico2.jpg';
import triptico3 from './assets/triptico3.jpg';
import triptico4 from './assets/triptico4.jpg';
import packag1 from './assets/packag1.jpg';
import packag2 from './assets/packag2.jpg';
import packag3 from './assets/packag3.jpg';
import packag4 from './assets/packag4.jpg';
import packag5 from './assets/packag5.jpg';
import packag6 from './assets/packag6.jpg';








const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo, // Ruta del logo
    colorPrimario: 'rgba(0, 13, 210, 0.7)',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(5, 13, 76,0.8)',
    colorTerciario: '#1d3fce', // Botones del carrusel
    colorCuaternario: '#34495e',
    backgroundImage: portada,
    title: '',
    bookButtonText: 'Reservar ahora',
    bookDescription: 'Agenda una consulta con nosotros hoy.',
    consultationButtonText: 'Obtener consulta',
    ctaWhatsappButton: '¡Más información!',
    iframeBackground: '',
    subtitlePosition: 'bottom',
    subtitles: [
      'Desde el sur de Chile a cada mesa del mundo',
      'Trabajamos de la mano con agricultores locales para garantizar frutas congeladas sostenibles y de alta calidad.',
      'Calidad y frescura chilena garantizadas, llevando lo mejor de la naturaleza a tu mesa.',
    ],
    
    message: "¡Hola! Quiero más información.",
    instagramLink: '',
    facebookLink: '',
    footerText: 'contact@iceberggreen.com',
    gpsLink: 'https://maps.app.goo.gl/RW329mENcnR2HKJJ9',
    linkedinLink: '',
    footerAfterStyles: {
      background:
        'linear-gradient(to bottom, rgba(7, 31, 81, 0) 0%, rgba(7, 31, 81, 0.2) 5%, rgba(7, 31, 81, 0.4) 20%, rgba(7, 31, 81, 0.7) 50%, rgba(7, 31, 81, 0.9) 70%, rgba(7, 31, 81, 1) 100%)',
      textColor: '#fff',
    },

    carousels: {
      // Aquí va el brochure
      carousel01: [
        {
          image: quienes,
          videoUrl: '',
          title: 'Quiénes somos',
          subtitle: '',
          description:
            'En Iceberg Green, exportamos frutas congeladas (IQF) de alta calidad, cosechadas en los fértiles campos del sur de Chile mediante prácticas agrícolas sostenibles. Trabajamos de la mano con agricultores locales, utilizando tecnología avanzada para garantizar frescura, sabor y valor nutricional.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: triptico1,
          videoUrl: '',
          title: 'Desde el sur de Chile',
          subtitle: 'a los hogares del mundo',
          description:
            '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: triptico2,
          videoUrl: '',
          title: 'Utilizamos tecnología IQF',
          subtitle: '',
          description:
            'permitiendo congelar la fruta de manera rápida, para no alterar el sabor, la forma, la frescura y valor nutricional del producto.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: triptico3,
          videoUrl: '',
          title: 'Calidad y frescura chilena asegurada.',
          subtitle: 'Desde el sur del a Chile  a cada mesa en el mundo con la frescura, calidad y experiencia que nos caracteriza.',
          description:
            'Nos especializamos en procesar y exportar frutas congeladas (IQF) de alta calidad, cosechadas en los fértiles campos del sur de Chile mediante prácticas agrícolas sostenibles.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: triptico4,
          videoUrl: '',
          title: 'Trabajamos de la mano de agricultores locales',
          subtitle: '',
          description:
            '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        
        {
          image: quienes2,
          videoUrl: '',
          title: 'Quiénes somos',
          subtitle: '',
          description:
            'Nuestro compromiso es llevar lo mejor de las frutas chilenas al mundo, promoviendo la sostenibilidad, apoyando comunidades agrícolas y contribuyendo al bienestar de nuestros consumidores.',
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
          videoUrl: '',
          title: 'Enfoque en calidad y frescura',
          subtitle: '',
          description:
            'Cada fruta que exportamos es cuidadosamente seleccionada y procesada con tecnología de última generación. Esto asegura la máxima frescura y calidad, preservando nutrientes y sabores naturales. Desde el sur de Chile, llevamos al mundo frutas saludables y nutritivas que reflejan nuestra pasión por la excelencia.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: comunidad,
          videoUrl: '',
          title: 'Buscamos crear comunidad',
          subtitle: '',
          description:
            'En Iceberg Green, creemos en el poder de la colaboración. Trabajamos junto a agricultores locales y profesionales del sector para construir una comunidad sólida. A través de prácticas responsables, generamos valor y fomentamos el crecimiento para todos los miembros, promoviendo un desarrollo colectivo y sostenible.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: sostenibilidad,
          videoUrl: '',
          title: 'Compromiso con la sostenibilidad',
          subtitle: '',
          description:
            'Nos enorgullece trabajar en armonía con el entorno, adoptando prácticas agrícolas sostenibles que protegen nuestros campos y preservan la biodiversidad. Este compromiso se refleja en cada uno de nuestros productos, apostando por un futuro más verde, responsable y consciente.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: salud,
          videoUrl: '',
          title: 'Comprometidos con la salud de todos',
          subtitle: '',
          description:
            'Sabemos que una buena alimentación es clave para una vida saludable. Los berries que ofrecemos son una fuente rica en antioxidantes, vitaminas y minerales esenciales como la vitamina C y el potasio. Estos superalimentos ayudan a fortalecer el sistema inmunológico, mejorar la salud cardiovascular y promover una piel sana.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: conexion,
          videoUrl: '',
          title: 'Creemos en la conexión emocional',
          subtitle: '',
          description:
            'Más que productos, llevamos emociones a la mesa. Valoramos el poder de la conexión que genera la comida, desde el campo hasta la cocina. Cada fruto que ofrecemos representa momentos únicos que unen a las personas, creando recuerdos y experiencias que perduran en el tiempo.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
      ],
   
      carousel04: [
        {
          image: packag1,
          videoUrl: '',
          title: 'Fruta Estándar',
          subtitle: '',
          description:
            'El diseño de este empaque captura la esencia de los fértiles y prístinos campos del sur de Chile, un homenaje a las manos trabajadoras de los agricultores locales que cultivan estos productos con esmero. Las berries son cosechadas en las tierras más fértiles del sur de Chile, en campos donde se aplican prácticas agrícolas sostenibles, respetando el entorno natural y asegurando la calidad de cada fruto.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: packag2,
          videoUrl: '',
          title: '',
          subtitle: '',
          description:
            'La ilustración, protagonista del diseño, resalta los paisajes únicos del sur, donde las montañas, los valles y la flora local se integran armoniosamente.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: packag3,
          videoUrl: '',
          title: '',
          subtitle: '',
          description:
            'Con colores vivos y naturales, el empaque refleja la frescura y calidad de las frutas chilenas, destacando su origen puro y natural. El emblema chileno y la frase "Directo desde el sur de Chile" enmarcan el compromiso de la marca de ofrecer productos auténticos, cultivados en uno de los rincones más fértiles y puros del planeta.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: packag4,
          videoUrl: '',
          title: 'Fruta Premium',
          subtitle: '',
          description:
            'En esta propuesta, el diseño enfatiza la frescura y la calidad de las frutas chilenas, llevando la imagen de cada fruta al primer plano.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: packag5,
          videoUrl: '',
          title: '',
          subtitle: '',
          description:
            'Al maximizar su presencia visual, el empaque captura la atención y destaca la autenticidad de los productos en un mercado altamente competitivo. Cada fruta aparece en detalle, reflejando su textura y color vibrante, lo que comunica un mensaje de frescura y pureza. ',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: packag6,
          videoUrl: '',
          title: '',
          subtitle: '',
          description:
            'Con una tipografía moderna y una disposición clara de la información, el diseño mantiene el enfoque en el producto, mientras que la inclusión del emblema chileno y la frase "Directo desde el sur de Chile" refuerzan el origen premium y la conexión directa con los fértiles campos del sur de Chile',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        
      ],
    },
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Quiénes somos' },
    { id: 'carousel02', texto: 'Nuestra visión' },
    { id: 'carousel03', texto: 'Presentación' },
    { id: 'carousel04', texto: 'Packaging' },
  ];

  useEffect(() => {
    document.title = 'Iceberg Green';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = favIcon;

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
