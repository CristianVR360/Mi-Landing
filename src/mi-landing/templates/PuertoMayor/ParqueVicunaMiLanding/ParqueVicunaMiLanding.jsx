import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/logo-parque-vicuna.png';
import parqueVicunaBkg from './assets/ParqueVicuna.jpg';
import portada from './assets/parque-vicuna-proyecto.jpg';
import bkgcarousel2 from './assets/parque-vicuna-proyecto-banner.jpg';
import parqueVicuna03 from './assets/parquevicuna03.jpg';




const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2 ',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.8)',
    colorTerciario: '#313131',
    colorCuaternario: '#34495e',
    backgroundImage: portada,
    title: 'BIENVENIDO A PARQUE VICUÑA',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctate con nosotros!',
    iframeBackground: '',
    subtitles: ['Contacto: Rodolfo Urra.', 'Lunes a viernes 9:30 a 14:00 y 15:30 a 18:30 horas ', 'Sábado 10:00 a 14:00 y de 15:30 a 18:00 horas - Domingo cerrado', 'Asesórate para adquirir el hogar de tus sueños'],
    telefono: '+56973356563',
    message:'Necesito más información sobre el proyecto',
    footerText:" ventaslosangeles@ipuertomayor.cl | rurra@ipuertomayor.cl",
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/5CgDsk6rUFtFHQzh8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(52, 152, 219, 0) 0%, rgba(52, 152, 219, 0.2) 5%, rgba(52, 152, 219, 0.4) 20%, rgba(52, 152, 219, 0.7) 50%, rgba(52, 152, 219, 0.9) 70%, rgba(52, 152, 219, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: parqueVicunaBkg,
          videoUrl: "",
          title: 'PARQUE VICUÑA',
          subtitle: 'PROYECTO',
          description: 'Un espacio único que contempla 2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/ParqueVicu%C3%B1a-Fachada/output/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: bkgcarousel2,
          videoUrl: "",
          title: 'UBICACIÓN CÉNTRICA',
          subtitle: 'Av. Ricardo Vicuña 812',
          description: 'Cercano a parques, universidades, supermercado, servicentros, ciclovías y más.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/ParqueVicu%C3%B1a-Emplazamiento/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: parqueVicuna03,
          videoUrl: "",
          title: 'PARQUE VICUÑA',
          subtitle: 'ESPACIOS',
          description: 'Moderno equipamiento, salón gourmet, gimnasio, piscina, taller de bicicletas y espacios cowork.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.puertomayor.cl/index.php?action=parque-vicuna',
            buttonText: 'Ver sitio web',
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
