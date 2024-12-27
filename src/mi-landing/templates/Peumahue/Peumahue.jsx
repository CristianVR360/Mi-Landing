import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import FavIcon from './assets/FavIcon.png';
import logoblanco from './assets/logoblanco.png';
import master1 from './assets/master1.jpg';
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
import img27 from './assets/img27.jpg';
import img28 from './assets/img28.jpg';
import img29 from './assets/img29.jpg';
import img30 from './assets/img30.jpg';
import img31 from './assets/img31.jpg';
import img32 from './assets/img32.jpg';
import img33 from './assets/img33.jpg';
import img34 from './assets/img34.jpg';
import img35 from './assets/img35.jpg';
import img36 from './assets/img36.jpg';
import img37 from './assets/img37.jpg';
import img38 from './assets/img38.jpg';
import img39 from './assets/img39.jpg';
import img40 from './assets/img40.jpg';
import financiamiento from './assets/financiamiento.jpg';
import master2 from './assets/master2.jpg';


;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#00a378',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(4, 66, 188, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: 'Donde la naturaleza y la comodidad se encuentran',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['En el corazón del turismo',  ],
    telefono: '+56984063243',
    message:'Necesito más información sobre el proyecto',
    footerText:"Molco, Región de la Araucanía",
    instagramLink: 'https://www.instagram.com/parcelas_peumahue/',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/xYZiYDso7kRNw4Bi7',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(4, 66, 188, 0) 0%, rgba(4, 66, 188, 0.2) 5%, rgba(4, 66, 188, 0.4) 20%, rgba(4, 66, 188, 0.7) 50%, rgba(4, 66, 188, 0.9) 70%, rgba(4, 66, 188, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img10 ,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, nibh quis cursus malesuada, neque orci euismod justo, eu posuere elit libero et nisi. Quisque a arcu tortor. Morbi ut tempus nulla. Vestibulum euismod mi enim, sit amet dignissim tortor gravida eu. Donec mattis tellus vitae posuere euismod. Cras congue lectus nisl, ut sollicitudin nunc rhoncus nec. Duis id ante ac sem dignissim maximus ac et felis. Nullam tristique aliquet tellus sed sollicitudin.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img18 ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, nibh quis cursus malesuada, neque orci euismod justo, eu posuere elit libero et nisi. Quisque a arcu tortor. Morbi ut tempus nulla. Vestibulum euismod mi enim, sit amet dignissim tortor gravida eu. Donec mattis tellus vitae posuere euismod. Cras congue lectus nisl, ut sollicitudin nunc rhoncus nec. Duis id ante ac sem dignissim maximus ac et felis. Nullam tristique aliquet tellus sed sollicitudin.',
          
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, nibh quis cursus malesuada, neque orci euismod justo, eu posuere elit libero et nisi. Quisque a arcu tortor. Morbi ut tempus nulla. Vestibulum euismod mi enim, sit amet dignissim tortor gravida eu. Donec mattis tellus vitae posuere euismod. Cras congue lectus nisl, ut sollicitudin nunc rhoncus nec. Duis id ante ac sem dignissim maximus ac et felis. Nullam tristique aliquet tellus sed sollicitudin.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: img9 ,
          videoUrl: "",
          title: 'Entorno, Turismo y Naturaleza',
          subtitle: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, nibh quis cursus malesuada, neque orci euismod justo, eu posuere elit libero et nisi. Quisque a arcu tortor. Morbi ut tempus nulla. Vestibulum euismod mi enim, sit amet dignissim tortor gravida eu. Donec mattis tellus vitae posuere euismod. Cras congue lectus nisl, ut sollicitudin nunc rhoncus nec. Duis id ante ac sem dignissim maximus ac et felis. Nullam tristique aliquet tellus sed sollicitudin.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
       

      ],

      carousel02: [
        {
          image: master1 ,
          videoUrl: "",
          title: 'Masterplan 360',
          subtitle: 'Recorre de manera interactiva nuestro MasterPlan 360',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Peumahue/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: master2 ,
          videoUrl: "",
          title: 'Masterplan 360',
          subtitle: 'Recorre de manera interactiva nuestro MasterPlan 360',
          description: '',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Peumahue/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        

      ],

      carousel03: [
        {
          image: img1,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img2,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img3,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img4,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img5,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img6,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img7,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img8,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img9,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img10,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img11,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img12,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img13,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img14,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img15,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img16,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img17,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img18,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img19,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img20,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img21,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img22,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img23,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img24,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img25,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img26,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img27,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img28,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img29,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img30,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img31,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img32,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img33,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img34,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img35,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img36,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img37,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img38,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img39,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },
        {
          image: img40,
          videoUrl: "",
          title: "",
          subtitle: "",
          description: "",
          className: "photoGallery",
        },

      ],
     
    },

    
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Brochure' },
    { id: 'carousel02', texto: 'Masterplan' },
    { id: 'carousel03', texto: 'Galería' },
 
    
  ];

  useEffect(() => {
    document.title = 'Peumahue';
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
