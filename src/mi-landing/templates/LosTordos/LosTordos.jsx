import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import img1 from './assets/foto1.jpg';
import img2 from './assets/foto2.jpg';
import img3 from './assets/foto3.jpg';
import logo from './assets/lostordosblanco-01.png';
import img4 from './assets/foto4.jpg';
import img5 from './assets/foto5.jpg';
import favIcon from './assets/favicon.png' ;
import villarrica from './assets/volcán-villarrica.jpg' ;
//import Masterplan from './assets/master.jpg' ;
import img6 from './assets/foto6.jpg' ;
import img7 from './assets/foto7.jpg'; 
import img8 from './assets/foto8.jpg' ;
import master from './assets/mastermockup.jpg';
import img9 from './assets/foto9.jpg'
//import ubica from './assets/ubicación.jpg'; 
import servi from './assets/servicios-básicos.jpg' ;
import img10 from './assets/img10.jpg' ;




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
    telefono: '+56987631317',
    message:'Hola, quiero más información de Parcelas Los Tordos',
    instagramLink: 'https://www.instagram.com/parcelaslostordos/',
    facebookLink: '',
    footerText:'Ruta s65, Villarrica, Chile',
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
          description: 'Ubicado en la localidad de Ñancul, a solo 12 km de Villarrica, "Parcelas Los Tordos" se presenta como un proyecto de loteo exclusivo, ideal para aquellos que buscan comenzar una nueva vida en el sur de Chile. Ofrecemos un estilo de vida campestre con todas las comodidades modernas.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/ZDqds6I9dXE',
            buttonText: 'Ver video',
          },
        },
        {
          image: servi,
          videoUrl: "",
          title: 'SERVICIOS BÁSICOS',
          subtitle: '',
          description: 'Cada una de nuestras parcelas cuenta con acceso a servicios de luz y agua, todos ellos 100% soterrados para garantizar una estética visual impecable. El abastecimiento de agua se realiza a través de un APR privado, con la opción para los clientes de optar por el APR local. La electricidad es suministrada por CGE a través de una línea exclusiva para el proyecto.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/iHhcccd3ncXvkpNf8',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: villarrica,
          videoUrl: "",
          title: '¡AMPLIA CONECTIVIDAD!',
          subtitle: 'Un paraíso natural en cada parcela',
          description: 'Las señales de las principales compañías telefónicas, como Movistar, Wom, Entel y Claro, ofrecen cobertura tanto en redes 4G como en 5G.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://parcelaslostordos.cl/masterplan.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img10,
          videoUrl: "",
          title: 'ACCESIBILIDAD',
          subtitle: '',
          description: 'El proyecto está convenientemente ubicado en la ruta S-65, que conecta Villarrica con Pitrufquén. Esta ruta está perfectamente pavimentada, asegurando un fácil acceso en automóvil. Los caminos internos del proyecto están diseñados según los más altos estándares, incluyendo nivelación, drenajes, compactación y una amplitud de 6 metros, para una circulación cómoda y segura.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img5,
          videoUrl: "",
          title: 'CARACTERÍSTICAS DE LAS PARCELAS',
          subtitle: '',
          description: 'Las parcelas son de 5.000 m² y destacan por ser limpias, planas y ordenadas. Cada parcela está equipada con servicios esenciales completamente soterrados, incluyendo luz y agua, lo que contribuye a la estética limpia y ordenada del proyecto.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56987631317?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Parcelas%20Los%20Tordos',
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
          iframeUrl: 'https://parcelaslostordos.cl/masterplan.html', //
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
          iframeUrl: 'https://parcelaslostordos.cl/masterplan.html',
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
