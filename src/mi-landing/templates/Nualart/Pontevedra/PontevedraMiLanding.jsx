import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.svg';
import logo from './assets/logo-ponteVedra.png';
import portada from './assets/bg-mapa-2_liv_phot.jpg';
import plantaC from './assets/portada02.jpg';
import plantaD1 from './assets/portada03.jpg';
import plantaD2 from './assets/portada04.jpg';
import plantaE1 from './assets/portada05.jpg';

//import parqueVicunaBkg2 from './assets/parque-vicuna-proyecto.jpg';
//import foto01 from './assets/PilotoAragon.jpg';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#C12D42',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(45, 46, 50, 0.8)',
    colorTerciario: '#C12D42',
    colorCuaternario: '#34495e',
    backgroundImage: "",
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPonteVedra/output/index.html',
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Elije tu futuro hogar desde la comodidad de tu sofá','Av. Martín Lutero #02580', ],
    telefono: '+56932132459',
    message:'Necesito más información sobre el proyecto',
    footerText:"pontevedra@nualart.cl",
    instagramLink: 'https://www.instagram.com/nualartinmobiliaria/',
    facebookLink: 'https://web.facebook.com/nualartinmobiliaria/',
    linkedinLink: 'https://cl.linkedin.com/company/nualart-inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/3P9TcX6gdi5RjBQi6',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(45, 46, 50, 0) 0%, rgba(45, 46, 50, 0.2) 5%, rgba(45, 46, 50, 0.4) 20%, rgba(45, 46, 50, 0.7) 50%, rgba(45, 46, 50, 0.9) 70%, rgba(45, 46, 50, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: portada ,
          videoUrl: "",
          title: 'UBICACION PRIVILEGIADA',
          subtitle: 'Av. Martín Lutero #02580',
          description: 'Asociado a una estética diferenciadora, el entorno se compenetra con un proyecto pensado para vivir los mejores momentos en diversos espacios que te llevarán a compartir sin límites…',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: plantaC,
          videoUrl: "",
          title: 'PLANTA C',
          subtitle: '119 M² | 3 DORMITORIOS 2 BAÑOS',
          description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligentes.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/Planta-C/index.html',
            buttonText: 'Ver piloto virtual',
          },
        },
        {
          image: plantaD1,
          videoUrl: "",
          title: 'PLANTA D1',
          subtitle: '100 M² | 2 DORMITORIOS 2 BAÑOS',
          description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligentes.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/Planta-D1/index.html',
            buttonText: 'Ver piloto virtual',
          },
        },
        {
            image: plantaD2,
            videoUrl: "",
            title: 'PLANTA D2',
            subtitle: '100 M² | 2 DORMITORIOS 2 BAÑOS',
            description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligentes.',
            
            buttonConfig: {
              type: 'popup',
              iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/Planta-D2/index.html',
              buttonText: 'Ver piloto virtual',
            },
          },
          {
            image: plantaE1,
            videoUrl: "",
            title: 'PLANTA E1',
            subtitle: '82 M² | 2 DORMITORIOS 2 BAÑOS',
            description: 'Departamento inteligente impulsado por domótica, complete kitchen, calefacción por losa radiante, accesos controlados inteligente.',
            
            buttonConfig: {
              type: 'popup',
              iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/Planta-E1/index.html',
              buttonText: 'Ver piloto virtual',
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
    document.title = 'Nualart - Pontevedra';
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
