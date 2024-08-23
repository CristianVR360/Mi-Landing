import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import img1 from './assets/foto1.png';
import img2 from './assets/foto2.png';
import img3 from './assets/foto3.png';
import logo from './assets/lostordosblanco-01.png';
import img4 from './assets/foto4.png';
import img5 from './assets/foto5.png';
import favIcon from './assets/favicon.png' ;
import villarrica from './assets/volcán-villarrica.jpg' ;
//import Masterplan from './assets/master.jpg' ;
import img6 from './assets/foto6.png' ;
import img7 from './assets/foto7.png'; 
import img8 from './assets/foto8.png' ;
import master from './assets/mastermockup.jpg';
import img9 from './assets/foto9.jpg'
//import ubica from './assets/ubicación.jpg'; 
import servi from './assets/servicios-básicos.jpg' ;





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#e24b5c',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(226, 75, 92,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56931354518',
    instagramLink: 'https://www.instagram.com/parcelaslostordos/',
    facebookLink: '',
    footerText:'parcelas.astra360@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/iHhcccd3ncXvkpNf8',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(226, 75, 92, 0) 0%, rgba(226, 75, 92, 0.2) 5%, rgba(226, 75, 92, 0.4) 20%, rgba(226, 75, 92, 0.7) 50%, rgba(226, 75, 92, 0.9) 70%, rgba(226, 75, 92, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img4,
          videoUrl: "",
          title: 'Los Tordos',
          subtitle: "Ubicado en la localidad de Ñancul, a solo 12 km de Villarrica.",
          description: 'Ofrecemos un estilo de vida campestre con todas las comodidades modernas.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://youtu.be/ZDqds6I9dXE',
            buttonText: 'Ver video',
          },
        },
        {
          image: villarrica,
          videoUrl: "",
          title: 'UBICACIÓN',
          subtitle: 'Ubicado en la localidad de Ñancul',
          description: 'A solo 12 km de Villarrica, "Parcelas Los Tordos" se presenta como un proyecto de loteo exclusivo, ideal para aquellos que buscan comenzar una nueva vida en el sur de Chile.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/iHhcccd3ncXvkpNf8',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: servi,
          videoUrl: "",
          title: 'Servicios Básicos',
          subtitle: 'Un paraíso natural en cada parcela',
          description: 'Cada una de nuestras parcelas cuenta con acceso a servicios de luz y agua, todos ellos 100% soterrados para garantizar una estética visual impecable. El abastecimiento de agua se realiza a través de un APR privado, con la opción para los clientes de optar por el APR local. La electricidad es suministrada por CGE a través de una línea exclusiva para el proyecto, y como alternativa, está disponible CODINER, la compañía eléctrica rural de la zona.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://lostordosmaster360-production.up.railway.app',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img5,
          videoUrl: "",
          title: 'PRECIOS Y FINANCIAMIENTO',
          subtitle: 'Oferta de lanzamiento desde $39.000.000',
          description: 'Aprovecha nuestra oferta de lanzamiento con precios desde $39.000.000. Ofrecemos diversas opciones de pago, incluyendo financiamiento directo de hasta 48 cuotas. La reserva de parcelas se puede realizar con un pie de $7.000.000, asegurando tu lugar en este paraíso natural. Además, aceptamos pagos con tarjetas de crédito/débito y transferencias bancarias.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
      ],
      

    carousel02:[
      //aqui pongo imagen del masterplan
      { 
        image: master , 
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://lostordosmaster360-production.up.railway.app', //
          buttonText: 'Ver Master Plan',
        },
      },
      {
    
        image:img3 ,
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://bosquesdequilentue.cl/masterplan.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Los Tordos',
        subtitle: "",
        description: '',
      },
      {
        image: img7,
        videoUrl: "",
        title: 'Los Tordos',
        subtitle: "",
        description: '',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Los Tordos',
        subtitle: "",
        description: '',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Los Tordos',
        subtitle: "",
        description: '',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Los Tordos',
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
    document.title = 'Los Tordos';
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
