import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';


//importacion de recursos


import favIcon from './assets/favicon.png' ;


///a
import Logo from './assets/logowhite-8.png';
//import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
//import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
//import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
//import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
//import img10 from './assets/img11.jpg';
import img11 from './assets/img11.jpg';
import master from './assets/masterplan.jpg';
import paillaco from './assets/paillaco.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
import valdi from './assets/valdivia.jpg';
import img18 from './assets/img18.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#0e592e',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(238, 89, 7,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img13 ,
    title: 'Parcelas Paillaco',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56962981160',
    message:'Hola, quiero más información de Parcelas Paillaco',
    instagramLink: '',
    facebookLink: '',
    footerText:'Paillaco, Los Ríos, Chile',
    gpsLink: 'https://maps.app.goo.gl/Pbr5WrZoPGFdsMdB6',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(238, 89, 7, 0) 0%, rgba(238, 89, 7, 0.2) 5%, rgba(238, 89, 7, 0.4) 20%, rgba(238, 89, 7, 0.7) 50%, rgba(238, 89, 7, 0.9) 70%, rgba(238, 89, 7, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
       
        {
          image: paillaco,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Estas parcelas se ubican junto a la comuna de Paillaco, en la Región de Los Ríos, ofreciendo una oportunidad única de inversión gracias a la creciente plusvalía de la zona. Destaca por estar a escasos 800 metros de la Ruta 5, lo que garantiza excelente conectividad. Su estratégica ubicación permite cercanía a servicios como centros de salud, supermercados y otros servicios esenciales, incrementando su atractivo para una inversión segura.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/Pbr5WrZoPGFdsMdB6',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img16,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Parcelas de 5000m2 en planicies y tambien suaves lomajes que permiten hermosas postales de puesta de sol, donde la naturaleza y la tranquilidad se despliega en su máximo esplendor. Estas parcelas cuentan con una quinta de manzanas, castaños, ciruelos y bosque nativo. Disfruta de la vista a los volcanes, o preciosas vistas a los valles de la zona mientras gozas de la tranquilidad y privacidad que solo este entorno natural puede ofrecer. Con acceso asfaltado y a pocos minutos de la Ruta 5 y la comuna de Paillaco, tendrás servicios como supermercados, colegios y centros de salud al alcance de la mano.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/9iVzO3BCcqI',
            buttonText: 'Ver video',
          },
        },
        {
          image: img15,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: 'En cuanto al financiamiento, Parcelas Paillaco ofrece opciones absolutamente flexibles. Se requiere un pie inicial, y el resto del pago se negocia caso a caso con cada potencial comprador. Esta flexibilidad financiera facilita la adquisición y permite adaptar los términos según las necesidades individuales, haciendo de esta inversión una oportunidad accesible y atractiva para diferentes presupuestos.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56962981160?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Parcelas%20Paillaco',
            buttonText: 'Más información',
          },
        },
        {
          image: valdi, //imagen de valdivia
          videoUrl: "",
          title: 'Entorno, Turismo y Naturaleza',
          subtitle: 'Región de Los Ríos',
          description: 'Desde Parcelas Paillaco, tienes acceso directo a la variada oferta turística de la Región de Los Ríos. Comenzando por Valdivia, la capital regional te recibe con su rica historia, arquitectura colonial y vibrante vida cultural y universitaria, además de paseos en el río Calle-Calle. Luego, el lago Ranco ofrece actividades náuticas en paisajes espectaculares. No puedes perderte los saltos del Huilo Huilo, impresionantes cascadas en medio de bosques nativos. También destacan las termas de Puyehue, famosas por sus aguas termales y paisajes andinos. Para disfrutar de la costa, las playas de Niebla y Curiñanco brindan arenas doradas y fuertes históricos. Termas naturales, parques nacionales como Alerce Costero y rutas enológicas completan una experiencia turística enriquecida por la gastronomía local y la hospitalidad de la gente.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/9iVzO3BCcqI',
            buttonText: 'Ver video',
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
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html', //
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
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img15, 
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {

        image: img7, 
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img13,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      
      {
        image: img11,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img12,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img14,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img17,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img3,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img18,
        videoUrl: "",
        title: 'Parcelas Paillaco',
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
    document.title = 'Parcelas Paillaco';
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
