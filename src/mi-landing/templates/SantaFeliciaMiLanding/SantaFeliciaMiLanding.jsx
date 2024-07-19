import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos
import logoSantaFelicia from './assets/LOGO PRIMARIO - BLANCO.png';
import fav from './assets/FAVICON -NEGRO.png';
import videoBkg from './assets/bkg.mp4';
import imagenBkg from './assets/Queule.jpg'


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoSantaFelicia , // Agrega la ruta de tu logo aquí
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: imagenBkg ,
    title: 'Parcelas en Toltén',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información',
    iframeBackground: '',
    subtitles: ['Parcelas cerca de Araucanía Costera', 'Ideal para pesca deportiva', 'Espacio y naturaleza asegurados', "Oportunidad única para invertir"],
    telefono: '+56950937296',
    instagramLink: '',
    facebookLink: '',
    gpsLink: '',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
    carousels: {
      carousel01:[
      {
        image:"" ,
        videoUrl: videoBkg,
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
        image: "",
        videoUrl: videoBkg,
        title: 'CONDOMINIO ARAGON',
        subtitle: 'Avenida Ricardo Vicuña 1610',
        description: 'Ubicado en el consolidado sector Villa Cataluña de Los Ángeles, con acceso por Av. Gabriela Mistral y posteriormente también por Av. Alemania',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
          buttonText: 'Ver ubicación',
        },
      },

    ]
    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
   
  ];

  useEffect(() => {
    document.title = 'Parcelas Santa Felicia';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = fav;

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
