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
import img27 from './assets/img27.jpg';
import img28 from './assets/img28.jpg';
import img29 from './assets/img29.jpg';
import img30 from './assets/img30.jpg';
import img31 from './assets/img31.jpg';
import img32 from './assets/img32.jpg';
import img33 from './assets/img33.jpg';
import img34 from './assets/img34.jpg';
import img35 from './assets/img35.jpg';
import financiamiento from './assets/financiamiento.jpg';
import master from './assets/master.jpg';
import puertooctay from './assets/1puerto-octay.jpg';
import lagorupanco from './assets/lagorupanco.jpg';

;



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logoblanco,
    colorPrimario: '#1a1819',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(33, 32, 38, 0.8)',
    colorTerciario: '#1e1e1e',
    colorCuaternario: '#34495e',
    backgroundImage: img1,
    title: 'Donde la Naturaleza se Encuentra con la Exclusividad',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingLagunaBonita/index.html',
    subtitles: ['Laguna Bonita: un paraíso natural en Puerto Octay.', 'Disfruta pesca, kayak y tranquilidad en tu propia laguna.', 'Media hectárea de naturaleza en el corazón del sur de Chile.', 'Vive la paz que solo Laguna Bonita puede ofrecer.', ],
    telefono: '',
    message:'Necesito más información sobre el proyecto',
    footerText:"",
    instagramLink: '',
    facebookLink: '',
    linkedinLink: '',
    gpsLink: 'https://maps.app.goo.gl/Cw8ZsYDttC5zjUeh9',
    footerAfterStyles: {
        background: "linear-gradient(to bottom, rgba(33, 32, 38, 0) 0%, rgba(33, 32, 38, 0.2) 5%, rgba(33, 32, 38, 0.4) 20%, rgba(33, 32, 38, 0.7) 50%, rgba(33, 32, 38, 0.9) 70%, rgba(33, 32, 38, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: img5 ,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Laguna Bonita es un exclusivo proyecto de loteo ubicado en Puerto Octay, que ofrece solo 4 parcelas de agrado de media hectárea. Cada parcela cuenta con vistas privilegiadas a una laguna privada, creando un espacio único para quienes buscan tranquilidad y contacto con la naturaleza. Ideal para disfrutar de actividades como pesca, paseos en kayak y momentos de paz en un entorno natural exclusivo.',
          
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: puertooctay ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Situado en el corazón del sur de Chile, en el sector de Puerto Octay, Laguna Bonita se encuentra en una ubicación privilegiada. Desde aquí, se pueden apreciar los imponentes volcanes Osorno y Casablanca, que además cuentan con canchas de ski para los amantes de la aventura. Su cercanía a las Termas de Puyehue y Aguas Calientes lo convierte en el lugar perfecto para quienes buscan accesibilidad a destinos turísticos destacados.',
          
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/Cw8ZsYDttC5zjUeh9',
            buttonText: 'Ver Mapa',
          },
        },
        {
          image: lagorupanco ,
          videoUrl: "",
          title: 'Turismo y Naturaleza',
          subtitle: '',
          description: 'Rodeado por la exuberante selva Valdiviana, Laguna Bonita ofrece un entorno incomparable con su vegetación siempreverde, árboles nativos y un microclima revitalizante. Este paraíso natural permite disfrutar de actividades al aire libre, como deportes acuáticos y exploraciones, complementadas por la relajación en termas cercanas y la adrenalina de esquiar en los volcanes. Es un lugar donde la naturaleza se vive en su máxima expresión.',
          
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
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/LagunaBonita/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        

      ],

      carousel03: [
        {
          image: img4,
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
        },{
          image: img27,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img28,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img29,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img30,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img31,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img32,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img33,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img34,
          videoUrl: "",
          title: '',
          subtitle: '',
          description: '',
          className: 'photoGallery',
        },{
          image: img35,
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
    document.title = 'Laguna Bonita';
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
