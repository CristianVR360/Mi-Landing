import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
//import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import inicio2 from './assets/inicio2.jpg';
import subdivi from './assets/subdivisiones.jpg';
import juri from './assets/juri.jpg';
import logoblanco from './assets/logoblanco.png';
import imgrelieve from './assets/imgrelieve.jpg';
import limites from './assets/limites.jpg';
import subdivi1 from './assets/subdivi1.jpg';
import subdivi2 from './assets/subdivi2.jpg';
import aseso from './assets/judi2.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(255, 125, 0, 0.8)',
    colorTerciario: '#1a1819',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'Servicios de Topografía',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Precisión en cada punto.', 'Mediciones exactas, resultados seguros.','Datos precisos para decisiones acertadas.', ],
    telefono: '+56944237234',
    message:'Necesito más información sobre el proyecto',
    footerText:"alejandrogebertf@gmail.com",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: '',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(236, 139, 45, 0) 0%, rgba(236, 139, 45, 0.2) 5%, rgba(236, 139, 45, 0.4) 20%, rgba(236, 139, 45, 0.7) 50%, rgba(236, 139, 45, 0.9) 70%, rgba(236, 139, 45, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: imgrelieve ,
          videoUrl: "",
          title: 'Elevación y Relieve Preciso',
          subtitle: 'Mide el terreno con exactitud milimétrica',
          description: 'En Geopunto, utilizamos tecnología avanzada para la determinación precisa de elevaciones y la configuración del relieve. Nuestro equipo de expertos en topografía garantiza la obtención de datos detallados para un diseño seguro y eficiente de proyectos de construcción, carreteras y sistemas de drenaje.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: limites ,
          videoUrl: "",
          title: 'Límites y Puntos de Referencia Seguros',
          subtitle: 'Delimitamos tu terreno con precisión legal',
          description: 'La correcta identificación de límites y puntos de referencia es crucial para el éxito de cualquier proyecto. En Geopunto, nuestros topógrafos se encargan de registrar cada detalle, asegurando que tus construcciones cumplan con las normativas y se ajusten a los límites establecidos.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: 'Mapas y Planos Detallados',
          subtitle: 'Visualiza tu proyecto antes de construir',
          description: 'Con Geopunto, obtén mapas y planos topográficos en 2D y 3D, diseñados para facilitar la planificación de tu proyecto. Nuestro equipo transforma los datos de campo en representaciones gráficas claras y detalladas, optimizando la ejecución de tu obra desde el primer día.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
       

      ],

      carousel02: [
        {
          image: subdivi1 ,
          videoUrl: "",
          title: 'Subdivisión de Terrenos en Chile',
          subtitle: 'Dividimos tu terreno de manera eficiente y legal',
          description: 'En Geopunto, somos expertos en la subdivisión de terrenos de acuerdo con la normativa chilena vigente. Nos encargamos de todo el proceso, desde la medición precisa hasta la presentación de los planos, garantizando una subdivisión rápida y sin complicaciones legales.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: 'Asesoría Técnica en Parcelaciones',
          subtitle: 'Convertimos tu terreno en un proyecto rentable',
          description: 'Nuestro equipo en Geopunto te asesora en cada etapa del proceso de parcelación, asegurando que tu terreno cumpla con todos los requisitos legales y técnicos. Desde la planificación hasta la gestión de permisos, maximizamos el valor de tu propiedad.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Parcelaciones con Planificación Integral',
          subtitle: 'Diseños personalizados para tus proyectos',
          description: 'En Geopunto, no solo subdividimos terrenos, los transformamos en oportunidades de desarrollo. Creamos planes a medida, adaptados a las necesidades del cliente, optimizando el espacio y garantizando el cumplimiento de las normativas urbanísticas.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },

      ],

      carousel03: [
        {
          image: aseso ,
          videoUrl: "",
          title: 'Asesoría Jurídica Integral para Parcelaciones',
          subtitle: 'Todo en regla para tu subdivisión de terrenos',
          description: 'En Geopunto, ofrecemos un completo servicio de asesoría jurídica, garantizando que tu proyecto de parcelación cumpla con todas las normativas chilenas. Nos encargamos de la revisión de documentos, obtención de permisos y la correcta inscripción en el Conservador de Bienes Raíces, asegurando que tu subdivisión esté legalmente protegida.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: juri ,
          videoUrl: "",
          title: 'Asesoría Jurídica Integral para Parcelaciones',
          subtitle: 'Todo en regla para tu subdivisión de terrenos',
          description: 'En Geopunto, ofrecemos un completo servicio de asesoría jurídica, garantizando que tu proyecto de parcelación cumpla con todas las normativas chilenas. Nos encargamos de la revisión de documentos, obtención de permisos y la correcta inscripción en el Conservador de Bienes Raíces, asegurando que tu subdivisión esté legalmente protegida.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver Proyecto',
          },
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Levantamientos Topográficos' },
    { id: 'carousel02', texto: 'Subdivisiones' },
    { id: 'carousel03', texto: 'Asesorías Juridicas' },
 
    
  ];

  useEffect(() => {
    document.title = 'GeoPunto';
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
