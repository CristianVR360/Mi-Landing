import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/Logo-Full Color@300x.png';
import img1 from './assets/plusvalíasv2.jpg';
import img2 from './assets/img2.jpg';
import favIcon from './assets/favicon.png'
import audiovis from './assets/prodaudiovisual.jpg';
import desaweb from './assets/desarrolloweb.jpg';
import desadigi from './assets/desarollodigital.jpg';
import master from './assets/master.jpg';
import master2 from './assets/master2.jpg';
import nualart from './assets/nualart.jpg';
import puertomayor from './assets/puertom.jpg';
import hyw from './assets/hyw.jpg';
import chaignal from './assets/chaignal.jpg';
import lostordos from './assets/lostordos.jpg';
import bosquesquilentie from './assets/bosquesdequilentue.jpg';
import stafelicia from './assets/stafelicia.jpg';
import tranques from './assets/tranqueschile.jpg';
import helvetica from './assets/helvetica.jpg';
import icos from './assets/icos.jpg';
import dreams from './assets/drams.jpg';
import exposabores from './assets/exposabores.jpg';
import mink from './assets/minck.jpg';
import parcelasvillarrica from './assets/parcelasvillarrica.jpg';
import vistaquillen from './assets/vistaquillen.jpg';
import montajespadel from './assets/padelchile.jpg';
import prana from './assets/prana.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#337fef',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(25, 25, 107,0.8)',
    colorTerciario: '#337fef', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Marketing Inmobiliario Digital',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Marketing Inmobiliario Digital','Recorridos virtuales y experiencias 360', 'Contenido Audiovisual', 'Desarrollo web',],
    telefono: '+56931354518',
    message: "¡Hola! Quiero más información.",
    instagramLink: 'https://instagram.com/astra.360',
    facebookLink: 'https://facebook.com/astra360.marketing',
    footerText:'marketing@astra360.cl',
    gpsLink: 'https://maps.google.com/?q=Astra360',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(51, 127, 239, 0) 0%, rgba(51, 127, 239, 0.2) 5%, rgba(51, 127, 239, 0.4) 20%, rgba(51, 127, 239, 0.7) 50%, rgba(51, 127, 239, 0.9) 70%, rgba(51, 127, 239, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: master2,
          videoUrl: "",
          title: 'AERO VIEW 360',
          subtitle: "Tus proyectos inmobiliarios con una experiencia interactiva y envolvente",
          description: 'Transforma la experiencia de tus clientes y destaca entre la competencia con nuestro innovador servicio de Master Plan 360. Ofrece una vista interactiva y envolvente, integrando tags de georreferencia y amenities destacados del proyecto, proporcionando una comprensión clara y detallada de cada desarrollo inmobiliario.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ejemplo',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: 'TOUR VIRTUAL Y GALERÍAS 360',
          subtitle: 'Pilotos y espacios virtuales',
          description: 'Busca la mejor experiencia inmersiva para  tus clientes y destaca entre la competencia con nuestro innovador servicio de Tour Virtual. Diseñado específicamente para inmobiliarias, este servicio ofrece una vista interactiva y envolvente de tus proyectos, integrando recorridos virtuales de 360° con tags, proporcionando una comprensión clara y detallada de cada piloto.',
          buttonConfig: {
            type: 'link',
            url: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Ver ejemplo',
          },
        },
        
      ],
      

    carousel02:[
      //aqui pongo imagen del masterplan
      { 
        image: img1 , 
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Tus proyectos con una experiencia interactiva y envolvente",
        description: 'Transforma la experiencia de tus clientes y destaca entre la competencia con nuestro innovador servicio de Master Plan 360. Ofrece una vista interactiva y envolvente, integrando tags de georreferencia y puntos de interes, proporcionando una comprensión clara y detallada de cada desarrollo inmobiliario.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Nualart/PonteVedra/A%C3%A9rea/output/index.html', //
          buttonText: 'Ver Ejemplo',
        },
      },
      {
    //https://astra360.s3.sa-east-1.amazonaws.com/Nualart/PonteVedra/A%C3%A9rea/output/index.html
        image: master ,
        videoUrl: "",
        title: 'GALERÍAS 360 y STREET VIEW',
        subtitle: "Recorre digitalmente tu proyecto ",
        description: 'Busca la mejor experiencia inmersiva para  tus clientes y destaca entre la competencia con nuestro innovador servicio de Tour Virtual. Diseñado específicamente para proyectos de loteos, este servicio ofrece una vista interactiva y envolvente de tus proyectos, integrando recorridos tipo street view, proporcionando una comprensión clara y detallada de tu proyecto.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html',
          buttonText: 'Ver Ejemplo',
        },
      },
    ],
    carousel03: [
      {
        image: nualart,
        
        videoUrl: "",
        title: 'INMOBILIARIA NUALART',
        subtitle: 'Proyectos ejecutados: 2',
        description: 'AeroView + Recorridos Virtuales + Experiencias en Realidad Virtual',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://s3.sa-east-1.amazonaws.com/cristian.tv360/Nualart/Ponte-Vedra/a%C3%A9rea/output/index.html',
          buttonText: 'Ver proyecto',
        },
      },
      {
        image: puertomayor,
        videoUrl: "",
        title: 'INMOBILAIRIA PUERTO MAYOR',
        subtitle: 'Proyectos ejecutados: 6',
        description: 'Recorridos Virtuales y aeroviews para proyectos en Los Ángeles, Temuco y Pucón.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },

      {
        image: hyw,
        videoUrl: "",
        title: 'HOFFMANN & WILLER',
        subtitle: 'Proyectos ejecutados: 2',
        description: 'Master plan 360 para loteos, Website de administracion y gestión de propiedades',
        buttonConfig: {
          type: 'link',
          iframeUrl: 'https://ghw.cl',
          buttonText: 'Visitar website',
        },
        
      },

      {
        image: parcelasvillarrica,
        videoUrl: "",
        title: 'PARCELAS VILLARRICA',
        subtitle: 'Proyectos ejecutados: 2',
        description: 'Master plan 360 para loteos, Website informativo.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://masterplan360.s3.sa-east-1.amazonaws.com/parcelasvillarrica/vogelHaus/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },

      
      {
        image: chaignal,
        videoUrl: "",
        title: 'Parcelas Chaignal',
        subtitle: 'Proyectos ejecutados: 3',
        description: 'Master plan 360 para loteos, Website informativo, producción audiovisual.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://masterchaignal-production.up.railway.app/',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: lostordos,
        videoUrl: "",
        title: 'Los Tordos',
        subtitle: 'Proyectos ejecutados: 3',
        description: 'Master plan 360 para loteos, Website informativo, producción audiovisual.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://lostordosmaster360-production.up.railway.app',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: bosquesquilentie,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: 'Proyectos ejecutados: 3',
        description: 'Master plan 360 para loteos, Website informativo, producción audiovisual.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://bosquesdequilentue.cl/masterplan.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: stafelicia,
        videoUrl: "",
        title: 'Santa Felicia',
        subtitle: 'Proyectos ejecutados: 2',
        description: 'Master plan 360 para loteos, producción audiovisual.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Santa-Felicia/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: vistaquillen,
        videoUrl: "",
        title: 'Vista Quillén',
        subtitle: 'Proyectos ejecutados: 1',
        description: 'Master plan 360 para loteos',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Vista-Quillen/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: tranques,
        videoUrl: "",
        title: 'Tranques Chile',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/TranquesChile/galeria360tc/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
    
      {
        image: helvetica,
        videoUrl: "",
        title: 'Helvética',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Helvetica/Zurich/3d-2b/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: montajespadel,
        videoUrl: "",
        title: 'Montajes Padel Chile',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MontajesPadelChile/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: icos,
        videoUrl: "",
        title: 'ICOS',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ClinicaICOS/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: dreams,
        videoUrl: "",
        title: 'Dreams',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Dreams/DemoDreams/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: exposabores,
        videoUrl: "",
        title: 'Expo Sabores',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ExpoSabores2023/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: mink,
        videoUrl: "",
        title: 'Minck',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Minck/life_by_k/life_by_k/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },
      {
        image: prana,
        videoUrl: "",
        title: 'Prana',
        subtitle: 'Proyectos ejecutados: 1',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Prana/output/index.html',
          buttonText: 'Ver proyecto',
        },
        
      },







      
    ],
    
    carousel04: [
      {
        image: desaweb,
        videoUrl: "",
        title: 'DESARROLLO WEB',
        subtitle: '',
        description: 'El servicio de Desarrollo Web de Astra 360 crea sitios web efectivos para inmobiliarias, maximizando la visibilidad de propiedades y facilitando la interacción con clientes potenciales.',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
          buttonText: 'Más información',
        },
      },
      {
        image: desadigi,
        videoUrl: "",
        title: 'MARKETING DIGITAL',
        subtitle: '',
        description: 'El servicio de Marketing Digital de Astra 360 para inmobiliarias maximiza la visibilidad de tus propiedades y atrae clientes potenciales mediante estrategias digitales efectivas y personalizadas.',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
          buttonText: 'Más información',
        },
      },
      {
        image: audiovis,
        videoUrl: "",
        title: 'PRODUCCIÓN AUDIOVISUAL',
        subtitle: 'Fotografía, videos, reels.',
        description: 'Transforma la presentación de tus desarrollos inmobiliarios y destaca en el mercado con nuestro servicio integral de producción audiovisual, que incluye fotografías de alta calidad, videos, reels y contenido atractivo para redes sociales',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://www.youtube.com/embed/sbQVgKE_UYQ?si=HPBjGHwFdTHuCg64',
          buttonText: 'Ver ejemplo',
        },
      },

      
    ],

    

    
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Inmobiliarias' },
    { id: 'carousel02', texto: 'Loteos y parcelaciones' },
    { id: 'carousel04', texto: 'Servicios'},
    { id: 'carousel03', texto: 'Portafolio' },
   
    
    
  ];

  useEffect(() => {
    document.title = 'Astra 360';
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
