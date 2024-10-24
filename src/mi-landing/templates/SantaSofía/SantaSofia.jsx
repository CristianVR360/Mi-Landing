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
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img14.jpg';
import img15 from './assets/img15.jpg';
import img16 from './assets/img16.jpg';
import img17 from './assets/img17.jpg';
import teatro from './assets/teatro.jpg';
import videoBkg from './assets/videobkg.mp4';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#fbab4b',
    videoBkgHero: videoBkg,
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(38, 129, 147, 0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Panguipulli: el futuro de tu hogar, la certeza de tu inversión',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56996780430',
    message:'Hola, quiero más información de Condominio Santa Sofía',
    instagramLink: 'https://www.instagram.com/condominiosantasofia/',
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
          image: img1,
          videoUrl: "",
          title: 'Condominio Santa Sofía: Exclusividad, Seguridad y Tranquilidad en Cada Parcela',
          subtitle: "Un espacio privado con todo lo que necesitas para disfrutar de la vida al máximo",
          description: 'Condominio Santa Sofía te invita a ser parte de una experiencia única, ofreciéndote parcelas exclusivas equipadas con todos los servicios esenciales para tu confort. Cada una de nuestras parcelas cuenta con agua, luz y tranqueras que garantizan tu privacidad. El condominio dispone de portones de acceso controlado y cámaras de vigilancia, asegurando la máxima seguridad y tranquilidad para ti y tu familia. Además, un reglamento de copropiedad diseñado para promover una convivencia armónica que protege el valor de tu inversión a largo plazo, garantizando un entorno perfecto para vivir o invertir.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver video',
          },
        },
        {
          image: pangui,
          videoUrl: "",
          title: 'Conectividad y Naturaleza en un Entorno Inigualable',
          subtitle: 'Tu refugio privado a pasos de Panguipulli y los lagos más bellos de la región',
          description: 'A solo 11 km del corazón de Panguipulli, en el sector Panguilelfún, Condominio Santa Sofía te ofrece una ubicación privilegiada con acceso directo a 1 km de la emblemática Ruta de los Siete Lagos (T-39), conectándote fácilmente con los lagos más cercanos, la comuna de Los Lagos y a la Ruta 5. Disfruta de la tranquilidad de estar rodeado por la naturaleza sin sacrificar la cercanía a los servicios esenciales: farmacias, colegios, supermercados, atención médica y más, todo a tu alcance para una vida plena y cómoda.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/HeYDcnSqH2Vwd45X9',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img8,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: 'Desde UF 1160',
          description: 'En cuanto al financiamiento, Santa Sofía ofrece diversas opciones.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56996780430?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Condominio%20Santa%20Sof%C3%ADa',
            buttonText: 'Más información',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: 'Terrenos con las Mejores Condiciones para tu Proyecto',
          subtitle: 'El lugar perfecto para construir tu hogar en un entorno natural e incomparable',
          description: 'Santa Sofía te ofrece parcelas exclusivas de entre 5000 y 7000 m², diseñadas para brindarte el espacio y las comodidades que necesitas. Cada lote cuenta con acceso a agua y luz, asentado sobre una morfología mayormente plana y un suelo no inundable, ideal para garantizar la estabilidad de tu futuro proyecto. Con un alto porcentaje de ocupación, estas parcelas son perfectas para construir la casa de tus sueños. Todo esto en un entorno natural único y tranquilo, pensado para que disfrutes de la paz y la privacidad que mereces.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ElManantial/SantaSofia/index.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: teatro,
          videoUrl: "",
          title: '¿Por qué Elegir Santa Sofía?',
          subtitle: 'Un lugar único donde naturaleza, exclusividad y cultura se encuentran',
          description: 'Su ubicación estratégica te conecta fácilmente con los lagos más hermosos de la región y la Ruta 5, sin dejar de lado la cercanía a servicios esenciales como supermercados, colegios y centros de salud. Además, al vivir en Santa Sofía, serás parte de una vibrante comunidad cultural, gracias al cercano Teatro de las Artes de Panguipulli, un espacio que enriquece la vida diaria con eventos artísticos de primer nivel. Aquí, la naturaleza y la cultura se combinan para ofrecerte una experiencia de vida única.',
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
          description: 'La zona alrededor de Panguipulli y la Ruta siete lagos es rica en paisajes naturales, termas, lagos y montañas. Los viajeros pueden disfrutar tanto de la tranquilidad como de la aventura en este entorno privilegiado por la naturaleza. Aquí algunos de los principales puntos de interés mencionados: Lago Panguipulli, Reserva Biológica Huilo Huilo, Volcán mocho choshuenco, Lago Calafquén, Parque Nacional Villarrica, Neltume, Puerto Fuy, Lago Pirihueico, paso internacional Hua Hum, Lago Riñihue, Lago Ranco entre otros muchos destinos turísticos.',
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
          iframeUrl: 'https://santasofia-production.up.railway.app/masterplan.html', //
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
          iframeUrl: 'https://santasofia-production.up.railway.app/masterplan.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img2, 
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
        image: img3,
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
        image: img7,
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
        image: img12,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img13,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img14,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img15,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img16,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img10,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img11,
        videoUrl: "",
        title: '',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img17,
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
