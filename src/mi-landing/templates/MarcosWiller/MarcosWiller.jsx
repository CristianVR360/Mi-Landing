import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import img1 from './assets/foto1.jpg';
import logo from './assets/Logo.png' ;
import img2 from './assets/img2.jpg' ;
import img3 from './assets/img3.jpg' ;
import img4 from './assets/img4.jpg' ;
import img5 from './assets/img5.jpg' ;
import img6 from './assets/img6.jpg' ;
import img7 from './assets/img7.jpg' ;
import img8 from './assets/img8.jpg' ;
import favIcon from './assets/favicon.png';
import master from './assets/masterplan.jpg';
import img9 from './assets/img9.jpg' ;
//import servi from './assets/servicios-básicos.jpg' ;
//import ubica from './assets/ubicacion.jpg' ;
import brochure from './assets/portadabruchure.jpg' ;
import ubicav2 from './assets/ubicacionv2.jpg' ;
//import img10 from './assets/img10.jpg' ;


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#fe9900',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(254, 153, 0,0.8)',
    colorTerciario: '#000000',
    colorCuaternario: '#00000', 
    backgroundImage: img1 ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Parcelas exclusivas rodeadas de naturaleza prístina y paisajes impresionantes', 'Parcelas de 5.000 m², con luz, agua y rol incluido ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56944156747',
    instagramLink: '',
    facebookLink: '',
    footerText:'leandro.marcos.w@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/Pw1eGg4LX1rgLaBk6',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(53, 53, 53, 0) 0%, rgba(53, 53, 53, 0.2) 5%, rgba(53, 53, 53, 0.4) 20%, rgba(53, 53, 53, 0.7) 50%, rgba(53, 53, 53, 0.9) 70%, rgba(53, 53, 53, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: brochure,
          videoUrl: "",
          title: 'Parcelacion Marcos Willer',
          subtitle: "Osorno Cordillerano, a minutos de Puerto Octay y el Volcán Osorno",
          description: 'Parcelas agrícolas Marcos-Willer están ubicadas en un sector privilegiado de la cordillera , siendo el refugio natural ideal para encontrar tranquilidad y vistas increíbles alrededor, destacando por su variedad de naturaleza que puedes encontrar desde parcelas planas con vista a Volcán, o estar rodeado de naturaleza nativa de la zona o con orilla de rio. el lugar perfecto que buscas para desconectarte de la ciudad y con atractivos turísticos a solo minutos. ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/sbQVgKE_UYQ',
            buttonText: 'Ver video',
          },
        },
        {
          image: ubicav2,
          videoUrl: "",
          title: 'UBICACIÓN',
          subtitle: 'La Picada, Puerto Octay, a minutos del Volcán Osorno y el Lago Llanquihue',
          description: 'La Picada se encuentra en Puerto Octay, en una ubicación privilegiada hacia la cordillera de los Andes, rodeada de majestuosos paisajes naturales. Desde aquí, puedes explorar el impresionante Volcán Osorno, un icono de la región con su forma perfecta y cumbre nevada, que ofrece actividades durante todo el año, como esquí en invierno y senderismo en verano. A pocos minutos, el Lago Llanquihue invita a disfrutar de deportes acuáticos y vistas panorámicas de los volcanes circundantes. No muy lejos, los Saltos del Petrohué sorprenden con sus caídas de agua cristalina en medio del Parque Nacional Vicente Pérez Rosales, y el Cerro Chincol ofrece una ruta ideal para los amantes del trekking y la fotografía de paisajes.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/Pw1eGg4LX1rgLaBk6',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img4,
          videoUrl: "",
          title: 'CARACTERÍSTICAS',
          subtitle: 'Un refugio natural en cada parcela',
          description: 'Las Parcelas Agrícolas Marcos Willer ofrecen un entorno privilegiado en la cordillera, convirtiéndose en el lugar perfecto para quienes buscan tranquilidad y conexión con la naturaleza. Cada parcela brinda una experiencia única: desde terrenos planos con vistas impresionantes al Volcán Osorno, hasta áreas rodeadas de vegetación nativa o con orillas de río que invitan al descanso y la reflexión. Aquí, la naturaleza no solo es un telón de fondo, sino parte integral de tu vida cotidiana. Además, cada parcela cuenta con acceso a luz soterrada y agua proporcionada por un APR privado, garantizando un entorno cómodo y listo para construir el refugio que siempre has soñado. Con atractivos turísticos a solo minutos, Marcos Willer es el lugar ideal para desconectarte de la ciudad y encontrar tu oasis personal.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.parcelasmarcoswiller.cl/masterplan.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img5,
          videoUrl: "",
          title: 'PRECIOS Y FINANCIAMIENTO',
          subtitle: 'Oferta de lanzamiento desde $59.900.000',
          description: 'Aprovecha nuestra oferta de lanzamiento con precios desde $59.990.000. Ofrecemos diversas opciones de pago, incluyendo financiamiento directo de hasta 36 cuotas. La reserva de parcelas se puede realizar con un pie de $5.000.000, asegurando tu lugar en este refugio natural. Además, aceptamos pagos con tarjetas de crédito/débito y transferencias bancarias, te brindamos el mejor asesoramiento financiero que necesites.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56944156747?text=undefined',
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
          iframeUrl: 'https://www.parcelasmarcoswiller.cl/masterplan.html', //
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
          iframeUrl: 'https://www.parcelasmarcoswiller.cl/masterplan.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
      },
      {
        image: img7,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
      },
      {
        image: img1,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
      },
      {
        image: img3,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
        subtitle: "",
        description: '',
        
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Marcos Willer, Parcelas Agrícolas',
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
    document.title = 'Marcos Willer';
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
