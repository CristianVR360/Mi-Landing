import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';

import fotoLago from './assets/Lago Villarrica/Foto2.jpg';
import fav from './assets/favicon.png';
import logo from './assets/Logo Bosques de Quilentue-02.png';
import img02 from './assets/img02.jpg';
//import img03 from './assets/img03.jpg';
import img04 from './assets/img04.jpg';
import img05 from './assets/img05.jpg';
import img06 from './assets/img06.jpg';
//import img07 from './assets/img07.jpg';
import img08 from './assets/img08.jpg';
import img09 from './assets/img09.jpg';
//import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
//import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
//import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
//import img18 from './assets/img18.jpg';
import img19 from './assets/img19.jpg';
import img20 from './assets/img20.jpg';
//import img21 from './assets/img21.jpg';
import img22 from './assets/img22.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';
import img25 from './assets/img25.jpg';
import img26 from './assets/img26.jpg';
//import img27 from './assets/img27.jpg';
import img28 from './assets/img28.jpg';
import img29 from './assets/img29.jpg';
import img30 from './assets/img30.jpg';
//import img31 from './assets/img31.jpg';
import img32 from './assets/img32.jpg';
import img33 from './assets/img33.jpg';
import img34 from './assets/img34.jpg';
import img35 from './assets/img35.jpg';
import img36 from './assets/img36.jpg';
//import img37 from './assets/img37.jpg';
import img38 from './assets/img38.jpg';
import img39 from './assets/img39.jpg';
import img40 from './assets/img40.jpg';
import img41 from './assets/img41.jpg';
import img42 from './assets/img42.jpg';
import img43 from './assets/img43.jpg';
import img44 from './assets/img44.jpg';
import img45 from './assets/img45.jpg';
import img46 from './assets/img46.jpg';
import img47 from './assets/img47.jpg';
import img48 from './assets/img48.jpg';
import img49 from './assets/img49.jpg';





const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#606060',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(162, 163, 162, 0.8)',
    colorTerciario: '#606060',
    colorCuaternario: '#34495e',
    backgroundImage: img42 ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Parcelas en el corazón de la Araucanía Lacustre', 'Ideal para quienes buscan vivir rodeados de bosques nativos ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56971368049',
    instagramLink: '',
    facebookLink: '',
    gpsLink: 'https://maps.app.goo.gl/2ttPthCYNqsYX4wC7',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(96, 96, 96, 0) 0%, rgba(96, 96, 96, 0.2) 5%, rgba(96, 96, 96, 0.4) 20%, rgba(96, 96, 96, 0.7) 50%, rgba(96, 96, 96, 0.9) 70%, rgba(96, 96, 96, 1) 100%)",
      textColor: '#fff'
    },
    carousels: {
      carousel01: [
        {
          image: img04,
          videoUrl: "",
          title: 'BOSQUES DE QUILENTUE',
          subtitle: "En Molco, a solo 20 minutos de Pucón",
          description: 'Bosques de Quilentue es un refugio natural en Molco, ubicado en la región de la Araucanía, a solo 20 minutos de Pucón. Este exclusivo proyecto destaca por la abundante presencia de bosque nativo, un tesoro de biodiversidad que envuelve cada parcela, ofreciendo un ambiente lleno de serenidad y conexión con la naturaleza.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/uUvtbMmkrYQ?si=BMHTaF-_0n75IuI3',
            buttonText: 'Ver video',
          },
        },
        {
          image: fotoLago,
          videoUrl: "",
          title: 'UBICACIÓN',
          subtitle: 'Molco, a minutos de Pucón y Villarrica',
          description: 'Bosques de Quilentue se encuentra en Molco, en una zona privilegiada de la Araucanía, rodeada de destinos turísticos de renombre. Desde aquí, puedes explorar lugares como Pucón, famoso por sus termas y el majestuoso Volcán Villarrica; el Lago Villarrica, ideal para deportes acuáticos; los Ojos del Caburgua, que ofrecen impresionantes cascadas; el Parque Nacional Huerquehue, perfecto para el senderismo en medio de la naturaleza virgen; y las Termas Geométricas, un refugio de aguas termales en medio del bosque.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/J1pqZTqdGxXeSmFJ9',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img45,
          videoUrl: "",
          title: 'CARACTERÍSTICAS',
          subtitle: 'Un paraíso natural en cada parcela',
          description: 'Cada parcela de Bosques de Quilentue ofrece algo único: la presencia de un denso y mágico bosque nativo que te permitirá vivir rodeado de naturaleza en su estado más puro. Imagina despertar cada mañana con el suave susurro del viento entre los árboles, con la posibilidad de explorar senderos ocultos bajo la sombra de antiguos robles y coigües. Aquí, la naturaleza no es solo un paisaje, sino una parte viva de tu hogar. Además, todas las parcelas cuentan con factibilidad de luz y agua, asegurando un entorno cómodo y preparado para construir tu refugio perfecto.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/BosquesDeQuilentue/output/index.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img40,
          videoUrl: "",
          title: 'PRECIOS Y FINANCIAMIENTO',
          subtitle: 'Oferta de lanzamiento desde $35.000.000',
          description: 'Aprovecha nuestra oferta de lanzamiento con precios desde $35.000.000. Ofrecemos diversas opciones de pago, incluyendo financiamiento directo de hasta 48 cuotas. La reserva de parcelas se puede realizar con un pie de $7.000.000, asegurando tu lugar en este paraíso natural. Además, aceptamos pagos con tarjetas de crédito/débito y transferencias bancarias.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56971368049?text=Hola%2C%20Quiero%20mas%20informaci%C3%B3n',
            buttonText: 'Más información',
          },
        },
      ],
      

    carousel02:[
      {
        image:img19 ,
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelassantafelicia.cl/masterplan.html',
          buttonText: 'Ver Master Plan',
        },
      },
      {
        image:img36 ,
        videoUrl: "",
        title: 'MASTER PLAN 360',
        subtitle: "Recorre de manera interactiva por nuestro Master Plan 360",
        description: '',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/BosquesDeQuilentue/output/index.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      {
        image: img17,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img20,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img22,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img23,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img24,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img25,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img26,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img28,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img29,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img30,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img32,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img33,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img34,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img35,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img38,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img39,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img40,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img41,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img42,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img43,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img44,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img45,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img46,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img47,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img02,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img04,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img05,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img06,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img08,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img09,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img11,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img12,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img14,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img15,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img48,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      },
      {
        image: img49,
        videoUrl: "",
        title: 'Bosques de Quilentue',
        subtitle: "",
        description: '',
      }
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
    document.title = 'Bosques de Quilentue';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = fav;

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
