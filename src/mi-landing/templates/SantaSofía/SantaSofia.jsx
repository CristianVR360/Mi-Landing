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
import lagopangui from './assets/lagopangui.jpg';
import master2 from './assets/masterplan2.jpg';
import img9 from './assets/img9.jpg';




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
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56996780430',
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
          title: 'Condominio Santa Sofía',
          subtitle: "Panguipulli, Los Ríos",
          description: 'Condominio Santa Sofía te ofrece parcelas exclusivas con todos los servicios que necesitas. Cada parcela cuenta con agua, luz y tranquetas para tu privacidad. El condominio está equipado con un portón de acceso y cámaras de seguridad para brindarte máxima tranquilidad. Además, cuenta con un reglamento de propiedad que asegura convivencia armónica y mantiene el valor de tu inversión a largo plazo.',
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
          description: 'Las parcelas de Santa Sofía están ubicadas a solo 11 km de Panguipulli, con acceso directo a la Ruta T-39, lo que facilita la conexión a los lagos de la zona y a la Ruta 5. Su cercanía al pueblo garantiza acceso a todos los servicios esenciales como farmacias, colegios, supermercados, atención médica y más.',
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
          description: 'El Condominio Santa Sofía, ubicado cerca de Panguipulli, ofrece parcelas exclusivas de 5000 a 7000 m². Cada una cuenta con agua, luz y tranqueta privada para garantizar tu privacidad y comodidad. Disfruta de un entorno natural único y tranquilo, ideal para construir tu hogar o casa de descanso.',
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
            url: 'https://wa.me/+56996780430?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Condominio%20Santa%20Sof%C3%ADa',
            buttonText: 'Más información',
          },
        },
        {
          image: lagopangui,
          videoUrl: "",
          title: 'Turismo y Naturaleza',
          subtitle: '',
          description: 'La zona alrededor de Panguipulli y la Ruta T-39 es rica en paisajes naturales, termas, lagos y montañas. Los viajeros pueden disfrutar tanto de la tranquilidad como de la aventura en este entorno privilegiado por la naturaleza. Aquí algunos de los principales puntos de interés mencionados: Lago Panguipulli, Termas Geométricas, Reserva Biológica Huilo Huilo, Volcán y Lago Ranco, Lago Calafquén, Parque Nacional Villarrica, Neltume. Pucón y Villarrica, Termas de Coñaripe, Saltos de la China y del León, Lago Riñihue.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
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
    
        image:master2 ,
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
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img5,
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
        image: img3,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img8,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
    
      {
        image: img5,
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
