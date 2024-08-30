import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';


// Importación de recursos
import favUrl from './assets/fav.jpg';
import logo from './assets/Aragon-logo.png';
import mainBkg from './assets/Sala-Ventas.jpg';
import carouselBkg from './assets/AragonAerea.jpg';
import aragonPiloto from './assets/PilotoAragon.jpg';
import edificioPortada from './assets/EdificioPortada.jpg';
import EdificioPortada2 from './assets/EdificioAragon2.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2', 
    colorSecundario: '#fff', 
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.8)',
    colorTerciario: '#313131',
    colorCuaternario: '#34495e',
    backgroundImage: mainBkg,
    title: 'BIENVENIDO A NUESTRO RECORRIDO VIRTUAL',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctate con nosotros!',
    iframeBackground: '',
    subtitles: [
      'Roberto Figueroa, Vendedor', ' Lunes a viernes 9:30 a 14:00 y de 15:30 a 18:30 horas ', 'Sábados: 10:00 a 14:00 y de 15:30 a 18:00 horas.', 
      
      'Asesórate para adquirir el hogar de tus sueños'
    ],
    telefono: '+56954237688',
    message:'Necesito más información sobre el proyecto',
    footerText:"ventaslosangeles@ipuertomayor.cl",
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/QCgv6wFv6Lk6UAuQ9',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(52, 152, 219, 0) 0%, rgba(52, 152, 219, 0.2) 5%, rgba(52, 152, 219, 0.4) 20%, rgba(52, 152, 219, 0.7) 50%, rgba(52, 152, 219, 0.9) 70%, rgba(52, 152, 219, 1) 100%)",

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
            buttonText: 'Ver ubicación',
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
            buttonText: 'Ver ubicación',
          },
        },
      ],


      carousel02: [
        {
          image: edificioPortada,
          videoUrl: "",
          title: 'EDIFICIO ARAGÓN',
          subtitle: 'PRÓXIMAMENTE',
          description: 'Edificio Aragón estará ubicado en el consolidado sector Villa Cataluña de Los Ángeles, con acceso por Av. Gabriela Mistral y posteriormente también por Av. Alemania, lo que mejorará la conectividad hacia todos los servicios que necesitas.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: EdificioPortada2,
          videoUrl: "",
          title: 'Ver Piloto',
          subtitle: '2024',
          description: 'Edificio de 7 pisos con un total de 56 departamentos, de 1, 2 y 3 dormitorios, con metrajes desde 36 m² hasta 79m²',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/PilotoDepto/PilotoDepto-V1/output-1/index.html',
            buttonText: 'Ver Piloto',
          },
        },
    ],
    },
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Casas' },
    { id:"carousel02", texto: "Departamentos"}
   
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
