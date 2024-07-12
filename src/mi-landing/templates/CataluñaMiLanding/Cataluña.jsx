import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/logo-cataluna.png';

import catalunaPiloto from './assets/CasaPilotoCataluna.jpg';
import catalunaA from './assets/CatalunaA.jpg';
import catalunaC2 from './assets/Catalunac2.jpg';
import catalunaGourmet from './assets/Gourmet.jpg';
import catalunaPortada from './assets/Sala-Ventas.jpg';
import catalunaAerea from './assets/caraluna-aerea.jpg'



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2 ',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: catalunaPortada,
    title: 'BIENVENIDO A CONDOMINIO CATALUÑA', //titulo principal 
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Asesorate aqui!', //msg wsp
    iframeBackground: "",
    subtitles: ['Roberto Figueroa, Asesor de ventas', 'Explora a tu ritmo, en cualquier momento y lugar', 'Asesorate para adquirir el hogar de tus sueños'], //subtitulos moviles
    telefono: '+56954237688',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/THKx1gd22dGYNbsS8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
    
    carousels: {

  
      carousel01: [
        {
          image: catalunaAerea,
          
          videoUrl: "",
          title: 'CONDOMINIO CATALUÑA',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Condominio Cataluña está ubicado detrás del Barrio residencial Cataluña, con acceso por Av. Gabriela Mistral y también por Av. Alemania',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
        {
          image: catalunaPiloto,
          videoUrl: "",
          title: 'CASA PILOTO',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaA,
          videoUrl: "",
          title: 'DEPARTAMENTO TIPO A',
          subtitle: '61,54 m2, 2 Dormitorios 2 Baños.  ',
          description: 'Los departamentos del proyecto cuentan con pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, horno eléctrico, encimera y campana. Además, disponen de ventanas termopanel con marcos de PVC, calefacción central a gas individual y baños principales con shower door.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+TIPO+A/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaC2,
          videoUrl: "",
          title: 'DEPARTAMENTO C2',
          subtitle: '124,39 m2, 3 Dormitorios 3 Baños.  ',
          description: 'Los departamentos del proyecto cuentan con pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, horno eléctrico, encimera y campana. Además, disponen de ventanas termopanel con marcos de PVC, calefacción central a gas individual y baños principales con shower door.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+C2/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaGourmet,
          videoUrl: "",
          title: 'SALÓN GOURMET ',
          subtitle: 'Elegante, moderno, versátil, acogedor, exclusivo',
          description: 'Descubre un espacio exclusivo diseñado para celebrar la vida y compartir momentos inolvidables con familiares y amigos. Nuestro Salón Gourmet tipo Quincho combina elegancia y comodidad, creando el ambiente perfecto para tus reuniones sociales y eventos especiales.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Sal%C3%B3n+Gourmet/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
      ],

    },
   
  };

  const opciones = [// declaro el boton - nombre del boton
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Tour Virtual' },
    
    
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
