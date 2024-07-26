import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
import logo from './assets/img/Logo-astra-Blanco.png';
import faviconUrl from './assets/img/favicon.png';
import bkg from './assets/img/astra-fondo.jpg';
import carouselImage1 from './assets/img/astra-fondo.jpg';
//import carouselImage2 from './assets/img/astra-fondo.jpg';
//import carouselVideo1 from './assets/video/Astra360drone1.mp4';
//import carouselVideo2 from './assets/video/astratv3.mp4';

const Astra360MiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: bkg,
  
    description: 'Marketing Inmobiliario Digital',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Hablemos!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Recorridos virtuales y experiencias 360', 'Contenido Audiovisual', 'Desarrollo web'],
    
    telefono: '+56984305751',
    instagramLink: 'https://instagram.com/astra360',
    facebookLink: 'https://facebook.com/astra360',
    gpsLink: 'https://maps.google.com/?q=Astra360',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },

    carousels: {

  
      carousel01: [
        {
          image: carouselImage1,
          
          videoUrl: "",
          title: 'AERO VIEW 360',
          subtitle: 'Tus proyectos inmobiliarios con una experiencia interactiva y envolvente',
          description: 'Transforma la experiencia de tus clientes y destaca entre la competencia con nuestro innovador servicio de Master Plan 360. Ofrece una vista interactiva y envolvente, integrando tags de georreferencia y amenities destacados del proyecto, proporcionando una comprensión clara y detallada de cada desarrollo inmobiliario.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: carouselImage1,
          videoUrl: "",
          title: 'TOUR VIRTUAL Y GALERÍAS 360',
          subtitle: 'Pilotos y espacios virtuales ',
          description: 'Busca la mejor experiencia inmersiva para  tus clientes y destaca entre la competencia con nuestro innovador servicio de Tour Virtual. Diseñado específicamente para inmobiliarias, este servicio ofrece una vista interactiva y envolvente de tus proyectos, integrando recorridos virtuales de 360° con tags, proporcionando una comprensión clara y detallada de cada piloto.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Ver ejemplo',
          },
          
        },

        {
          image: carouselImage1,
          videoUrl: "",
          title: 'PRODUCCIÓN AUDIOVISUAL',
          subtitle: 'Fotografía, videos, reels.',
          description: 'Transforma la presentación de tus desarrollos inmobiliarios y destaca en el mercado con nuestro servicio integral de producción audiovisual, que incluye fotografías de alta calidad, videos, reels y contenido atractivo para redes sociales',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/sbQVgKE_UYQ?si=HPBjGHwFdTHuCg64',
            buttonText: 'Ver ejemplo',
          },
          
        },
  
      ],

      
      carousel02: [
        {
          image: carouselImage1,
          
          videoUrl: "",
          title: 'MASTERPLAN 360',
          subtitle: 'Tus proyectos con una experiencia interactiva y envolvente',
          description: 'Transforma la experiencia de tus clientes y destaca entre la competencia con nuestro innovador servicio de Master Plan 360. Ofrece una vista interactiva y envolvente, integrando tags de georreferencia y puntos de interes, proporcionando una comprensión clara y detallada de cada desarrollo inmobiliario.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: carouselImage1,
          videoUrl: "",
          title: 'GALERÍAS 360 y STREET VIEW',
          subtitle: 'Recorre digitalmente tu proyecto ',
          description: 'Busca la mejor experiencia inmersiva para  tus clientes y destaca entre la competencia con nuestro innovador servicio de Tour Virtual. Diseñado específicamente para proyectos de loteos, este servicio ofrece una vista interactiva y envolvente de tus proyectos, integrando recorridos tipo street view, proporcionando una comprensión clara y detallada de tu proyecto.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://marcoswillerintranet-production.up.railway.app/',
            buttonText: 'Ver ejemplo',
          },
          
        },

        {
          image: carouselImage1,
          videoUrl: "",
          title: 'PRODUCCIÓN AUDIOVISUAL',
          subtitle: 'Fotografía, videos, reels.',
          description: 'Transforma la presentación de tus proyectos y destaca en el mercado con nuestro servicio integral de producción audiovisual, que incluye fotografías de alta calidad, videos, reels y contenido atractivo para redes sociales',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/sbQVgKE_UYQ?si=HPBjGHwFdTHuCg64',
            buttonText: 'Ver ejemplo',
          },
          
        },
  
      ],

      carousel03: [
        {
          image: carouselImage1,
          
          videoUrl: "",
          title: 'INMOBILIARIA NUALART',
          subtitle: 'Proyectos ejecutados: 2',
          description: 'AeroView + Recorridos Virtuales + Experiencias en Realidad Virtual',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html',
            buttonText: 'Ver proyecto',
          },
        },
        {
          image: carouselImage1,
          videoUrl: "",
          title: 'INMOBILAIRIA PUERTO MAYOR',
          subtitle: 'Proyectos ejecutados: 6',
          description: 'Recorridos Virtuales y aeroviews para proyectos en Los Ángeles, Temuco y Pucón.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver proyecto',
          },
          
        },

        {
          image: carouselImage1,
          videoUrl: "",
          title: 'HOFFMAN & WILLER',
          subtitle: 'Proyectos ejecutados: 2',
          description: 'Master plan 360 para loteos, Website de administracion y gestión de propiedades',
          buttonConfig: {
            type: 'link',
            iframeUrl: 'https://ghw.cl',
            buttonText: 'Visitar website',
          },
          
        },

        {
          image: carouselImage1,
          videoUrl: "",
          title: 'PARCELAS VILLARRICA',
          subtitle: 'Proyectos ejecutados: 2',
          description: 'Master plan 360 para loteos, Website informativo.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://masterplan360.s3.sa-east-1.amazonaws.com/parcelasvillarrica/vogelHaus/output/index.html',
            buttonText: 'Ver proyecto',
          },
          
        },
  
        
        {
          image: carouselImage1,
          videoUrl: "",
          title: 'Parcelas Chaignal y Los Tordos',
          subtitle: 'Proyectos ejecutados: 3',
          description: 'Master plan 360 para loteos, Website informativo, producción audiovisual.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/6PC3STetosw?si=xmj-Nh9lhhAA7_Fs',
            buttonText: 'Ver proyecto',
          },
          
        },
      ],


    }


  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Inmobiliarias' },
    { id: 'carousel02', texto: 'Loteos y parcelaciones' },
    { id: 'carousel03', texto: 'Portafolio' },
    
    // Agrega más opciones según sea necesario
  ];

  useEffect(() => {
    // Actualizar el título de la página
    document.title = 'Astra360 - Landing Page';

    // Actualizar el favicon
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = faviconUrl;

    // Limpieza (opcional)
    return () => {
      // Restaurar el título y el favicon a su estado original al desmontar el componente
      document.title = 'MiLanding';
      favicon.href = favicon;
    };
  }, []);

  return (
    <div>
      <MiLanding landingPageData={landingPageData} opciones={opciones} />
      {/* Otros elementos específicos del cliente */}
    </div>
  );
};

export default Astra360MiLanding;
