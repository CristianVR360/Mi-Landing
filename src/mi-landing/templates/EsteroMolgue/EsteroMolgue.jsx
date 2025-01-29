import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logoblanco from './assets/logoblanco.png';
import img1 from './assets/img1.jpg';
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
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';
import img26 from './assets/img26.jpg';
import riobueno from './assets/riobueno.jpg';
import lagoranco from './assets/lagoranco.jpg';
import financiamiento from './assets/financiamiento.jpg';
import master from './assets/master.jpg';



;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(30, 30, 30, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: 'Tu Refugio en la Naturaleza del Sur de Chile',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingEsteroMolgue/index.html',
    subtitles: ['Tu nuevo hogar en el sur de Chile', ],
    telefono: '',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://goo.gl/maps/gki6rf3MVxwWLwA37',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(252, 228, 126, 0) 0%, rgba(252, 228, 126, 0.2) 5%, rgba(252, 228, 126, 0.4) 20%, rgba(252, 228, 126, 0.7) 50%, rgba(252, 228, 126, 0.9) 70%, rgba(252, 228, 126, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img4 ,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Este exclusivo proyecto está diseñado para quienes buscan escapar del ruido de la ciudad y conectarse con la naturaleza en su estado más puro. Las parcelas, ubicadas en un entorno de paisajes prístinos, son ideales para actividades como la pesca con mosca y para quienes desean vivir rodeados de tranquilidad y belleza natural.',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: riobueno ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Ubicado en la región de Los Ríos, entre los afluentes del río Bueno y los esteros Molgue y Traiguén, el proyecto cuenta con una ubicación estratégica. A solo 3 kilómetros de un aeródromo local, permite llegar desde la capital en minutos. Además, los aeropuertos de Osorno y Valdivia se encuentran a una cómoda distancia, garantizando fácil acceso desde cualquier parte del país o del mundo.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://goo.gl/maps/gki6rf3MVxwWLwA37',
            buttonText: 'Ver Mapa',
          },
        },
        {
          image: lagoranco ,
          videoUrl: "",
          title: 'Turismo y Naturaleza',
          subtitle: '',
          description: 'Rodeado de paisajes naturales y sin intervención humana, este lugar es un paraíso para los amantes de la pesca con mosca y de la vida al aire libre. La tranquilidad, la exclusividad y la conexión con la naturaleza hacen de este destino el refugio perfecto para quienes buscan calidad de vida y un entorno único en el sur de Chile.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: financiamiento ,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: '',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Obtener mas información',
          },
        },
       

      ],

      carousel02: [
        {
          image: master ,
          videoUrl: "",
          title: 'MasterPlan',
          subtitle: '',
          description: 'Revisa disponibilidad y explora de manera inmersiva nuestro poryecto',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/AlbaAustral/EsteroMolgue/output/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        

      ],

      carousel03: [
        {
          image: img5,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img6,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img7,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img8,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img9,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img10,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img11,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img2,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img13,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img14,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img15,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img16,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img17,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img18,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img19,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img20,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img21,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img22,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img23,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img24,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },
        {
          image: img3,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img12,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img25,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img26,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'MasterPlan 360' },
    { id: 'carousel03', texto: 'Galería' },
 
    
  ];

  useEffect(() => {
    document.title = 'Estero Molgue';
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
