import React, { useEffect } from 'react';
import MiLanding from './../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
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

import master from './assets/master.jpg';
import llaima from './assets/llaima.jpg';
import conguillio from './assets/conguillio.jpg';
import financiamiento from './assets/financiamiento.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#00b4ff',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(9, 117, 218, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: 'Naturaleza extrema a tu alcance',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingAguasDulces/index.html',
    subtitles: ['Rodeado de araucarias milenarias y fauna nativa.', 'Acceso expedito a paisajes impresionantes.','Tu refugio con vista al Volcán Llaima', ],
    telefono: '+',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/8z1FqNq4LjMf6kke7',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(9, 117, 218, 0) 0%, rgba(9, 117, 218, 0.2) 5%, rgba(9, 117, 218, 0.4) 20%, rgba(9, 117, 218, 0.7) 50%, rgba(9, 117, 218, 0.9) 70%, rgba(9, 117, 218, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img11 ,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Estas parcelas ofrecen una vista privilegiada al Volcán Llaima, rodeadas de araucarias milenarias y fauna nativa. Con acceso a agua pura y suelos fértiles, son ideales tanto para vivienda como para proyectos ecológicos y turísticos.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: llaima ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Situadas en la Ruta Interlagos, una de las rutas escénicas más impresionantes del sur de Chile, estas parcelas cuentan con acceso expedito y están a minutos del Parque Nacional Conguillío, un destino de ecoturismo de clase mundial.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/8z1FqNq4LjMf6kke7',
            buttonText: 'Ver Ubicación',
          },
        },
        {
          image: conguillio ,
          videoUrl: "",
          title: 'Turismo y Naturaleza',
          subtitle: '',
          description: 'La zona es perfecta para el turismo de aventura y bienestar, con senderos, lagos cristalinos y un cielo estrellado sin contaminación lumínica. Además, es un lugar ideal para lodges, cabañas y experiencias inmersivas en un entorno natural único.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
          
        },
        {
          image: financiamiento ,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Obtener mas información',
          },
        },
       

      ],

      carousel02: [
        {
          image: master ,
          videoUrl: "",
          title: 'MasterPlan',
          subtitle: '',
          description: 'Revisa disponibilidad y explora de manera inmersiva nuestro poryecto',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/AguaDulces/output/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        
        

      ],

      carousel03: [
        {
          image: img4,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img5,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img10,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img7,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img8,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img9,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img6,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img11,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img2,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img3,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img12,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img13,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img14,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img15,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'MasterPlan' },
    { id: 'carousel03', texto: 'Galería' },
 
    
  ];

  useEffect(() => {
    document.title = 'Parcelación Aguas Dulces';
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
