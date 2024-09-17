import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
import img18 from './assets/img18.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 28, 99, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Servicio Técnico Informático',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['Servicio Técnico Informático a domicilio en Temuco.', 'Soporte vía remota a todo Chile.' ],
    telefono: '+56957322901',
    message:'Necesito más información',
    footerText:"contacto@tecnoaraucania.cl",
    instagramLink: 'http://www.instagram.com/tecnoaraucania_temuco',
    facebookLink: 'http://www.facebook.com/tecnoaraucania.tco',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(1, 105, 155, 0) 0%, rgba(1, 105, 155, 0.2) 5%, rgba(1, 105, 155, 0.4) 20%, rgba(1, 105, 155, 0.7) 50%, rgba(1, 105, 155, 0.9) 70%, rgba(1, 105, 155, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img3 ,
          videoUrl: "",
          title: 'Quienes Somos',
          subtitle: '',
          description: 'En TecnoAraucanía, nos especializamos en ofrecer soluciones informáticas desde 2012. Brindamos servicio técnico de computadores a domicilio en Temuco y asistencia remota a nivel nacional. Nos enfocamos en la reparación y optimización de equipos, asegurando su máximo rendimiento y eficiencia. Nuestro compromiso es una atención rápida, personalizada y de alta calidad, tanto para particulares como empresas. Estamos aquí para mantener tus equipos funcionando de manera óptima con soluciones a medida de tus necesidades tecnológicas. ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img18 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
       
       

      ],

      carousel02: [
        {
          image: img4 ,
          videoUrl: "",
          title: 'Reparación de hardware',
          subtitle: '',
          description: 'Diagnóstico y reparación de problemas de hardware, incluyendo sustitución o reparación de componentes dañados como discos duros, tarjetas gráficas, fuentes de alimentación y más.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img2 ,
          videoUrl: "",
          title: 'Limpieza y mantenimiento',
          subtitle: '',
          description: 'Servicios de limpieza interna y externa de computadoras y portátiles para eliminar el polvo y la suciedad que pueden causar problemas de rendimiento y sobrecalentamiento.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img5 ,
          videoUrl: "",
          title: 'Optimización del rendimiento',
          subtitle: '',
          description: 'Aceleración de computadoras mediante la eliminación de programas no deseados, optimización de software y actualización de hardware, como la instalación de unidades de estado sólido (SSD) para mejorar la velocidad.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img6 ,
          videoUrl: "",
          title: 'Instalación de software',
          subtitle: '',
          description: 'Instalación, configuración y actualización de sistemas operativos, aplicaciones y software de seguridad.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img7 ,
          videoUrl: "",
          title: 'Resolución de problemas de software',
          subtitle: '',
          description: 'Diagnóstico y reparación de problemas de software, incluyendo errores de sistema operativo, malware, virus y problemas de rendimiento.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img8 ,
          videoUrl: "",
          title: 'Recuperación de datos',
          subtitle: '',
          description: 'Servicios de recuperación de datos en caso de pérdida de datos debido a fallos de hardware, eliminación accidental o corrupción de archivos.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img9 ,
          videoUrl: "",
          title: 'Actualización de hardware',
          subtitle: '',
          description: 'Actualización de componentes de hardware, como RAM, tarjetas gráficas y procesadores, para mejorar el rendimiento de las computadoras.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img10 ,
          videoUrl: "",
          title: 'Configuración de redes',
          subtitle: '',
          description: 'Configuración de redes domésticas o empresariales, incluyendo la instalación de routers, configuración de conexiones Wi-Fi y resolución de problemas de red.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img11 ,
          videoUrl: "",
          title: 'Servicios de copia de seguridad',
          subtitle: '',
          description: 'Configuración de soluciones de copia de seguridad automatizadas para proteger los datos importantes de los clientes.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img12 ,
          videoUrl: "",
          title: 'Asistencia remota',
          subtitle: '',
          description: 'Ofrecer soporte técnico remoto para resolver problemas de software y configuración de forma rápida y eficiente.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img13 ,
          videoUrl: "",
          title: 'Venta de hardware y accesorios',
          subtitle: '',
          description: 'Vender componentes de hardware, computadoras, laptops y accesorios como teclados, ratones y monitores.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img14 ,
          videoUrl: "",
          title: 'Reciclaje de equipos obsoletos',
          subtitle: '',
          description: 'Ofrecer servicios de reciclaje o eliminación segura de equipos electrónicos obsoletos de acuerdo con las regulaciones ambientales locales.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img15 ,
          videoUrl: "",
          title: 'Servicios de seguridad cibernética',
          subtitle: '',
          description: 'Proporcionar servicios de seguridad para proteger las computadoras y redes de clientes contra amenazas cibernéticas, como malware y phishing.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
        {
          image: img16 ,
          videoUrl: "",
          title: 'Consultoría y asesoramiento',
          subtitle: '',
          description: 'Ofrecer asesoramiento a los clientes sobre cómo mejorar la seguridad, eficiencia y productividad de sus sistemas informáticos.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Más información'
          },
        },
        {
          image: img17 ,
          videoUrl: "",
          title: 'Capacitación y tutoriales',
          subtitle: '',
          description: 'Brindar capacitación básica o avanzada a los clientes sobre el uso de software y hardware específicos.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56957322901?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
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
    document.title = 'TecnoAraucanía Temuco';
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
