import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
//import logo from './assets/logo.png';
import logoblanco from './assets/logoblanco.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
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
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';
import img26 from './assets/img26.jpg';
import img27 from './assets/img27.jpg';
import master1 from './assets/master1.jpg';
//import master2 from './assets/master2.jpg';
import etapa1 from './assets/etapa1.jpg';
import etapa2 from './assets/etapa2.jpg';
import etapa3 from './assets/etapa3.jpg';









const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#225e48',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(34, 94, 72, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingLagunaLosCorrales/index.html',
    subtitles: ['Donde lo especial se vuelve cotidiano' ],
    telefono: '+56942403802',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: 'https://www.instagram.com/lagunaloscorrales.cl?igsh=NmZ4cGIyemt2b2ph',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/6Sd6bd8E4VCEfK3h7',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(124, 195, 103, 0) 0%, rgba(124, 195, 103, 0.2) 5%, rgba(124, 195, 103, 0.4) 20%, rgba(124, 195, 103, 0.7) 50%, rgba(124, 195, 103, 0.9) 70%, rgba(124, 195, 103, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: etapa1 ,
          videoUrl: "",
          title: 'Etapa 1',
          subtitle: '100% vendida',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: etapa2 ,
          videoUrl: "",
          title: 'Etapa 2',
          subtitle: '100% vendida',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: etapa3 ,
          videoUrl: "",
          title: 'Etapa 3',
          subtitle: '100% vendida',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        

      ],

      carousel03: [
        {
          image: img1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        
        {
          image: img26 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img11 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img3 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img5 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img6 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img7 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img8 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img9 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img10 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img12 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img13 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img15 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img6 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img17 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img18 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img19 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img20 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img21 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img22 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img23 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img24 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img25 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },{
          image: img27 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img14 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },
        {
          image: img16 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
          className: 'photoGallery',
        },

      ],

      carousel02: [
        {
          image: img18 ,
          videoUrl: "",
          title: 'Laguna Los Corrales',
          subtitle: '',
          description: 'Laguna Los Corrales, donde lo especial se vuelve cotidiano. Ubicadas en la majestuosa selva Valdiviana, estas macroparcelas ofrecen un espacio único y privilegiado, rodeadas de algunos de los lagos más icónicos del sur de Chile. A tan solo 20 minutos del hermoso Lago Ranco, las parcelas están estratégicamente ubicadas en la Ruta T-567, con acceso rápido a todos los rincones de esta región privilegiada.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: img7 ,
          videoUrl: "",
          title: 'CARACTERÍSTICAS',
          subtitle: '',
          description: 'Cada parcela tiene aproximadamente 21.000 metros cuadrados, con orientación norte, ideal para proyectos de generación fotovoltaica. Además, cuentan con tendido eléctrico colindante al lado sur del loteo. La mayoría de las parcelas son atravesadas por vertientes y arroyos, proporcionando agua natural durante todo el año. Y si no, la solución ideal es un pozo profundo, asegurando el suministro de agua en cualquier situación.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: img17 ,
          videoUrl: "",
          title: 'ACCESIBILIDAD',
          subtitle: '',
          description: 'El acceso está garantizado para todo tipo de vehículos, con solo 4 kilómetros de camino de ripio. Este tramo está en proceso de licitación y pronto será pavimentado, facilitando la llegada al cercano Lago Meihue y al Volcán Cuya, ubicado justo al lado del loteo.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: img27 ,
          videoUrl: "",
          title: 'PAISAJES Y TURISMO',
          subtitle: '',
          description: 'Laguna Los Corrales, donde vivir rodeado de la naturaleza es un lujo que puede formar parte de tu vida diaria. Disfruta de la cercanía al Lago Ranco, a la belleza del Lago Maihue, al imponente Río Nilahue y los Saltos del Nilahue, al sereno Río Bueno, y por supuesto, a la tranquilidad de la Laguna Los Corrales.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56942403802?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
            buttonText: 'Más Información',
          },
        },
        {
          image: master1 ,
          videoUrl: "",
          title: 'Master Plan',
          subtitle: 'Revisa disponibilidad y explora de manera inmersiva nuestro poryecto ',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/LagunaLosCorrales/E4-LagunaLosCorrales/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
    

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Etapa 1, 2 y 3' },
    { id: 'carousel02', texto: 'Etapa 4' },
    { id: 'carousel03', texto: 'Galería' },
    
    
 
    
  ];

  useEffect(() => {
    document.title = 'Laguna Los Corrales';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = FavIcon;

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
