import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
import logo from './assets/img/logo/logo-astra.png';
import bkg from './assets/img/astra-fondo.jpg';
import carouselImage1 from './assets/img/astra-fondo.jpg';
import carouselImage2 from './assets/img/astra-fondo.jpg';
import carouselVideo1 from './assets/video/Astra360drone1.mp4';
import carouselVideo2 from './assets/video/astratv3.mp4';

const Astra360MiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: bkg,
    title: 'ASTRA 360',
    description: 'Marketing Inmobiliario Digital',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Hablemos!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Recorridos virtuales y experiencias 360', 'Contenido Audiovisual', 'Desarrollo web'],
    carouselLinks: [
      {
        image: carouselImage1,
        videoUrl: carouselVideo1,
        title: 'Audiovisual',
        subtitle: 'Videos promocionales y contenido para RRSS',
        description: 'Producción audiovisual de alta calidad, desde la Conceptualización del Video, Rodaje, Edición y Postproducción. Incluye Reels para multiples plataformas',
        cta: 'Learn More',
        buttonConfig: {
          type: 'link',
          iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html',
          buttonText: 'Ver Tour Virtual',
        },
      },
      {
        image: carouselImage2,
        videoUrl: carouselVideo2,
        title: 'Recorridos Virtuales y experiencias 360',
        subtitle: 'Inmobiliarias, Proyectos de Parcelación',
        description: 'Master Plan 360 interactivo, incluye tags de informacion, puntos de interes geograficos, ubicacion, deslindes del proyecto, etc',
        cta: 'Get Started',
      },
    
    ],
    newCarouselLinks: [
      {
        image: carouselImage2,
        videoUrl: carouselVideo2,
        title: 'Carrusel 2',
        subtitle: 'Inmobiliarias, Proyectos de Parcelación',
        description: 'Master Plan 360 interactivo, incluye tags de informacion, puntos de interes geograficos, ubicacion, deslindes del proyecto, etc',
        cta: 'Get Started',
      },
      {
        image: carouselImage2,
        videoUrl: carouselVideo2,
        title: 'Ort probandoooo',
        subtitle: 'Inmobiliarias, Proyectos de Parcelación',
        description: 'Master Plan 360 interactivo, incluye tags de informacion, puntos de interes geograficos, ubicacion, deslindes del proyecto, etc',
        cta: 'Get Started',
      },
    ],

    telefono: '+56984305751',
    instagramLink: 'https://instagram.com/astra360',
    facebookLink: 'https://facebook.com/astra360',
    gpsLink: 'https://maps.google.com/?q=Astra360',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel', texto: 'Servicios' },
    { id: 'newCarousel', texto: 'Portafolio' }
    // Agrega más opciones según sea necesario
  ];

  useEffect(() => {
    // Actualizar el título de la página
    document.title = 'Astra360 - Landing Page';

    // Actualizar el favicon
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'astra360_favicon.ico';

    // Limpieza (opcional)
    return () => {
      // Restaurar el título y el favicon a su estado original al desmontar el componente
      document.title = 'MiLanding';
      favicon.href = 'default_favicon.ico';
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
