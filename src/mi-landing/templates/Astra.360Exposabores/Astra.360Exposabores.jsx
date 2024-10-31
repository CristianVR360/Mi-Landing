import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import img1 from './assets/plusvalíasv2.jpg';
//import img2 from './assets/img2.jpg';
import favIcon from './assets/favicon.png'
import audiovis from './assets/prodaudiovisual.jpg';
import desaweb from './assets/desarrolloweb.jpg';
import desadigi from './assets/desarollodigital.jpg';
//import master from './assets/master.jpg';
//import master2 from './assets/master2.jpg';
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
import portada from './assets/portada.jpg';
import loteo from './assets/loteo.jpg';
import tv from './assets/tv.jpg';
import stasofia from './assets/sta-sofia.jpg';
import paillaco from './assets/paillaco.jpg';

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#337fef',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(25, 25, 107,0.8)',
    colorTerciario: '#337fef', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: 'Marketing Inmobiliario Digital',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Convertimos tus propiedades en oportunidades con marketing efectivo.','Tecnología y creatividad en desarrollo web, Masterplan 360 y tours virtuales.', 'Contenido audiovisual que destaca cada propiedad.', 'Gestionamos redes sociales para maximizar tu alcance.', 'Potenciamos tus proyectos para ventas rápidas y exitosas.'],
    telefono: '+56931354518',
    message: "¡Hola! Quiero más información.",
    instagramLink: 'https://instagram.com/astra.360',
    facebookLink: 'https://facebook.com/astra360.marketing',
    footerText:'📧marketing@astra360.cl',
    //gpsLink: 'https://maps.google.com/?q=Astra360',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(51, 127, 239, 0) 0%, rgba(51, 127, 239, 0.2) 5%, rgba(51, 127, 239, 0.4) 20%, rgba(51, 127, 239, 0.7) 50%, rgba(51, 127, 239, 0.9) 70%, rgba(51, 127, 239, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        
        {
          image: tv,
          videoUrl: "",
          title: 'Tour Virtual',
          subtitle: "¡Vive la experiencia de recorrer tu próxima propiedad sin salir de casa!",
          description: 'Con nuestro Tour Virtual, explora cada detalle como si estuvieras ahí, con una vista completa de cada espacio. ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Cataluña/Casa+Piloto/output/index.html',
            buttonText: '¡PRUÉBALO AQUÍ!',
          },
        },
        { 
          image: loteo , 
          videoUrl: "",
          title: 'MASTER PLAN 360',
          subtitle: "¡Descubre el futuro de tus proyectos inmobiliarios con nuestro Masterplan 360! ",
          description: 'Explora cada espacio, visualiza áreas comunes y proyecta el potencial completo de tu propiedad con una experiencia inmersiva y realista',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/MasterPlan/Guillermo+Valenzuela/Chaignal/output/index.html', //
            buttonText: '¡PRUÉBALO AQUÍ!',
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
      {
        image: stasofia,
        videoUrl: "",
        title: 'Condominio Santa Sofía',
        subtitle: 'Proyectos ejecutados: 2',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://condominiosantasofia.cl',
          buttonText: 'Ver proyecto',
        }, 
      },
      {
        image: paillaco,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: 'Proyectos ejecutados: 2',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html',
          buttonText: 'Ver proyecto',
        }, 
      },







      
    ],
    
    carousel04: [
      {
        image: img1,
        videoUrl: "",
        title: 'Tour Virtual',
        subtitle: "¡Vive la experiencia de recorrer tu próxima propiedad sin salir de casa!",
        description: 'Un Tour Virtual convierte la experiencia de venta en algo inmersivo y accesible, permitiendo a los compradores explorar cada detalle del inmueble desde cualquier lugar. Esta herramienta facilita decisiones rápidas, ya que los interesados pueden visualizar la distribución, acabados y entorno con gran realismo, generando confianza y compromiso. ',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Cataluña/Casa+Piloto/output/index.html',
          buttonText: '¡PRUÉBALO AQUÍ!',
        },
      },
      {
        image: desaweb,
        videoUrl: "",
        title: 'DESARROLLO WEB',
        subtitle: '',
        description: 'Creamos un portal de ventas atractivo y funcional, optimizado para captar la atención de tus clientes. Con un sitio bien diseñado, los usuarios pueden explorar propiedades, consultar información clave y agendar visitas de manera rápida y sencilla. Esta plataforma facilita una experiencia de navegación intuitiva, elevando la confianza en la marca y generando más oportunidades de venta efectiva',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/+56931354518?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
          buttonText: 'Más información',
        },
      },
      {
        image: desadigi,
        videoUrl: "",
        title: 'REDES SOCIALES',
        subtitle: '',
        description: 'Un servicio profesional de manejo de redes sociales aumenta la visibilidad de tus propiedades al llegar directamente al público objetivo. Con estrategias de contenido optimizadas, generamos interés y confianza en clientes potenciales a través de publicaciones atractivas y anuncios dirigidos. Este enfoque constante y efectivo impulsa el tráfico a tus inmuebles y facilita la interacción directa, acelerando el proceso de ventas y destacando tu marca en el mercado ',
        buttonConfig: {
          type: 'link',
          url: 'https://wa.me/+56931354518?text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n.',
          buttonText: 'Más información',
        },
      },
      {
        image: audiovis,
        videoUrl: "",
        title: 'PRODUCCIÓN AUDIOVISUAL',
        subtitle: 'Fotografía, videos, reels.',
        description: 'destaca cada propiedad con imágenes y videos de alta calidad, capturando los detalles que más atraen a los compradores. Al presentar recorridos visuales y vistas impactantes, creamos una conexión emocional inmediata que potencia el interés del cliente. Este contenido inmersivo y auténtico eleva la percepción de valor, facilita la toma de decisiones y ayuda a convertir visitas en ventas efectivas.',
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
    { id: 'carousel01', texto: 'Experiencia 360°' },

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
