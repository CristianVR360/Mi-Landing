import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
//import portada from './assets/portada.jpg';
//import img1 from './assets/img1.jpg';
//import img2 from './assets/img2.jpg';
//import img3 from './assets/img3.jpg';
//import img4 from './assets/img4.jpg';
//import img5 from './assets/img5.jpg';
//import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
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
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
import inicio1 from './assets/inicio1.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';
import img26 from './assets/img26.jpg';
import img27 from './assets/img27.jpg';
import img28 from './assets/img28.jpg';
import img29 from './assets/img29.jpg';
import img30 from './assets/img30.jpg';
import img31 from './assets/img31.jpg';
import img32 from './assets/img32.jpg';
import img33 from './assets/img33.jpg';
import img34 from './assets/img34.jpg';
import serv1 from './assets/serv1.jpg';
import serv2 from './assets/serv2.jpg';
import serv3 from './assets/serv3.jpg';





;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#5b5d62',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(13, 145, 230, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: inicio1,
    title: 'Desamaduria repuestos nuevos y usados',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['¡Contáctanos y recibe una oferta hoy mismo!', ],
    telefono: '+56974777149',
    message:'Necesito más información',
    footerText:"repuestosflorestemuco@gmail.com",
    instagramLink: 'https://www.instagram.com/impactodesarmaduria/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://www.google.com/maps/place/Orella+0815/data=!4m7!3m6!1s0x9614d3c9688a864b:0x357d5f71849fc593!8m2!3d-38.7264808!4d-72.5745372!16s%2Fg%2F11jt0rg18n!19sChIJS4aKaMnTFJYRk8WfhHFffTU?authuser=0&hl=es&rclk=1',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(35, 81, 158, 0) 0%, rgba(35, 81, 158, 0.2) 5%, rgba(35, 81, 158, 0.4) 20%, rgba(35, 81, 158, 0.7) 50%, rgba(35, 81, 158, 0.9) 70%, rgba(35, 81, 158, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: serv1 ,
          videoUrl: "",
          title: 'Compra de vehículos chocados y en mal estado.',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: serv2 ,
          videoUrl: "",
          title: 'Venta de repuestos.',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: serv3 ,
          videoUrl: "",
          title: 'Desarme de vehículos.',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
    
       

      ],

      carousel02: [
        {
          image: img7 ,
          videoUrl: "",
          title: 'Ford Ranger 2015 3.2 4x4',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        
        {
          image: img9 ,
          videoUrl: "",
          title: 'Peugeot 308 1.6 HDI 2015',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img10 ,
          videoUrl: "",
          title: 'Suzuki Swift sport 2015 1.6 M16A.',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img11 ,
          videoUrl: "",
          title: 'Silverado 2001 V8 5.3 4x2',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img12 ,
          videoUrl: "",
          title: 'Motor Peugeot 308 allure 1.6 HDI 2015',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img13 ,
          videoUrl: "",
          title: 'Nissan Sentra 2018 1.8 Mecanico',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },{
          image: img14 ,
          videoUrl: "",
          title: 'Motor Ford Ranger 3.2 2015 ',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img15 ,
          videoUrl: "",
          title: 'Volkswagen Voyage 2018',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img16 ,
          videoUrl: "",
          title: 'l-200 2018 4x2 2.4',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img17 ,
          videoUrl: "",
          title: 'DPF RANGER 3.2 y 2.2',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img18 ,
          videoUrl: "",
          title: 'Juego llantas Cheroke 2011 3.6 aro 18',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img19 ,
          videoUrl: "",
          title: 'Motor Nissan xtrail 2017 2.5.',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },

        },
        {
          image: img20 ,
          videoUrl: "",
          title: 'Juego llantas aro 24 apernadura 6x135',
          subtitle: 'Desarme',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
          

        },
        {
          image: img21,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img22,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img23,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img24,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img25,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img26,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img27,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img28,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img29,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img30,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img31,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img32,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img33,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        {
          image: img34,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56974777149?text=Necesito%20m%C3%A1s%20informaci%C3%B3n',
            buttonText: 'Consultar',
          },
        },
        

      ],

    
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Servicios' },
    { id: 'carousel02', texto: 'Galería' },
  
 
    
  ];

  useEffect(() => {
    document.title = 'Desarmaduría Impacto';
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
