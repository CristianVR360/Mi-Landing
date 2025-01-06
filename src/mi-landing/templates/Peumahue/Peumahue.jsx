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
//import img37 from './assets/img37.jpg';
import img38 from './assets/img38.jpg';
import img39 from './assets/img39.jpg';
import img40 from './assets/img40.jpg';
//import financiamiento from './assets/financiamiento.jpg';
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
    backgroundImage: img2,
    title: 'Donde la naturaleza y la comodidad se encuentran',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita!',
    iframeBackground: '',
    subtitles: ['Parcelas exclusivas a 15 min de Pucón', 'Acceso directo a la playa con embarcadero', "Supermercados, farmacias, colegios, a pasos de tu parcela"  ],
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
      image: img16,
      videoUrl: "",
      title: 'Parcelas Peumahue: Exclusividad, Naturaleza y Conexión en Cada Espacio',
      subtitle: 'Vive la tranquilidad a pasos de Molco, en un entorno de alta plusvalía',
      description: 'Parcelas Peumahue te invita a descubrir un estilo de vida único, ofreciendo terrenos exclusivos de 5.000 m² ubicados estratégicamente en la Ruta Villarrica-Pucón. Disfruta de servicios básicos de rápido acceso, como luz y agua con instalaciones subterráneas, factibilidad de fibra óptica para mantenerte siempre conectado y acceso directo a la playa, pensado para garantizar comodidad y seguridad. Además, cuenta con un portón de acceso controlado, que asegura privacidad y tranquilidad en todo momento.',
      buttonConfig: {
        type: 'popup',
        iframeUrl: 'https://www.youtube.com/embed/K8ZmSh2FIYs',
        buttonText: 'Ver video',
      },
    },
    {
      image: img18,
      videoUrl: "",
      title: 'Ubicación Privilegiada en el Corazón de la Ruta Villarrica-Pucón',
      subtitle: 'Exclusividad a pasos de los mejores destinos de la zona lacustre',
      description: 'Parcelas Peumahue, ubicado en Molco a solo 15 minutos de Villarrica y Pucón, combina la tranquilidad de la naturaleza con la cercanía a servicios esenciales. Con acceso directo al embarcadero y la playa mediante un paso bajo nivel, ofrece una conexión única al lago Villarrica, ideal para actividades acuáticas. Además, su ubicación estratégica asegura acceso a servicios básicos como luz, agua y factibilidad de fibra óptica, así como a supermercados, farmacias, colegios y otros comercios, brindando comodidad y tranquilidad en un entorno privilegiado.',
      buttonConfig: {
        type: 'link',
        url: 'https://wa.me/+56984063243?text=Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto',
        buttonText: 'Más información',
      },
    },
  
   
{
  image: img9,
  videoUrl: "",
  title: 'Naturaleza y Cercanía en un Entorno Único',
  subtitle: 'Conecta con los paisajes y actividades que hacen especial a Pucón y sus alrededores',
  description: 'Parcelas Peumahue te conecta con lo mejor de la Araucanía lacustre, a pocos minutos de Pucón, conocida por su amplia oferta turística. Desde el imponente Volcán Villarrica hasta los lagos Villarrica, Colico y Caburgua, este entorno ofrece acceso a playas, reservas naturales y actividades culturales. Vivir aquí combina la tranquilidad de la naturaleza con la comodidad de estar cerca de una ciudad vibrante, ideal para disfrutar en familia o realizar una inversión estratégica.',
  buttonConfig: {
    type: 'popup',
    iframeUrl: 'https://www.youtube.com/embed/K8ZmSh2FIYs',
    buttonText: 'Ver video',
  },
},

