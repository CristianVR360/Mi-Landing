import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/vogelhauslogoblanco.png';
//import img1 from './assets/img1.jpg';
//import img2 from './assets/img2.jpg';
//import img3 from './assets/img3.jpg';
//import img4 from './assets/img4.jpg';
import favIcon from './assets/favicon.png';
import ubica from './assets/ubicación.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
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






//https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingParcelasVillarrica//index.html     BACKGROUND

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#d2492a',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 85, 90,0.8)',
    colorTerciario: '#f08013',
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Mercado de Calidad de Vida', 'Cerca de la ciudad y con fácil acceso', 'Tu nueva vida en el sur de Chile', "Oportunidad única para invertir"],
    telefono: '+56976858145',
    message:'¡Hola!, quiero más información.',
    instagramLink: 'https://www.instagram.com/parcelas.vogelhaus/',
    facebookLink: 'https://www.facebook.com/share/TD2p4uCR6vPUHknC/?mibextid=qi2Omg',
    footerText:'Manhue, Villarrica',
    gpsLink: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 85, 90, 0) 0%, rgba(0, 85, 90, 0.2) 5%, rgba(0, 85, 90, 0.4) 20%, rgba(0, 85, 90, 0.7) 50%, rgba(0, 85, 90, 0.9) 70%, rgba(0, 85, 90, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      
      carousel01:[
        { 
          image: img5 , 
          videoUrl: "",
          title: 'Vogelhaus',
          subtitle: "Hermoso proyecto para Inversionistas y familias.",
          description: 'Puedes invertir; desde comprar una sola Parcela, hasta varias de ellas e incluso con casa de diseño único.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/FT0QI2GzhDs', //
            buttonText: 'Ver Video',
          },
        },
        {
      
          image:ubica ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: "40 minutos desde el Aeropuerto Temuco. Sólo 20 minutos de Villarrica y 45 de Pucón.",
          description: ' Rutas hacia Villarrica/Pucón: vía Freire: Ruta 199. Vía Pitrufquén; S-65. Vía Sexta Faja: S-689.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
            buttonText: '📌 Ver Ubicación',
          },
        },
        {
      
          image:img6 ,
          videoUrl: "",
          title: 'Distancias a Puntos de Interés',
          subtitle: "",
          description: 'Estamos a 59 km del Aeropuerto de Temuco, 20 km de Villarrica y 49 km de Pucón. Valdivia está a 118 km y la Reserva Huilo Huilo a 117 km. Cerca, Ñancul (12 km) y Huiscapi (11 km) ofrecen servicios básicos. La Posta Manhue está a 1,5 km, y el Colegio Inglés Oxford School a 16 km.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
            buttonText: 'Ver en el Mapa',
          },
        },
        {
      
          image:img7 ,
          videoUrl: "",
          title: 'Parcelación Estratégica en un Entorno Natural Único',
          subtitle: "Conectividad, Seguridad y Comodidad en un Proyecto que Combina lo Mejor del Campo y la Ciudad",
          description: 'En tierras ideales para agricultura y ganadería, fuera de riesgo volcánico, combina turismo y tranquilidad campestre. Con escrituración inmediata, ofrece cercos perimetrales, caminos amplios de 8 m, pozo registrado, conexión de agua, grifos de incendio, buena señal celular e internet. También cuenta con empalme eléctrico subterráneo, caminos ripiados y portón automático.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56976858145',
            buttonText: 'Más información',
          },
        },
      ],

    carousel02:[
      { 
        image: img8 , 
        videoUrl: "",
        title: 'Explora Nuestro Tour Virtual Interactivo',
        subtitle: "Conoce la Ubicación Estratégica, las Ventajas de Inversión y la Belleza del Entorno Natural del Proyecto",
        description: 'Descubre nuestro Tour Virtual interactivo y explora la ubicación estratégica del proyecto, así como su hermoso entorno natural y su gran plusvalía.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelasvillarrica.cl/masterplan.html', //
          buttonText: 'Ver Master Plan',
        },
      },
      { 
        image: img9 , 
        videoUrl: "",
        title: 'Explora Nuestro Tour Virtual Interactivo',
        subtitle: "Conoce la Ubicación Estratégica, las Ventajas de Inversión y la Belleza del Entorno Natural del Proyecto",
        description: 'Descubre nuestro Tour Virtual interactivo y explora la ubicación estratégica del proyecto, así como su hermoso entorno natural y su gran plusvalía.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelasvillarricamasterplan-production.up.railway.app/', //
          buttonText: 'Ver Master Plan',
        },
      },
      
    ],

    carousel03: [
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
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'MasterPlan' },
    { id: 'carousel03', texto: 'Galería' },
  ];

  useEffect(() => {
    document.title = 'VogelHaus';
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
