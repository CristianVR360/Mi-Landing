import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logoblanco from './assets/logoblanco.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';






;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#003ba8',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 49, 140, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/TranquesChile/bkg-website/index.html',
    subtitles: ['Tranques de HDPE', 'Instalación de drenajes','Diseño de Embalses', ],
    telefono: '+56934567501',
    message:'¡Cotiza!',
    footerText:"",
    instagramLink: 'https://www.instagram.com/tranqueschile/',
    facebookLink: 'https://tranqueschile.cl/#',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/ieeJVsULb98M3xf4A',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(0, 112, 188, 0) 0%, rgba(0, 112, 188, 0.2) 5%, rgba(0, 112, 188, 0.4) 20%, rgba(0, 112, 188, 0.7) 50%, rgba(0, 112, 188, 0.9) 70%, rgba(0, 112, 188, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img1 ,
          videoUrl: "",
          title: 'Construcción y Diseño de Tranques de HDPE',
          subtitle: '',
          description: 'Servicios completos de diseño y construcción de tranques de agua de alta calidad utilizando tecnología de soldadura en HDPE. Estos tranques son fundamentales para el almacenamiento y la gestión eficiente del recurso hídrico en la agricultura, ayudando a los agricultores a enfrentar los desafíos de riego en regiones áridas y semiáridas.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56934567501?text=undefined',
            buttonText: 'Más información',
          },
        },
        {
          image: img2 ,
          videoUrl: "",
          title: 'Redes de suministro y distribución de Agua',
          subtitle: '',
          description: 'TranquesChile se especializa en la construcción de redes de distribución de agua dentro de predios agrícolas. Esto incluye la instalación de tuberías de HDPE, válvulas, y otros componentes necesarios para llevar el agua de manera eficiente a diversas áreas del terreno.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56934567501?text=undefined',
            buttonText: 'Más información',
          },
        },
        {
          image: img5 ,
          videoUrl: "",
          title: 'Mantenimientos y remodelaciones',
          subtitle: '',
          description: 'Entendemos que el mantenimiento continuo y las remodelaciones oportunas son cruciales para garantizar la operatividad y la eficiencia de los sistemas de gestión de agua. Ofrecemos servicios integrales de mantenimiento que incluyen la inspección, reparación, y actualización de las redes de distribución de agua y estructuras de almacenamiento.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56934567501?text=undefined',
            buttonText: 'Más información',
          },
        },
       

      ],

      carousel02: [
        {
          image: img3 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img1 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img6 ,
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
    { id: 'carousel01', texto: 'Servicios' },
    { id: 'carousel02', texto: 'Galería' },
 
    
  ];

  useEffect(() => {
    document.title = 'Tranques Chile';
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
