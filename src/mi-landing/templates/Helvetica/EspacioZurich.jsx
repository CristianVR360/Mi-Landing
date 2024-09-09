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
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingEspacioZurich/index.html',
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
          subtitle: '1 DORMITORIO 1 BAÑOS',
          description: 'Estos modernos departamentos full electric destacan por su eficiente envolvente térmico y ventanas de PVC termopanel con diseño de línea europea, garantizando un confort térmico excepcional. Cuentan con ventilación pasiva y un sistema de extracción de aire centralizada, lo que asegura un ambiente siempre fresco. La cocina está equipada con muebles de vanguardia y superficies de cubierta de cuarzo, ofreciendo un estilo contemporáneo y funcionalidad premium.',
          
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
          subtitle: '3 DORMITORIOS 3 BAÑOS',
          description: 'Estos modernos departamentos full electric destacan por su eficiente envolvente térmico y ventanas de PVC termopanel con diseño de línea europea, garantizando un confort térmico excepcional. Cuentan con ventilación pasiva y un sistema de extracción de aire centralizada, lo que asegura un ambiente siempre fresco. La cocina está equipada con muebles de vanguardia y superficies de cubierta de cuarzo, ofreciendo un estilo contemporáneo y funcionalidad premium.',
          
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
          subtitle: 'Dos conserjerías, lavandería, gimnasio y sala de reuniones.',
          description: 'Las áreas comunes de este proyecto están equipadas con cámaras CCTV para mayor seguridad, iluminación LED de bajo consumo, y cuentan con dos conserjerías. Dispone de cuatro ascensores para un fácil acceso a todas las unidades, además de una lavandería, un completo gimnasio, y una sala de reuniones (Meeting Room) ideal para trabajar o reunirse. También incluye un parking para bicicletas, promoviendo el uso de transporte sustentable.',
          
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
