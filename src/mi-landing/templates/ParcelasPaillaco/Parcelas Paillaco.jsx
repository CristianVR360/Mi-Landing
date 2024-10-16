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
//import img10 from './assets/img11.jpg';
import img11 from './assets/img11.jpg';
import master from './assets/masterplan.jpg';
import paillaco from './assets/paillaco.jpg';



const TemplateMiLanding = () => {
  const landingPageData = {
    logo: Logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#0e592e',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(238, 89, 7,0.8)',
    colorTerciario: '#3e3e3e',
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Parcelas Paillaco',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingParcelasPaillaco/index.html',
    subtitles: ['Descubre la Belleza Natural', 'Ideal para quienes buscan vivir rodeados de Naturaleza ', 'Naturaleza virgen y espacios amplios en cada parcela', "Oportunidad única para invertir"],
    telefono: '+56962981160',
    message:'Hola, quiero más información de Parcelas Paillaco',
    instagramLink: '',
    facebookLink: '',
    footerText:'Paillaco, Los Ríos, Chile',
    gpsLink: 'https://maps.app.goo.gl/Pbr5WrZoPGFdsMdB6',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(238, 89, 7, 0) 0%, rgba(238, 89, 7, 0.2) 5%, rgba(238, 89, 7, 0.4) 20%, rgba(238, 89, 7, 0.7) 50%, rgba(238, 89, 7, 0.9) 70%, rgba(238, 89, 7, 1) 100%)",

      textColor: '#fff'
    },
    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: img1,
          videoUrl: "",
          title: 'Parcelas Paillaco',
          subtitle: "Ubicado en Paillaco, Los Ríos",
          description: 'El proyecto de loteos en Paillaco está enfocado en la conexión con la naturaleza y aprovechar las impresionantes vistas desde sus parcelas en altura. Ofrece panorámicas únicas de los bosques nativos y paisajes de la Región de Los Ríos. Este desarrollo inmobiliario sostenible promueve unestilo de vida tranquilo, preservando los recursos naturales del entorno.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/9iVzO3BCcqI',
            buttonText: 'Ver video',
          },
        },
        {
          image: paillaco,
          videoUrl: "",
          title: 'Ubicación',
          subtitle: '',
          description: 'Nuestras parcelas están ubicadas en un entorno natural excepcional, cerca de destinos turísticos destacados en la región de Los Ríos. A poca distancia de Valdivia, con su vibrante vida cultural, Futrono y Lago Ranco, ideales para el ecoturismo y actividades acuáticas, y La Unión, rica en historia y patrimonio. Estos lugares ofrecen una combinación perfecta de naturaleza, aventura y cultura. Vivir aquí te permitirá disfrutar de la tranquilidad del campo sin renunciar a la cercanía con algunos de los sitios turísticos más importantes del sur de Chile.',
          buttonConfig: {
            type: 'link',
            url: 'https://maps.app.goo.gl/Pbr5WrZoPGFdsMdB6',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: 'Características',
          subtitle: '',
          description: 'Descubre nuestras parcelas de 5000m2, en las alturas cercanas a Paillaco, donde la tranquilidad de la naturaleza se une con la comodidad de servicios básicos cercanos. Con amplias áreas de terreno y vistas espectaculares a los bosques, estas parcelas ofrecen privacidad y contacto con la naturaleza. A pocos minutos de la Ruta 5 y del pueblo de Paillaco, tendrás acceso rápido a supermercados, colegios y centros de salud. Vive en un entorno natural único sin renunciar a la comodidad.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html',
            buttonText: 'Ver MasterPlan',
          },
        },
        {
          image: img4,
          videoUrl: "",
          title: 'Financiamiento',
          subtitle: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id libero et metus blandit laoreet sit amet at orci. Sed venenatis est dolor, at viverra sapien sodales id. Duis cursus sem nisl, ac tristique nibh scelerisque ut. Aenean massa nibh, eleifend eget lacinia non, iaculis in mauris. Proin sem lorem, feugiat quis lobortis quis, interdum nec dolor. Suspendisse quis nunc vitae ex iaculis sollicitudin. Nullam imperdiet dolor in urna porta auctor. Nam ut porta mi. Morbi pharetra nisi varius urna rutrum ultricies. Cras vel elit vitae ipsum semper aliquet a id est. Nullam dapibus leo in orci eleifend, a phar',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/+56962981160?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20Parcelas%20Paillaco',
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
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html', //
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
          iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/ParcelasPaillaco/index.html',
          buttonText: 'Ver Master Plan',
        },
      },
    ],

    carousel03: [
      //este carrusel corresponde a la galeria de imagenes
      {

        image: img6, 
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {

        image: img7, 
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img8,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img9,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      
      {
        image: img11,
        videoUrl: "",
        title: 'Parcelas Paillaco',
        subtitle: "",
        description: '',
        className: 'photoGallery',
      },
      {
        image: img2,
        videoUrl: "",
        title: 'Parcelas Paillaco',
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
    document.title = 'Parcelas Paillaco';
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
