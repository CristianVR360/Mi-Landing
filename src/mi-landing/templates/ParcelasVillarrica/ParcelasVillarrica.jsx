import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/vogelhauslogoblanco.png';
//import img1 from './assets/img1.jpg';
//import img2 from './assets/img2.jpg';
//import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5-6tafaja.jpg';
import favIcon from './assets/favicon.png';
import casapremium from './assets/casapreimum.jpg';
import portada from './assets/portada.jpg';
import nueva1 from './assets/nueva1.jpg';
import nueva2 from './assets/nueva2.jpg';
import nueva3 from './assets/nueva3.jpg';
import nueva4 from './assets/nueva4.jpg';
import nueva5 from './assets/nueva5.jpg';
import nueva6 from './assets/nueva6.jpg';
import nueva7 from './assets/nueva7.jpg';
import nueva8 from './assets/nueva8.jpg';
import nueva9 from './assets/nueva9.jpg';
import nueva10 from './assets/nueva10.jpg';
import nueva11 from './assets/nueva11.jpg';
import nueva12 from './assets/nueva12.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#d2492a',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 85, 90,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Parcelas planas, limpias y listas para comenzar a construir', 'Cerca de la ciudad y con fácil acceso', 'Tu nueva vida en el sur de Chile', "Oportunidad única para invertir"],
    telefono: '+56976858145',
    message:'¡Hola!, quiero más información.',
    instagramLink: 'https://www.instagram.com/parcelas.vogelhaus/',
    facebookLink: 'https://www.facebook.com/share/TD2p4uCR6vPUHknC/?mibextid=qi2Omg',
    footerText:'+569 7685 8145',
    gpsLink: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 85, 90, 0) 0%, rgba(0, 85, 90, 0.2) 5%, rgba(0, 85, 90, 0.4) 20%, rgba(0, 85, 90, 0.7) 50%, rgba(0, 85, 90, 0.9) 70%, rgba(0, 85, 90, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      
      

    carousel01:[
      { 
        image: img4 , 
        videoUrl: "",
        title: 'VogelHaus',
        subtitle: "Todo lo que necesitas está aquí",
        description: 'Luz y agua a los pies de tu parcela. Portón de acceso, amplios caminos, grifos de incendio y cerco incluido. ',
        buttonConfig: {
          type: 'link',
          url: 'https://parcelasvillarrica.cl/vogelhaus.html', //
          buttonText: 'Ver sitio web',
        },
      },
      {
    
        image:img5 ,
        videoUrl: "",
        title: 'Hermoso Terreno en Sexta Faja',
        subtitle: "",
        description: 'Ubicados estratégicamente entre el aeropuerto de Temuco y Villarrica, cerca de lagos, cordillera, volcanes y la costa valdiviana.',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56976858145',
          buttonText: 'Más información',
        },
      },
      {
    
        image:casapremium ,
        videoUrl: "",
        title: 'Casa Premium en Villarrica',
        subtitle: "",
        description: 'Casa nueva con altos estándares en diseño y construcción. Amplias habitaciones, cocina y terraza',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56976858145',
          buttonText: 'Más información',
        },
      },
    ],

    carousel02: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: nueva1, 
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva2,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva3,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva4,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva5,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva6,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva7,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva8,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva9,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva10,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva11,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: nueva12,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
    ],
  
    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Proyectos' },
    { id: 'carousel02', texto: 'Galería' },
  ];

  useEffect(() => {
    document.title = 'Parcelas Villarrica';
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
