import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
import portada from './assets/portada.jpg';
import piloto1d1b from './assets/1D1B.jpg';
import piloto3d3b from './assets/3d3b.jpg';
import amenities from './assets/ameneties.jpg';
import galeria from './assets/galeria.jpg';

;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#e30311',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 0, 0, 0.8)',
    colorTerciario: '#e30311',
    colorCuaternario: '#34495e',
    backgroundImage: portada,
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Elije tu futuro hogar desde la comodidad de tu sofá','SAN ERNESTO 990', ],
    telefono: '+56997854093',
    message:'Necesito más información sobre el proyecto',
    footerText:"venta@ihelvetica.cl",
    instagramLink: 'https://www.instagram.com/inmobiliaria.helvetica/',
    facebookLink: 'https://www.facebook.com/ihelvetica',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/PG9h6kUfyAL14JJWA',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(193, 35, 32, 0) 0%, rgba(193, 35, 32, 0.2) 5%, rgba(193, 35, 32, 0.4) 20%, rgba(193, 35, 32, 0.7) 50%, rgba(193, 35, 32, 0.9) 70%, rgba(193, 35, 32, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: portada ,
          videoUrl: "",
          title: 'UBICACIÓN PRIVILEGIADA',
          subtitle: 'SAN ERNESTO 990, TEMUCO ',
          description: 'Proyecto emplazado entre dos vías principales de la ciudad. A pocos pasos de universidades, colegios, clínicas, mall, gastronomía, comercio, supermercado, farmacia,  servicentro, ciclovía (5 minutos al centro) y la tranquilidad de Plaza Dreves.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/5MMYR2gl8hI',
            buttonText: 'Ver video',
          },
        },
        {
          image: piloto1d1b,
          videoUrl: "",
          title: 'Espacio Zurich 1D1B',
          subtitle: '000 M² | 3 DORMITORIOS 2 BAÑOS',
          description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligentes.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/helveticaRespaldo/Piloto-1D1B/index.html',
            buttonText: 'Ver piloto virtual',
          },
        },
        {
          image: piloto3d3b,
          videoUrl: "",
          title: 'Espacio Zurich 3D3B',
          subtitle: '000 M² | 2 DORMITORIOS 2 BAÑOS',
          description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligentes.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Helvetica/Zurich/3d-2b/output/index.html',
            buttonText: 'Ver piloto virtual',
          },
        },
        {
          image: amenities,
          videoUrl: "",
          title: 'Amenities',
          subtitle: 'Pasillos y hall de acceso  de gran amplitud de 4 metros de altura. ',
          description: 'Privacidad y comodidad tanto al interior de los departamentos, como en todos sus espacios exteriores.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/Helvetica/Areas-Comunes/index.html',
            buttonText: 'Ver espacios',
          },
        },

      ],

      carousel02: [
        {
          image: galeria ,
          videoUrl: "",
          title: 'Recorre nuestros espacios',
          subtitle: 'DISFRUTA LA EXPERIENCIA DE RECORRER TU PRÓXIMO DEPARTAMENTO',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/Helvetica/Pilotos-Espacio-Zurich/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: galeria ,
          videoUrl: "",
          title: 'Recorre nuestros espacios',
          subtitle: 'DISFRUTA LA EXPERIENCIA DE RECORRER TU PRÓXIMO DEPARTAMENTO',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/Helvetica/Pilotos-Espacio-Zurich/index.html',
            buttonText: 'Ver Proyecto',
          },
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Tour Virtual' },
    { id: 'carousel02', texto: 'Galería 360' },
 
    
  ];

  useEffect(() => {
    document.title = 'Helvética - Espacio Zúrich';
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
