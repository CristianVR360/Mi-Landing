import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';


//importacion de recursos


import favIcon from './assets/favicon.png' ;


///a
import Logo from './assets/Logo.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import master from './assets/masterplan.jpg';
import pangui from './assets/pangui.jpg';
import valdi from './assets/valdivia.jpg';






const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#fbab4b',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(38, 129, 147, 0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Condominio Santa Sofía',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingSantaSof%C3%ADa/index.html',
    subtitles: ['', '', '', ""],
    telefono: '+',
    message:'Hola, quiero más información de Condominio Santa Sofía',
    instagramLink: '',
    facebookLink: '',
    footerText:'',
    gpsLink: 'https://maps.app.goo.gl/HeYDcnSqH2Vwd45X9',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(38, 129, 147, 0) 0%, rgba(38, 129, 147, 0.2) 5%, rgba(38, 129, 147, 0.4) 20%, rgba(38, 129, 147, 0.7) 50%, rgba(38, 129, 147, 0.9) 70%, rgba(38, 129, 147, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img4,
          videoUrl: "",
          title: 'Parcelas Paillaco',
          subtitle: "",
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit quis tempus sollicitudin, orci arcu tempor orci, nec suscipit ante nisi non ipsum. Vestibulum elementum lectus eget congue tincidunt.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: pangui,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit quis tempus sollicitudin, orci arcu tempor orci, nec suscipit ante nisi non ipsum. Vestibulum elementum lectus eget congue tincidunt.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/HeYDcnSqH2Vwd45X9',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img6,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit quis tempus sollicitudin, orci arcu tempor orci, nec suscipit ante nisi non ipsum. Vestibulum elementum lectus eget congue tincidunt.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ElManantial/SantaSofia/index.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img8,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit quis tempus sollicitudin, orci arcu tempor orci, nec suscipit ante nisi non ipsum. Vestibulum elementum lectus eget congue tincidunt.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56962981160?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Parcelas%20Paillaco',
            buttonText: 'Más información',
          },
        },
        {
          image: valdi, //imagen de valdivia
          videoUrl: "",
          title: 'Turismo y Naturaleza',
          subtitle: '',
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, elit quis tempus sollicitudin, orci arcu tempor orci, nec suscipit ante nisi non ipsum. Vestibulum elementum lectus eget congue tincidunt.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/9iVzO3BCcqI',
            buttonText: 'Ver video',
          },
        },
        
      ],
      

    carousel02:[
      //aqui pongo imagen del masterplan
      { 
        image: master , 
        videoUrl: "",
        title: 'Master Plan 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ElManantial/SantaSofia/index.html', //
          buttonText: 'Ver Master Plan',
        },
      },
      {
    
        image:img5 ,
        videoUrl: "",
        title: 'Master Plan 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ElManantial/SantaSofia/index.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img4, 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {

        image: img7, 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: '',
      },
      {
        image: img4,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: '',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img2,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img3,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: '',
      },
      {
        image: img4,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      
    ]
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
    { id: 'carousel03', texto: 'Galería' },
  ];

  useEffect(() => {
    document.title = 'Condominio Santa Sofía';
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
