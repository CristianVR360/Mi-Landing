import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';


//importacion de recursos


import favIcon from './assets/favicon.png' ;


///a
import Logo from './assets/Logo.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img11.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import master from './assets/masterplan.jpg';

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#1b3457',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(27, 52, 86,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Hacienda Del Ranco',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingHaciendaDelRanco/index.html',
    subtitles: ['Agenda tu visita online gratis en el botón de whatsapp', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Agenda tu visita online gratis en el botón de whatsapp', 'Naturaleza virgen y espacios amplios en cada parcela', 'Agenda tu visita online gratis en el botón de whatsapp', "Oportunidad única para invertir"],
    telefono: '+',
    message:'Hola, quiero más información de Hacienda Del Ranco',
    instagramLink: '',
    facebookLink: '',
    footerText:'Lago Ranco, Los Ríos, Chile',
    gpsLink: 'https://maps.app.goo.gl/az23YRbb7MHmbdyo8',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(101, 190, 74, 0) 0%, rgba(101, 190, 74, 0.2) 5%, rgba(101, 190, 74, 0.4) 20%, rgba(101, 190, 74, 0.7) 50%, rgba(101, 190, 74, 0.9) 70%, rgba(101, 190, 74, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img1,
          videoUrl: "",
          title: 'Hacienda Del Ranco',
          subtitle: "Ubicado en Lago Ranco, Los Ríos",
          description: 'Ubicada estratégicamente en la zona suroeste de la cuenca, Lago Ranco se destaca como la comuna con la mejor conectividad de la región. Se encuentra a solo 25 minutos de la Ruta 5 Sur, a 60 minutos de Valdivia y a 45 minutos de la ciudad de Osorno, y cuenta con una población aproximada de 9,500 habitantes. A pocos minutos, se pueden disfrutar de atractivos turísticos de gran belleza, como el Parque Futangue, el Bosque Quillin, el Mirador Piedra Mesa y el Salto Pichi Ignao. Su ubicación la convierte en un lugar ideal para cualquier proyecto de negocios, gracias a su alta plusvalía.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: 'Servicios Básicos',
          subtitle: '',
          description: 'En la Hacienda del Lago Ranco, las parcelas cuentan con servicios básicos de agua y luz.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/az23YRbb7MHmbdyo8',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: 'Accesibilidad',
          subtitle: '',
          description: 'Nuestras parcelas cuentan con acceso controlado para mayor seguridad y amplios caminos de accesos.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://haciendadelagoranco-production.up.railway.app',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img9,
          videoUrl: "",
          title: 'Conectividad',
          subtitle: '',
          description: 'Su Acceso directo a a ruta T- 8 5 permite una alta conectividad a toda la cuenca del Lago Ranco.',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: img4,
          videoUrl: "",
          title: 'Actividades Turisticas',
          subtitle: '',
          description: 'A pocos minutos de allí, se encuentran atractivos turísticos de gran belleza, como son; el Parque Futangue, el Bosque Quillin, el Mirador Piedra Mesa y el Salto Pichi Ignao.',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
      ],
      

    carousel02:[
      //aqui pongo imagen del masterplan
      { 
        image: master , 
        videoUrl: "",
        title: 'Master Plan 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://haciendadelagoranco-production.up.railway.app', //
          buttonText: 'Ver Master Plan',
        },
      },
      {
    
        image:img5 ,
        videoUrl: "",
        title: 'Master Plan 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://haciendadelagoranco-production.up.railway.app',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {

        image: img7, 
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img10,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img11,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img12,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img13,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img14,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img15,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
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
    document.title = 'Hacienda Del Ranco';
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
