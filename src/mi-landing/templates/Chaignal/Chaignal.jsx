import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logoChaignal.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import servi from './assets/serviciosbasicos.jpg';
import master from './assets/master.jpg';
import favIcon from './assets/favicon.png';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#006c6e',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 82, 84,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Tu nueva vida en el sur de Chile, Región de los Ríos', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56931354518',
    instagramLink: 'https://www.instagram.com/parcelaschaignal/',
    facebookLink: '',
    footerText:'parcelas.astra360@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/PKPdiCsChYYHCFxH6',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 82, 84, 0) 0%, rgba(0, 82, 84, 0.2) 5%, rgba(0, 82, 84, 0.4) 20%, rgba(0, 82, 84, 0.7) 50%, rgba(0, 82, 84, 0.9) 70%, rgba(0, 82, 84, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img4,
          videoUrl: "",
          title: 'Los Tordos',
          subtitle: "Ubicado en la localidad Malalhue, a solo 20 km de la hermosa ciudad de Panguipulli",
          description: '"Parcelas Chaignal" se presenta como un proyecto de loteo exclusivo, ideal para aquellos que buscan comenzar una nueva vida en el sur de Chile. Ofrecemos un estilo de vida campestre con todas las comodidades que puede ofrecer la vida moderna.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/IJZB19xo_8k',
            buttonText: 'Ver video',
          },
        },
        {
          image: servi,
          videoUrl: "",
          title: 'SERVICIOS BÁSICOS',
          subtitle: '',
          description: 'Cada una de nuestras parcelas cuenta con acceso a servicios de luz y agua, todos ellos 100% soterrados para garantizar una estética visual impecable. El abastecimiento de agua se realiza a través de un APR.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/PKPdiCsChYYHCFxH6',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: '¡AMPLIA CONECTIVIDAD!',
          subtitle: 'Un paraíso natural en cada parcela',
          description: 'Las señales de las principales compañías telefónicas, como Movistar, Wom, Entel y Claro, ofrecen cobertura tanto en redes 4G como en 5G.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://lostordosmaster360-production.up.railway.app',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img5,
          videoUrl: "",
          title: 'ACCESIBILIDAD',
          subtitle: '',
          description: 'El proyecto tiene acceso directo por la internacional 203, que conecta Ruta 5, Lanco, Malalhue, Panguipulli, hasta el paso fronterizo Huahum que conecta con San Martin de los Andes. Esta ruta está perfectamente pavimentada, asegurando un fácil acceso en automóvil. Los caminos internos del proyecto están diseñados según los más altos estándares, incluyendo nivelación, drenajes, compactación y una amplitud de 6 metros, para una circulación cómoda y segura.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img7,
          videoUrl: "",
          title: 'CARACTERÍSTICAS DE LAS PARCELAS',
          subtitle: '',
          description: 'Las parcelas, de 5.000 m² cada una, destacan por su diseño limpio, plano y ordenado. Cada parcela está equipada con servicios esenciales como luz, agua e internet, todos soterrados para mantener la armonía con el entorno natural. Además, el proyecto incluye áreas verdes, bosques, y árboles a lo largo de los caminos, y algunas parcelas tienen acceso directo al río, ofreciendo un entorno natural único.',
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
          iframeUrl: 'https://lostordosmaster360-production.up.railway.app',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
      {
        image: img10,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
      {
        image: img11,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: "",
        description: '',
      },
    ],
    
    carousel04: [
      
      {
        image: img1 ,
        videoUrl: "",
        title: 'Descubre el encanto de Parcelas Chaiganal:',
        subtitle: 'Yo Juan Guillermo Valenzuela te presento',
        description: 'Te invitamos a explorar un video exclusivo que te transportará al corazón de Parcelas Chaignal, un lugar donde la naturaleza se fusiona con la tranquilidad y el estilo de vida que siempre has deseado. En esta presentación detallada, conocerás cada rincón de este extraordinario proyecto de parcelación, diseñado para ofrecerte un refugio perfecto en medio de la belleza natural.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://www.youtube.com/embed/6PC3STetosw?si=EAF5g8Ijeo6C6TA6',
          buttonText: 'Ver Video',
        },
      },
    ]
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
    { id: 'carousel03', texto: 'Galería' },
    { id: 'carousel04', texto: 'Presentación' },
  ];

  useEffect(() => {
    document.title = 'Parcelas Chaignal';
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