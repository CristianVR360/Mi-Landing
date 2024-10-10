import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import quienes from './assets/quienes-somos.jpg';




const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#006fce',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(3, 49, 42, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Hyper Technology Vilcún',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['Servicio Técnico Informático en Vilcún.', 'Venta de accesorios para celulares y computadores' ],
    telefono: '+56935099213',
    message:'Necesito más información',
    footerText:"Arturo Prat 669, Vilcún",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(50, 183, 116, 0) 0%, rgba(50, 183, 116, 0.2) 5%, rgba(50, 183, 116, 0.4) 20%, rgba(50, 183, 116, 0.7) 50%, rgba(50, 183, 116, 0.9) 70%, rgba(50, 183, 116, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: quienes ,
          videoUrl: "",
          title: 'Quienes Somos',
          subtitle: '',
          description: 'En HT Vilcún, nos especializamos en brindar soluciones de servicio técnico de la más alta calidad para dispositivos móviles y computadoras. Con una sólida experiencia en el mercado, ofrecemos reparación y mantenimiento para las principales marcas de teléfonos celulares, incluyendo Samsung, Xiaomi, Huawei y Motorola, asegurando que cada equipo vuelva a su óptimo funcionamiento. Además, contamos con servicios técnicos especializados para computadores, formateos, instalción de programas, servicio técnico y más. Nuestro compromiso es ofrecer un servicio confiable, rápido y eficiente, siempre con el objetivo de la solución tennologica en Vilcún.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56935099213?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: inicio ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56935099213?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
       
       

      ],

      carousel02: [
        {
          image: img2 ,
          videoUrl: "",
          title: 'Servicio Técnico de Celulares y Computadoras',
          subtitle: 'Reparación y mantenimiento especializado para mantener tus dispositivos en perfecto estado, con soluciones rápidas y eficientes.',
          description: 'En Hyper Technology Vilcún ofrecemos un servicio técnico especializado para celulares y computadores, asegurando la reparación y el mantenimiento de tus dispositivos con la mayor precisión y calidad. Nuestro equipo de técnicos capacitados está listo para resolver problemas de software, hardware y cualquier necesidad de reparación, garantizando un funcionamiento óptimo de tus dispositivos.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56935099213?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img3 ,
          videoUrl: "",
          title: 'Venta de Accesorios y Equipos Refaccionados',
          subtitle: 'Amplia selección de accesorios para mejorar tu experiencia y dispositivos reacondicionados de calidad a precios accesibles.',
          description: 'Además, contamos con una amplia variedad de accesorios para teléfonos y computadoras, como cargadores, fundas, cables, audífonos, y mucho más. También ofrecemos equipos refaccionados, cuidadosamente revisados y garantizados, que combinan calidad y un precio accesible para quienes buscan una solución confiable y económica. ¡En Hyper Technology Vilcún, cuidamos tu tecnología y potenciamos tu experiencia digital!',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56935099213?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
      

      ],

      
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Quienes Somos' },
    { id: 'carousel02', texto: 'Servicios' },
 
 
    
  ];

  useEffect(() => {
    document.title = 'HT vilcún';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = FavIcon;

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
