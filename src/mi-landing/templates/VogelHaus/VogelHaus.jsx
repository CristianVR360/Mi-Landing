import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/vogelhauslogoblanco.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import favIcon from './assets/favicon.png';
import ubica from './assets/ubicación.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import portada from './assets/portada.jpg';




//https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingParcelasVillarrica//index.html     BACKGROUND

const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#d2492a',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(0, 85, 90,0.8)',
    colorTerciario: '#f08013',
    colorCuaternario: '#34495e', 
    backgroundImage: portada ,
    title: '',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Mercado de Calidad de Vida', 'Cerca de la ciudad y con fácil acceso', 'Tu nueva vida en el sur de Chile', "Oportunidad única para invertir"],
    telefono: '+56976858145',
    message:'¡Hola!, quiero más información.',
    instagramLink: 'https://www.instagram.com/parcelas.vogelhaus/',
    facebookLink: 'https://www.facebook.com/share/TD2p4uCR6vPUHknC/?mibextid=qi2Omg',
    footerText:'Manhue, Villarrica',
    gpsLink: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 85, 90, 0) 0%, rgba(0, 85, 90, 0.2) 5%, rgba(0, 85, 90, 0.4) 20%, rgba(0, 85, 90, 0.7) 50%, rgba(0, 85, 90, 0.9) 70%, rgba(0, 85, 90, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      
      carousel01:[
        { 
          image: img5 , 
          videoUrl: "",
          title: 'VogelHaus',
          subtitle: "Hermoso proyecto para Inversionistas y familias.",
          description: 'Puedes invertir; desde comprar una sola Parcela, hasta varias de ellas e incluso con casa de diseño único.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/FT0QI2GzhDs', //
            buttonText: 'Ver Video',
          },
        },
        {
      
          image:ubica ,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: "40 minutos desde el Aeropuerto Temuco. Sólo 20 minutos de Villarrica y 45 de Pucón.",
          description: ' Rutas hacia Villarrica/Pucón: vía Freire: Ruta 199. Vía Pitrufquén; S-65. Vía Sexta Faja: S-689.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
            buttonText: '📌 Ver Ubicación',
          },
        },
        {
      
          image:img6 ,
          videoUrl: "",
          title: 'Distancias a Puntos de Interés',
          subtitle: "",
          description: 'Ubicados en un punto estratégico, estamos a solo 59 km del Aeropuerto de Temuco, a 20 km de Villarrica y a 49 km de Pucón, lo que facilita el acceso a estos destinos turísticos. También estamos a 118 km de Valdivia y 117 km de la Reserva Huilo Huilo, destinos ideales para los amantes de la naturaleza. En los alrededores, encontramos Ñancul a 12 km y Huiscapi a 11 km, con servicios como gasolineras, bomberos, farmacias, supermercados, y escuelas. Además, contamos con la Posta Manhue a 1,5 km para atención de salud inmediata, y estamos a 16 km del Colegio Inglés Oxford School, destacado en el lugar 97 de la PAES 2023.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/KfSDRnxhvNQZF9A29?g_st=iwb',
            buttonText: 'Ver en el Mapa',
          },
        },
        {
      
          image:img7 ,
          videoUrl: "",
          title: 'Parcelación Estratégica en un Entorno Natural Único',
          subtitle: "Conectividad, Seguridad y Comodidad en un Proyecto que Combina lo Mejor del Campo y la Ciudad",
          description: 'En tierras de excelentes cualidades agrícolas y ganaderas y fuera de riesgo volcánico. Combina un equilibrio perfecto entre el bullicio turístico y la tranquilidad campestre. Listo para escrituración inmediata, el proyecto cuenta con cercos perimetrales para cada parcela, caminos interiores amplios de 8 metros, y un pozo de agua exclusivo y registrado. Cada parcela dispone de conexión de agua, red de grifos de incendio, y buena señal de celulares e internet. Además, ofrece conexión subterránea de empalme eléctrico individual, caminos ripiados y estabilizados, y un portón de acceso automático para mayor seguridad y comodidad.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/56976858145',
            buttonText: 'Más información',
          },
        },
      ],

    carousel02:[
      { 
        image: img8 , 
        videoUrl: "",
        title: 'Explora Nuestro Tour Virtual Interactivo',
        subtitle: "Conoce la Ubicación Estratégica, las Ventajas de Inversión y la Belleza del Entorno Natural del Proyecto",
        description: 'Descubre nuestro Tour Virtual interactivo y explora la ubicación estratégica del proyecto, así como su hermoso entorno natural y su gran plusvalía.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelasvillarricamasterplan-production.up.railway.app/', //
          buttonText: 'Ver Master Plan',
        },
      },
      { 
        image: img9 , 
        videoUrl: "",
        title: 'Explora Nuestro Tour Virtual Interactivo',
        subtitle: "Conoce la Ubicación Estratégica, las Ventajas de Inversión y la Belleza del Entorno Natural del Proyecto",
        description: 'Descubre nuestro Tour Virtual interactivo y explora la ubicación estratégica del proyecto, así como su hermoso entorno natural y su gran plusvalía.',
        buttonConfig: {
          type: 'popup',
          iframeUrl: 'https://parcelasvillarricamasterplan-production.up.railway.app/', //
          buttonText: 'Ver Master Plan',
        },
      },
      
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img1, 
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img3,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img4,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img5,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img1,
        videoUrl: "",
        title: 'Parcelas VogelHaus',
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
    document.title = 'VogelHaus';
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
