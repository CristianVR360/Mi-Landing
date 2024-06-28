import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
import logo from './assets/logopm_b.png';
import parqueVicunaBkg from './assets/Catalunac2.jpg';
import foto01 from './assets/PilotoAragon.jpg'




const Astra360MiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: "",
    title: 'Tour Virtual',
    
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita virtual!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Explora a tu propio ritmo, en cualquier momento y lugar', 'Elije tu futuro hogar desde la comodidad de tu sofá', ],
    carouselLinks: [
     
      {
        image: parqueVicunaBkg,
        videoUrl: "",
        title: 'Parque Vicuña',
        subtitle: 'Avenida Ricardo Vicuña 812',
        description: '2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios, además de un moderno equipamiento, salón gourmet, gimnasio, piscina y espacios cowork para estudiantes y reuniones.',
        buttonConfig: {
          type: 'link',
          iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html',
          buttonText: 'Ver Tour Virtual',
        },
        
        
      },
      {
        image: foto01,
        videoUrl: "",
        title: 'Haz tu reserva ahora',
        subtitle: 'Y aprovecha descuentos increibles',
        description: 'Preventa disponible',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
          buttonText: 'Reserva ahora',
        },
        
        
      },
    
    ],
    newCarouselLinks: [
      {
        image: "",
        videoUrl: "",
        title: 'Carrusel 2',
        subtitle: 'Inmobiliarias, Proyectos de Parcelación',
        description: 'Master Plan 360 interactivo, incluye tags de informacion, puntos de interes geograficos, ubicacion, deslindes del proyecto, etc',
        cta: 'Get Started',
      },
      {
        image: "",
        videoUrl: "",
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
    { id: 'carousel', texto: 'Parque Vicuña' },
    { id: 'newCarousel', texto: 'Condominio Aragón' }

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
