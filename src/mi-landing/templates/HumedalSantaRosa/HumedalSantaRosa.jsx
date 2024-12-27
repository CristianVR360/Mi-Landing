import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png';
//import vidbkg from './assets/Baclground Landing Santa Rosa.mp4';
import vidbkg2 from './assets/SantaRosa.mp4';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import masterplan from './assets/masterplan.jpg';
import masterplan2 from './assets/masterplan2.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
import img18 from './assets/img18.jpg';
import financia from './assets/financiamiento.jpg';
import lagocolico from './assets/lagocolico.jpg';
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';
import img26 from './assets/img26.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#c3ad45',
    videoBkgHero: vidbkg2,
    colorSecundario:'#fff',
    colorPrimarioTransparente: 'rgba(177, 149, 18, 0.8)',
    colorTerciario: '#f08013',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Parcelas Agrícolas',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Parcelas de 5000 m², a solo 15 minutos de Temuco.', 'Vive en un entorno natural y tranquilo, cerca de todo lo que necesitas.', 'Tu espacio perfecto: naturaleza, privacidad y comodidad en un solo lugar.',],
    telefono: '+56976488200',
    message:'¡Hola!, quiero más información.',
    instagramLink: '',
    facebookLink: '',
    footerText:'tp.sbugmann@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/XjWJU5f82tw7DRuQA?g_st=iw',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(149, 138, 86, 0) 0%, rgba(149, 138, 86, 0.2) 5%, rgba(149, 138, 86, 0.4) 20%, rgba(149, 138, 86, 0.7) 50%, rgba(149, 138, 86, 0.9) 70%, rgba(149, 138, 86, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      
      carousel01: [
        { 
          image: img1, 
          videoUrl: "",
          title: 'Características',
          subtitle: "",
          description: 'Parcelas de 5.000 m² ubicadas en plena Ruta S-61, que conecta Padre Las Casas con Cunco. Cuentan con línea eléctrica por todo el predio, excelente accesibilidad y un entorno natural único. A solo 10 minutos de Padre Las Casas y 20 minutos de Temuco, son ideales para quienes buscan tranquilidad sin alejarse de la ciudad.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '', 
            buttonText: 'Ver Video',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: "Camino a Cunco, Región de la Araucanía",
          description: 'Estas parcelas están estratégicamente ubicadas en el corazón de la Araucanía, en el Camino a Cunco. La Ruta S-61 facilita el acceso a importantes destinos turísticos como el Parque Nacional Villarrica (70 km), el Parque Nacional Conguillío (80 km) y el paso fronterizo Icalma (90 km). Disfruta de la cordillera, lagos y un entorno privilegiado, todo a tu alcance.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/XjWJU5f82tw7DRuQA?g_st=iw',
            buttonText: '📌 Ver Ubicación',
          },
        },
        {
          image: financia,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: "",
          description: 'Contamos con opciones de pago flexibles y adaptadas a tus necesidades. Nuestro objetivo es facilitarte la adquisición de tu parcela soñada en este entorno privilegiado. Contáctanos para conocer más sobre las alternativas disponibles.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56976488200?text=%C2%A1Hola!%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: lagocolico,
          videoUrl: "",
          title: 'Entorno, Turismo y Naturaleza',
          subtitle: "",
          description: 'Ubicadas en un entorno natural único, estas parcelas te acercan a la cordillera y a atractivos turísticos como el Lago Colico (40 km), el Lago Caburgua (65 km) y los baños termales de Huife (70 km). Vive rodeado de naturaleza, con la comodidad de estar cerca de servicios y la ciudad.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56976488200?text=%C2%A1Hola!%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
      ],
      

    carousel02:[
      { 
        image: masterplan , 
        videoUrl: "",
        title: 'MasterPlan',
        subtitle: "",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'humedalsantarosa-production.up.railway.app/masterplan.html', 
          buttonText: 'Ver Master Plan',
        },
      },
      { 
        image: masterplan2 , 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'humedalsantarosa-production.up.railway.app/masterplan.html', 
          buttonText: 'Ver Master Plan',
        },
      },
      
      
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img5, 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img1,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img6,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img7,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img8,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img9,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img10,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img11,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img12,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img13,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img14,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img15,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img16,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img17,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img18,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img19,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img20,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img21,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img22,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img23,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img24,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img25,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img26,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img3,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
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
    document.title = 'Humedal Santa Rosa de Huichahue';
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
