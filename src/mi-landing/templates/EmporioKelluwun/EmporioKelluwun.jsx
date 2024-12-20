import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
//import logo from './assets/logo.png';
import inicio from './assets/inicio.jpg';
import inicio2 from './assets/inicio2.jpg';
import subdivi from './assets/subdivisiones.jpg';
import logoblanco from './assets/logoblanco.png';
import imgrelieve from './assets/imgrelieve.jpg';
import limites from './assets/limites.jpg';
import subdivi1 from './assets/subdivi1.jpg';
import subdivi2 from './assets/subdivi2.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#646d4e',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(123, 89, 80, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: inicio,
    title: 'manufactura local hecha a velocidad humana con cariño y diseño único.',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Conexión con productos únicos y sostenibles.', 'Impulso a la comercialización y alcance de emprendedores.','Cerámicas, artesanías, textiles y decoración de plantas.', ],
    telefono: '',
    message:'',
    footerText:"Local 31, La Playita, Nueva Imperial",
    instagramLink: 'https://www.instagram.com/emporio.kelluwun/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/21TYA9hN68ohgETR6',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(100, 109, 78, 0) 0%, rgba(100, 109, 78, 0.2) 5%, rgba(100, 109, 78, 0.4) 20%, rgba(100, 109, 78, 0.7) 50%, rgba(100, 109, 78, 0.9) 70%, rgba(100, 109, 78, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: imgrelieve ,
          videoUrl: "",
          title: 'Quienes Somos',
          subtitle: '',
          description: 'Somos un Emporio colaborativo que celebra el talento y el esfuerzo detrás de cada producto hecho a mano. Inspirados en la palabra mapuche que significa "beneficio mutuo", buscamos potenciar el trabajo artesanal y conectar a nuestros clientes con productos únicos y sostenibles. Contamos con la participación de 13 colaboradores especializados en cerámicas, artesanías, ecoelaborados, textiles, decoración de plantas, y más.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: '',
          },
        },
        {
          image: limites ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: 'Nos encontramos en el Centro Comercial La Playita, local #32, en Nueva Imperial, donde ofrecemos un espacio cultural y de intercambio. Además, estamos desarrollando una plataforma de eCommerce para acercarte a nuestras creaciones desde cualquier lugar. Creemos en el poder del trabajo comunitario y la promoción de valores culturales, por eso nuestro lema es: "Hecho a mano, con corazón".',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: 'Una atractiva vitrina de productos únicos, hechos a mano por emprendedores locales y un stock que varía todo el año debido a la exclusividad de los diseños y la creatividad constante de sus artistas y cocineros.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: 'Asesoramiento personalizado en cada compra, con empaques sustentables y diferenciadores, ideales para encontrar un regalo con sentido.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: 'La organización trimestral de exposiciones en la plaza de Nueva Imperial, que buscan dar mayor alcance y comercialización a nuestros colaboradores y acercarnos a más clientes.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: inicio2 ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: 'Una escuela de artes y oficios para mostrar vivencialmente la relevancia de la manufactura y las tradiciones culturales a nuestros seguidores y clientes.',
          
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
          title: 'Lewfu kudaw',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
          
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: 'Lawen boroa',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Ayun kal',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Llankatu Mapu',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },

      ],

      

      carousel03: [
        {
          image: subdivi1 ,
          videoUrl: "",
          title: 'Tante Trini',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
          
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: 'Galleteria nitsune',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Colmenares Treumun',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Diosa Matera',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'EnraízaTE',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Vinagres doña Josefa',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Viña Trayenko',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },

      ],
      

      carousel04: [
        {
          image: subdivi1 ,
          videoUrl: "",
          title: 'Innova colores',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
          
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: 'Confecciones Sopi',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Kankura nativa',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        {
          image: subdivi ,
          videoUrl: "",
          title: 'Llankatu',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        

      ],
      carousel05: [
        {
          image: subdivi1 ,
          videoUrl: "",
          title: 'Nativa Decoplantas',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
          
        },
        {
          image: subdivi2 ,
          videoUrl: "",
          title: 'Ayunkal',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            iframeUrl: '',
            buttonText: 'Quiero más información',
          },
        },
        
        

      ],
      
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Quienes somos' },
    { id: 'carousel02', texto: 'Artesanías' },
    { id: 'carousel03', texto: 'Agroelaborados' },
    { id: 'carousel04', texto: 'Textil y bisuterías' },
    { id: 'carousel05', texto: 'Decoración y plantas' },
 
    
  ];

  useEffect(() => {
    document.title = 'Emporio Kelluwün';
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
