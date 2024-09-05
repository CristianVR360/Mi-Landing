import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
//import logo from './assets/logo.png';
import logoblanco from './assets/logoblanco.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
//import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
//import img8 from './assets/img8.jpg';
//import img9 from './assets/img9.jpg';
import favIcon from './assets/favicon.png';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';




const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco , // Agrega la ruta de tu logo aquí
    colorPrimario: '#274162',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(39, 65, 98,0.8)',
    colorTerciario: '#000000',
    colorCuaternario: '#34495e', 
    backgroundImage: img2 ,
    title: 'Agricola Rio Chepu, Fundo Chaignal',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Nos preocupamos por nuestra Gente, por nuestra tierra', 'ORGÁNICOS ', ],
    telefono: '+56940465696',
    instagramLink: '',
    facebookLink: '',
    footerText:'parcelas.astra360@gmail.com',
    gpsLink: 'https://maps.app.goo.gl/7M2cTkGaRf4KTBjc6',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(118, 146, 62, 0) 0%, rgba(118, 146, 62, 0.2) 5%, rgba(118, 146, 62, 0.4) 20%, rgba(118, 146, 62, 0.7) 50%, rgba(118, 146, 62, 0.9) 70%, rgba(118, 146, 62, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img4,
          videoUrl: "",
          title: 'Río Chepu',
          subtitle: "Visita Agricola Rio Chepu, Fundo Chaignal. ",
          description: 'Una empresa responsable y preocupada por su gente y por la naturaleza. Una empresa Familiar que apoya y ayuda al desarrollo de nuestro hermoso Malalhue y su gente.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/IJZB19xo_8k',
            buttonText: 'Ver video',
          },
        },
        {
          image: img11,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: img7,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
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
        image: img10 , 
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: '', //
          buttonText: '',
        },
      },
      {
    
        image:img3 ,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: '',
          buttonText: '',
        },
      },
    ],

    
    carousel03: [
      
      {
        image: img5 ,
        videoUrl: "",
        title: '',
        subtitle: '',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: '',
          buttonText: 'Ver Video',
        },
      },
      {
        image: img1 ,
        videoUrl: "",
        title: '',
        subtitle: '',
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: '',
          buttonText: 'Ver Video',
        },
      },
    ]
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Master Plan' },
    { id: 'carousel03', texto: 'Presentación' },
  ];

  useEffect(() => {
    document.title = 'Río Chepu';
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
