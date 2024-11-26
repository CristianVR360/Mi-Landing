import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png'
import portada from './assets/portada.jpg';
import quienes from './assets/quienessomos.jpg';
import quienes2 from './assets/quienes2.jpg';
import calidad from './assets/calidad-y-frescura.jpg';
import comunidad from './assets/comunidad.jpg';
import sostenibilidad from './assets/sostenibilidad.jpg';
import salud from './assets/salud.jpg';
import conexion from './assets/conexion-emocional.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#000dd2',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(5, 13, 76,0.8)',
    colorTerciario: '#1d3fce', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡More information!',
    iframeBackground: '',
    subtitles: ['From the south of Chile to every table around the world', 'We work hand in hand with local farmers to ensure sustainable and high-quality frozen fruits.', `Chilean quality and freshness guaranteed, bringing nature's best to your table.`],
    telefono: '+56994333501',
    message: "Hi! I want more information.",
    instagramLink: '',
    facebookLink: '',
    footerText:'contact@iceberggreen.com',
    gpsLink: 'https://maps.app.goo.gl/RW329mENcnR2HKJJ9',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(7, 31, 81, 0) 0%, rgba(7, 31, 81, 0.2) 5%, rgba(7, 31, 81, 0.4) 20%, rgba(7, 31, 81, 0.7) 50%, rgba(7, 31, 81, 0.9) 70%, rgba(7, 31, 81, 1) 100%)",

      textColor: '#fff'
    },




    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: quienes,
          videoUrl: "",
          title: 'Who we are',
          subtitle: "",
          description: 'At Iceberg Green, we export high-quality frozen fruits (IQF), harvested from the fertile fields of southern Chile using sustainable farming practices. We work hand in hand with local farmers, utilizing advanced technology to ensure freshness, flavor, and nutritional value. ',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
          image: quienes2,
          videoUrl: "",
          title: 'Who we are',
          subtitle: "",
          description: 'Our commitment is to bring the best of Chilean fruits to the world, promoting sustainability, supporting farming communities, and contributing to the well-being of our consumers.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
       
        
      ],

      carousel02: [
        {
          image: calidad,
          videoUrl: "",
          title: 'Focus on Quality and Freshness',
          subtitle: "",
          description: 'Every product we export is carefully selected and processed with state-of-the-art technology. This ensures maximum freshness and quality, preserving nutrients and natural flavors. From southern Chile, we bring healthy and nutritious products to the world that reflect our passion for excellence.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
        {
          image: comunidad,
          videoUrl: "",
          title: 'We Strive to Build Community',
          subtitle: "",
          description: 'At Iceberg Green, we believe in the power of collaboration. We work hand in hand with local farmers and industry professionals to build a strong community. Through responsible practices, we create value and foster growth for all members, promoting collective and sustainable development.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
          
        },
        {
          image: sostenibilidad,
          videoUrl: "",
          title: 'Commitment to Sustainability',
          subtitle: "",
          description: 'We take pride in working in harmony with the environment, adopting sustainable agricultural practices that protect our fields and preserve biodiversity. This commitment is reflected in every one of our products, aiming for a greener, more responsible, and conscious future.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'More information',
          },
          
        },
        {
          image: salud,
          videoUrl: "",
          title: `Committed to Everyone's Health`,
          subtitle: "",
          description: 'We know that good nutrition is key to a healthy life. The berries we offer are a rich source of antioxidants, vitamins, and essential minerals such as vitamin C and potassium. These superfoods help strengthen the immune system, improve cardiovascular health, and promote healthy skin.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'More information',
          },
          
        },

        {
          image: conexion,
          videoUrl: "",
          title: 'We Believe in Emotional Connection',
          subtitle: "",
          description: 'More than just products, we bring emotions to the table. We value the power of connection that food creates, from the fields to the kitchen. Every fruit we offer represents unique moments that bring people together, creating memories and experiences that last a lifetime.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56994333501?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'More information',
          },
          
        },
       
        
      ],
      


    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Home' },
    { id: 'carousel01', texto: 'Who we are' },
    { id: 'carousel02', texto: 'Our Vision' },

   
    
    
  ];

  useEffect(() => {
    document.title = 'Iceberg Green';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = favIcon ;

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
