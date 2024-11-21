import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logo from './assets/logo.png';
//import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
//import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import chefs from './assets/chefs.jpg';
import estadio from './assets/estadio.jpg';
import inicio from './assets/inicio.jpg';
import kimey from './assets/kimey.jpg';
import abuelitairma from './assets/abuelita-irma.jpg';
import aquajoyas from './assets/aquajoyas.jpg';
import araucaniamilenaria from './assets/araucaniamilenaria.jpg';
import jopas from './assets/jopas.jpg';
import bakepop from './assets/bakepop.jpg';
import bellapiel from './assets/bellapiel.jpg';
import brillantine from './assets/brillantine.jpg';
import bucle from './assets/bucle.jpg';
import cafealegra from './assets/cafealegra.jpg';
import chakra from './assets/chacra.jpg';
import chocolatekl from './assets/chocolatekl.jpg';
import claudiashome from './assets/claudiashome.jpg';
import comidaenfrasco from './assets/comidaenfrasco.jpg';
import cora from './assets/cora.jpg';
import decoranativa from './assets/decoranativa.jpg';
import deltaix from './assets/deltaix.jpg';
import dispersa from './assets/dispersa.jpg';
import ebmregalos from './assets/ebmregalos.jpg';
import ecolifesur from './assets/ecolifesur.jpg';
import elartedeosco from './assets/elartedelosco.jpg';







const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3d3e4c',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(61, 62, 76, 0.8)',
    colorTerciario: '#00b9a8',
    colorCuaternario: '#3d3e4c',
    backgroundImage: inicio,
    title: 'I Edición ',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '',
    iframeBackground: '',
    subtitles: ['I edición de Expo Chef Araucanía', 'Este 7 y 8 de Dic | 2024','100+ Expositores con artesanías y elaborados', 'Estadio German Becker | Temuco'],
    telefono: '',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: 'https://www.instagram.com/expochefaraucania?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(51, 200, 186, 0) 0%, rgba(51, 200, 186, 0.2) 5%, rgba(51, 200, 186, 0.4) 20%, rgba(51, 200, 186, 0.7) 50%, rgba(51, 200, 186, 0.9) 70%, rgba(51, 200, 186, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img2 ,
          videoUrl: "",
          title: 'Expo Chef Araucanía',
          subtitle: 'Festival Gastronómico 2024',
          description: 'Vuelve a Temuco un festival gastronómico sin igual, esta vez bajo el nombre de Expo Chef Araucanía, edición Primera. Celebrando y promoviendo la cocina de la región de la Araucanía con un enfoque en la innovación, la cultura local y la sostenibilidad. La misión de la expo es conectar a chefs, productores, emprendedores y el público general en un espacio que destaca la riqueza de ingredientes autóctonos y las prácticas culinarias tradicionales. Su objetivo es también educar e inspirar a una audiencia diversa, desde amantes de la gastronomía hasta profesionales del sector.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: estadio ,
          videoUrl: "",
          title: '¿Cuándo y dónde tendrá vida esta Expo Feria?',
          subtitle: '',
          description: 'La Expo Chef Araucanía 2024, abrirá sus puertas este 7 & 8 de diciembre en el Estadio Germán Becker, en Temuco.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: img4 ,
          videoUrl: "",
          title: '¿De qué podrás disfrutar en esta feria?',
          subtitle: 'Es la primera edición de esta Expo Chef Araucanía contará con',
          description: 'Punto sustentable | Artesanía y agro elaborados | Gastronomía tradicional & Gourmet | Concursos y sorteos | Cooking Show | Juegos Infantiles y Familiares | Master Class Invitados especiales | Cocinerías y patio de comida | Música en vivo ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: chefs ,
          videoUrl: "",
          title: 'Personalidades que asistirán',
          subtitle: '',
          description: 'Este evento contará con la entrada totalmente gratuita y contaremos con la presencia de los chef: Ale Tolosa, Alvaro Morales, Diego Bustos y Juan Quiñeman ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
       

      ],
      carousel02: [
        {
          image: aquajoyas ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: araucaniamilenaria ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: jopas ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: bellapiel ,
          videoUrl: "",
          title: 'Personalidades que asistirán',
          subtitle: '',
          description: 'Este evento contará con la entrada totalmente gratuita y contaremos con la presencia de los chef: Ale Tolosa, Alvaro Morales, Diego Bustos y Juan Quiñeman ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: brillantine ,
          videoUrl: "",
          title: 'Personalidades que asistirán',
          subtitle: '',
          description: 'Este evento contará con la entrada totalmente gratuita y contaremos con la presencia de los chef: Ale Tolosa, Alvaro Morales, Diego Bustos y Juan Quiñeman ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: bucle ,
          videoUrl: "",
          title: 'Personalidades que asistirán',
          subtitle: '',
          description: 'Este evento contará con la entrada totalmente gratuita y contaremos con la presencia de los chef: Ale Tolosa, Alvaro Morales, Diego Bustos y Juan Quiñeman ',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/nkmHJitwTpWVZggk9',
            buttonText: 'Cómo llegar',
          },
        },
        {
          image: claudiashome ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: cora ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: decoranativa ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: dispersa ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: ebmregalos ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: ecolifesur ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: elartedeosco ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
       

      ],
      carousel03: [
        {
          image: kimey ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: abuelitairma ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram ',
          },
        },
        {
          image: bakepop ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram ',
          },
        },
        {
          image: cafealegra ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram ',
          },
        },
        {
          image: chakra ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram ',
          },
        },
        {
          image: chocolatekl ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: comidaenfrasco ,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
       

      ],
      carousel04: [
        {
          image: deltaix ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        {
          image: deltaix ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram ',
          },
        },
        {
          image: deltaix ,
          videoUrl: "",
          title: '  ',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Instagram',
          },
        },
        
       

      ],
      
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Expo Chef Araucanía' },
    { id: 'carousel02', texto: 'Artesanos' },
    { id: 'carousel03', texto: 'Agro elaborados' },
    { id: 'carousel04', texto: 'Foodtrucks' },
    { id: 'carousel05', texto: 'Cervecerías artesanales' },
    { id: 'carousel06', texto: 'Auspicio y patrocinio' },
    
    

 
    
  ];

  useEffect(() => {
    document.title = 'Expo Chef Araucanía 2024';
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