{
  image: img10,
  videoUrl: "",
  title: '¿Por qué Elegir Parcelas Peumahue?',
  subtitle: 'Exclusividad, conectividad y naturaleza en perfecta armonía',
  description: 'Su ubicación estratégica a pasos de Molco te conecta fácilmente con los destinos más icónicos del sur de Chile, como Villarrica y Pucón, además de ofrecer acceso directo a la playa y el embarcadero a través de un paso bajo nivel. A pocos minutos de supermercados, colegios y servicios esenciales, Parcelas Peumahue combina la tranquilidad de un entorno natural con la comodidad de una ubicación privilegiada. Este es el lugar donde la calidad de vida y la inversión se encuentran.',
  buttonConfig: {
    type: 'popup',
    iframeUrl: 'https://www.youtube.com/embed/K8ZmSh2FIYs',
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
          image: img40,
          videoUrl: "",
          title: "1",
          subtitle: "",
          description: "",
        },
        {
          image: img2,
          videoUrl: "",
          title: "2",
          subtitle: "",
          description: "",
        },
        {
          image: img3,
          videoUrl: "",
          title: "3",
          subtitle: "",
          description: "",
        },
        {
          image: img4,
          videoUrl: "",
          title: "4",
          subtitle: "",
          description: "",
        },
        {
          image: img5,
          videoUrl: "",
          title: "5",
          subtitle: "",
          description: "",
        },
        {
          image: img6,
          videoUrl: "",
          title: "6",
          subtitle: "",
          description: "",
        },
        {
          image: img7,
          videoUrl: "",
          title: "7",
          subtitle: "",
          description: "",
        },
        {
          image: img8,
          videoUrl: "",
          title: "8",
          subtitle: "",
          description: "",
        },
        {
          image: img9,
          videoUrl: "",
          title: "9",
          subtitle: "",
          description: "",
        },
        {
          image: img10,
          videoUrl: "",
          title: "10",
          subtitle: "",
          description: "",
        },
        {
          image: img11,
          videoUrl: "",
          title: "11",
          subtitle: "",
          description: "",
        },
        {
          image: img12,
          videoUrl: "",
          title: "12",
          subtitle: "",
          description: "",
        },
        {
          image: img13,
          videoUrl: "",
          title: "13",
          subtitle: "",
          description: "",
        },
        {
          image: img14,
          videoUrl: "",
          title: "14",
          subtitle: "",
          description: "",
        },
        {
          image: img15,
          videoUrl: "",
          title: "15",
          subtitle: "",
          description: "",
        },
        {
          image: img16,
          videoUrl: "",
          title: "16",
          subtitle: "",
          description: "",
        },
        {
          image: img17,
          videoUrl: "",
          title: "17",
          subtitle: "",
          description: "",
        },
        {
          image: img18,
          videoUrl: "",
          title: "18",
          subtitle: "",
          description: "",
        },
        {
          image: img19,
          videoUrl: "",
          title: "19",
          subtitle: "",
          description: "",
        },
        {
          image: img20,
          videoUrl: "",
          title: "20",
          subtitle: "",
          description: "",
        },
        {
          image: img21,
          videoUrl: "",
          title: "21",
          subtitle: "",
          description: "",
        },
        {
          image: img22,
          videoUrl: "",
          title: "22",
          subtitle: "",
          description: "",
        },
        {
          image: img23,
          videoUrl: "",
          title: "23",
          subtitle: "",
          description: "",
        },
        {
          image: img24,
          videoUrl: "",
          title: "24",
          subtitle: "",
          description: "",
        },
        {
          image: img25,
          videoUrl: "",
          title: "25",
          subtitle: "",
          description: "",
        },
        {
          image: img26,
          videoUrl: "",
          title: "26",
          subtitle: "",
          description: "",
        },
        {
          image: img27,
          videoUrl: "",
          title: "27",
          subtitle: "",
          description: "",
        },
        {
          image: img28,
          videoUrl: "",
          title: "28",
          subtitle: "",
          description: "",
        },
        {
          image: img29,
          videoUrl: "",
          title: "29",
          subtitle: "",
          description: "",
        },
        {
          image: img30,
          videoUrl: "",
          title: "30",
          subtitle: "",
          description: "",
        },
        {
          image: img31,
          videoUrl: "",
          title: "31",
          subtitle: "",
          description: "",
        },
        {
          image: img32,
          videoUrl: "",
          title: "32",
          subtitle: "",
          description: "",
        },
        {
          image: img33,
          videoUrl: "",
          title: "33",
          subtitle: "",
          description: "",
        },
        {
          image: img34,
          videoUrl: "",
          title: "34",
          subtitle: "",
          description: "",
        },
        {
          image: img35,
          videoUrl: "",
          title: "35",
          subtitle: "",
          description: "",
        },
        {
          image: img36,
          videoUrl: "",
          title: "36",
          subtitle: "",
          description: "",
        },
        {
          image: img38,
          videoUrl: "",
          title: "37",
          subtitle: "",
          description: "",
        },
        {
          image: img39,
          videoUrl: "",
          title: "38",
          subtitle: "",
          description: "",
        },
        {
          image: img1,
          videoUrl: "",
          title: "39",
          subtitle: "",
          description: "",
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
