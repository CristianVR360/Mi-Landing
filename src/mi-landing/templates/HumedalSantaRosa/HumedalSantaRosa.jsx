import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
//import logo from './assets/logo.png';
import favIcon from './assets/favicon.png';
import vidbkg from './assets/Baclground Landing Santa Rosa.mp4';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import masterplan from './assets/masterplan.jpg';
import masterplan2 from './assets/masterplan2.jpg';




//https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingParcelasVillarrica//index.html     BACKGROUND

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: "" , // Agrega la ruta de tu logo aquí
    colorPrimario: '#138ae5',
    videoBkgHero: vidbkg,
    colorSecundario:'#fff',
    colorPrimarioTransparente: 'rgba(0, 126, 92, 0.8)',
    colorTerciario: '#f08013',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Humedal Santa Rosa',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Parcelas de 5000 m², a solo 15 minutos de Temuco.', 'Vive en un entorno natural y tranquilo, cerca de todo lo que necesitas.', 'Tu espacio perfecto: naturaleza, privacidad y comodidad en un solo lugar.',],
    telefono: '+56976488200',
    message:'¡Hola!, quiero más información.',
    instagramLink: '',
    facebookLink: '',
    footerText:'STp.sbugmann@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/XjWJU5f82tw7DRuQA?g_st=iw',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 126, 92, 0) 0%, rgba(0, 126, 92, 0.2) 5%, rgba(0, 126, 92, 0.4) 20%, rgba(0, 126, 92, 0.7) 50%, rgba(0, 126, 92, 0.9) 70%, rgba(0, 126, 92, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      
      carousel01:[
        { 
          image: img1 , 
          videoUrl: "",
          title: 'Características',
          subtitle: "",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus rutrum ligula at viverra. Sed efficitur non quam at vulputate. Aliquam pellentesque a orci vitae consequat. Maecenas vestibulum ullamcorper felis, at dictum justo luctus in. Etiam magna leo, venenatis vel euismod eget, vehicula eu velit. Mauris laoreet odio dui,',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '', //
            buttonText: 'Ver Video',
          },
        },
        {
      
          image:img2 ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: "Santa Rosa, Región de la Araucanía",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus rutrum ligula at viverra. Sed efficitur non quam at vulputate. Aliquam pellentesque a orci vitae consequat. Maecenas vestibulum ullamcorper felis, at dictum justo luctus in. Etiam magna leo, venenatis vel euismod eget, vehicula eu velit. Mauris laoreet odio dui,',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/XjWJU5f82tw7DRuQA?g_st=iw',
            buttonText: '📌 Ver Ubicación',
          },
        },
        {
      
          image:img3 ,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: "",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus rutrum ligula at viverra. Sed efficitur non quam at vulputate. Aliquam pellentesque a orci vitae consequat. Maecenas vestibulum ullamcorper felis, at dictum justo luctus in. Etiam magna leo, venenatis vel euismod eget, vehicula eu velit. Mauris laoreet odio dui,',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56976488200?text=%C2%A1Hola!%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
        {
      
          image:img4 ,
          videoUrl: "",
          title: 'Entorno, Turismo y Naturaleza',
          subtitle: "",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus rutrum ligula at viverra. Sed efficitur non quam at vulputate. Aliquam pellentesque a orci vitae consequat. Maecenas vestibulum ullamcorper felis, at dictum justo luctus in. Etiam magna leo, venenatis vel euismod eget, vehicula eu velit. Mauris laoreet odio dui,',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56976488200?text=%C2%A1Hola!%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n.',
            buttonText: 'Más información',
          },
        },
      ],

    carousel02:[
      { 
        image: masterplan , 
        videoUrl: "",
        title: 'MasterPlan',
        subtitle: "",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'humedalsantarosa-production.up.railway.app', 
          buttonText: 'Ver Master Plan',
        },
      },
      { 
        image: masterplan2 , 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus rutrum ligula at viverra. Sed efficitur non quam at vulputate. Aliquam pellentesque a orci vitae consequat. Maecenas vestibulum ullamcorper felis, at dictum justo luctus in. Etiam magna leo, venenatis vel euismod eget, vehicula eu velit. Mauris laoreet odio dui,',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'humedalsantarosa-production.up.railway.app', 
          buttonText: 'Ver Master Plan',
        },
      },
      
      
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img5, 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img1,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img6,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },{
        image: img7,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      
    ],
  
    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'MasterPlan' },
    { id: 'carousel03', texto: 'Galería' },
  ];

  useEffect(() => {
    document.title = 'Humedal Santa Rosa de Huichahue';
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
