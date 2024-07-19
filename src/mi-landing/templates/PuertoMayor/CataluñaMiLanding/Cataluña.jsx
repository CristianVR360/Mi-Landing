import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg';
import logo from './assets/logo-cataluna.png';
import catalunaPortadaCasas from './assets/Casas.jpg';
import catalunaPiloto from './assets/CasaPilotoCataluna.jpg';
import catalunaA from './assets/CatalunaA.jpg';
import catalunaC2 from './assets/Catalunac2.jpg';
import catalunaGourmet from './assets/Gourmet.jpg';
import catalunaPortada from './assets/Sala-Ventas.jpg';
import catalunaAerea from './assets/caraluna-aerea.jpg';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.8)',
    colorTerciario: '#313131',
    colorCuaternario: '#34495e',
    backgroundImage: catalunaPortada,
    title: 'BIENVENIDO A CONDOMINIO CATALUÑA', //titulo principal 
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctate con nosotros!', //msg wsp
    iframeBackground: "",
    subtitles: ['Roberto Figueroa, Asesor de ventas', 'Explora a tu ritmo, en cualquier momento y lugar', 'Asesorate para adquirir el hogar de tus sueños'], //subtitulos moviles
    telefono: '+56954237688',
    footerText:"ventaslosangeles@ipuertomayor.cl",
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/THKx1gd22dGYNbsS8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(52, 152, 219, 0) 0%, rgba(52, 152, 219, 0.2) 5%, rgba(52, 152, 219, 0.4) 20%, rgba(52, 152, 219, 0.7) 50%, rgba(52, 152, 219, 0.9) 70%, rgba(52, 152, 219, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {

  
      carousel01: [
        {
          image: catalunaPortadaCasas,
          
          videoUrl: "",
          title: 'CASAS',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Casas de hormigon armado, pisos porcelanatos continuos, cocinas equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: catalunaPiloto,
          videoUrl: "",
          title: 'CASA PILOTO',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Modelo B2 ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Tour Virtual',
          },
          
        },
  
      ],

      carousel02: [
        {
          image: catalunaAerea,
          
          videoUrl: "",
          title: 'DEPARTAMENTOS',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, cocina equipada, Termopaneles con marcos de PVC, calefacción central a gas baños principales con shower door',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: catalunaA,
          videoUrl: "",
          title: 'DEPARTAMENTO TIPO A',
          subtitle: '61,54 m2, 2 Dormitorios 2 Baños.  ',
          description: 'Modelo A',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+TIPO+A/output/index.html',
            buttonText: 'Tour Virtual',
          },
          
        },
        {
          image: catalunaC2,
          videoUrl: "",
          title: 'DEPARTAMENTO C2',
          subtitle: '124,39 m2, 3 Dormitorios 3 Baños.  ',
          description: 'Modelo B',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+C2/output/index.html',
            buttonText: 'Tour Virtual',
          },
          
        },
        {
          image: catalunaGourmet,
          videoUrl: "",
          title: 'SALÓN GOURMET ',
          subtitle: 'Elegante, moderno, versátil, acogedor, exclusivo',
          description: 'Descubre un espacio exclusivo diseñado para celebrar la vida y compartir momentos inolvidables con familiares y amigos. ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Sal%C3%B3n+Gourmet/output/index.html',
            buttonText: 'Tour Virtual',
          },
          
        },

      ]

    },
   
  };

  const opciones = [// declaro el boton - nombre del boton
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Casas' },
    { id: 'carousel02', texto:'Departamentos'},
    
    
  ];

  useEffect(() => {
    document.title = 'Puerto Mayor';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href =  favUrl;

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
