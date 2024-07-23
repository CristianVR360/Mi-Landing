import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/logo-parque-vicuna.png';
import parqueVicunaBkg from './assets/ParqueVicuna.jpg';
import portada from './assets/parque-vicuna-proyecto.jpg';
import bkgcarousel2 from './assets/parque-vicuna-proyecto-banner.jpg';




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
    subtitles: ['Rodolfo Urra, Vendedor', ' Lunes a viernes 9:30 a 14:00 y de 15:30 a 18:30 horas ', 'Sábados: 10:00 a 14:00 y de 15:30 a 18:00 horas.', 'Asesorate para adquirir el hogar de tus sueños'],
    telefono: '+56973356563',
    footerText:" ventaslosangeles@ipuertomayor.cl",
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
          subtitle: 'Avenida Ricardo Vicuña 812',
          description: '2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios, además de un moderno equipamiento, salón gourmet, gimnasio, piscina y espacios cowork para estudiantes y reuniones.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: bkgcarousel2,
          videoUrl: "",
          title: 'EDIFICIO PARQUE VICUÑA',
          subtitle: 'PRÓXIMAMENTE',
          description: '2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios, además de un moderno equipamiento, salón gourmet, gimnasio, piscina y espacios cowork para estudiantes y reuniones.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver ubicación',
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
