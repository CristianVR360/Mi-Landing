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
          title: 'Master Plan 360',
          subtitle: 'Tus proyectos inmobiliarios con una experiencia interactiva y envolvente',
          description: 'Transforma la experiencia de tus clientes y destaca entre la competencia con nuestro innovador servicio de Master Plan 360. Ofrece una vista interactiva y envolvente, integrando tags de georreferencia y amenities destacados del proyecto, proporcionando una comprensión clara y detallada de cada desarrollo inmobiliario.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: carouselImage1,
          videoUrl: "",
          title: 'Tour Virtual',
          subtitle: 'Pilotos y espacios virtuales ',
          description: '',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Tour Virtual',
          },
          
        },
  
      ],
    }


  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Inmobiliarias' },
    { id: '', texto: 'Loteos' },
    
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
