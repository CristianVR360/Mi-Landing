import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

// Importación de recursos
import favUrl from './assets/fav.jpg';
import logo from './assets/Aragon-logo.png';
import mainBkg from './assets/Sala-Ventas.jpg';
import carouselBkg from './assets/AragonAerea.jpg';
import aragonPiloto from './assets/PilotoAragon.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2 ',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: mainBkg,
    title: 'BIENVENIDO A NUESTRO RECORRIDO VIRTUAL',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Asesorate aqui!',
    iframeBackground: '',
    subtitles: [
      'Roberto Figueroa, Asesor de ventas',
      'Explora A tu ritmo, en cualquier momento y lugar',
      'Asesórate para adquirir el hogar de tus sueños'
    ],
    telefono: '+56954237688',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/QCgv6wFv6Lk6UAuQ9',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
    carousels: {
      carousel01: [
        {
          image: carouselBkg,
          videoUrl: "",
          title: 'CONDOMINIO ARAGON',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Ubicado en el consolidado sector Villa Cataluña de Los Ángeles, con acceso por Av. Gabriela Mistral y posteriormente también por Av. Alemania',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
        {
          image: aragonPiloto,
          videoUrl: "",
          title: 'VISITA PILOTO VIRTUAL',
          subtitle: 'Inmobiliarias, Proyectos de Parcelación',
          description: '19 casas de 102,92 m2, en dos niveles, de 3 dormitorios y 3 baños.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/CasaPiloto/output-1/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
      ],
    },
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Tour Virtual' },
   
  ];

  useEffect(() => {
    document.title = 'Puerto Mayor';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = favUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = favUrl;
      document.head.appendChild(link);
    }

    return () => {
      document.title = 'MiLanding';
      if (favicon) {
        favicon.href = 'default_favicon.ico';
      }
    };
  }, []);

  return (
    <div>
      <MiLanding landingPageData={landingPageData} opciones={opciones} />
    </div>
  );
};

export default TemplateMiLanding;
