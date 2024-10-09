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
import img9 from './assets/img9.jpg';
import img10 from './assets/img11.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import master from './assets/masterplan.jpg';

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#1b3457',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(27, 52, 86,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Hacienda Del Ranco',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingHaciendaDelRanco/index.html',
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+',
    message:'Hola, quiero más información de Hacienda Del Ranco',
    instagramLink: '',
    facebookLink: '',
    footerText:'Lago Ranco, Los Ríos, Chile',
    gpsLink: 'https://maps.app.goo.gl/az23YRbb7MHmbdyo8',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(101, 190, 74, 0) 0%, rgba(101, 190, 74, 0.2) 5%, rgba(101, 190, 74, 0.4) 20%, rgba(101, 190, 74, 0.7) 50%, rgba(101, 190, 74, 0.9) 70%, rgba(101, 190, 74, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img1,
          videoUrl: "",
          title: 'Hacienda Del Ranco',
          subtitle: "Ubicado en Lago Ranco, Los Ríos",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nibh eget vulputate condimentum. Suspendisse posuere mi eros, vel aliquam sem dignissim sit amet. Aliquam rutrum tortor odio, et condimentum massa dictum et. Donec quis enim fringilla, efficitur dui vitae, porttitor metus. Suspendisse potenti. Duis vulputate, magna eget tincidunt blandit, nisl justo fermentum ligula, et rhoncus lectus mi a odio. Suspendisse tincidunt nec dui lacinia faucibus. Phasellus suscipit scelerisque tortor, sed viverra elit fringilla at. Quisque varius porta venenatis. Quisque eros eros, dictum ut magna ut, faucibus condimentum lectus. Vivamus quis lacinia mauris. Ut ultrices euismod enim faucibus aliquet.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: 'Lorem ipsum dolor',
          subtitle: 'consectetur adipiscing elit.',
          description: 'Etiam mollis urna in congue ornare. Nullam semper aliquam magna ac viverra. Curabitur mollis, sem at venenatis vestibulum, ligula ipsum faucibus urna, nec posuere ipsum est vitae orci. In facilisis tincidunt nisl, a tristique leo efficitur vel. Sed viverra arcu magna, id dignissim augue dapibus in. Nunc sed est sagittis, faucibus nunc ut, porttitor magna. Aliquam erat volutpat. Nulla sagittis augue quis lacus viverra gravida. Suspendisse facilisis accumsan augue, ac tincidunt arcu consectetur vitae.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/az23YRbb7MHmbdyo8',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: 'Lorem ipsum dolor',
          subtitle: 'Uconsectetur adipiscing elit.',
          description: 'Etiam mollis urna in congue ornare. Nullam semper aliquam magna ac viverra. Curabitur mollis, sem at venenatis vestibulum, ligula ipsum faucibus urna, nec posuere ipsum est vitae orci. In facilisis tincidunt nisl, a tristique leo efficitur vel. Sed viverra arcu magna, id dignissim augue dapibus in. Nunc sed est sagittis, faucibus nunc ut, porttitor magna. Aliquam erat volutpat. Nulla sagittis augue quis lacus viverra gravida. Suspendisse facilisis accumsan augue, ac tincidunt arcu consectetur vitae.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://haciendadelagoranco-production.up.railway.app',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img4,
          videoUrl: "",
          title: 'Lorem ipsum dolor',
          subtitle: 'consectetur adipiscing elit.',
          description: 'Etiam mollis urna in congue ornare. Nullam semper aliquam magna ac viverra. Curabitur mollis, sem at venenatis vestibulum, ligula ipsum faucibus urna, nec posuere ipsum est vitae orci. In facilisis tincidunt nisl, a tristique leo efficitur vel. Sed viverra arcu magna, id dignissim augue dapibus in. Nunc sed est sagittis, faucibus nunc ut, porttitor magna. Aliquam erat volutpat. Nulla sagittis augue quis lacus viverra gravida. Suspendisse facilisis accumsan augue, ac tincidunt arcu consectetur vitae.',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
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
          iframeUrl: 'https://haciendadelagoranco-production.up.railway.app', //
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
          iframeUrl: 'https://haciendadelagoranco-production.up.railway.app',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {

        image: img7, 
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img10,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img11,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img12,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img13,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img14,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img15,
        videoUrl: "",
        title: 'Hacienda Del Ranco',
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
    document.title = 'Hacienda Del Ranco';
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
