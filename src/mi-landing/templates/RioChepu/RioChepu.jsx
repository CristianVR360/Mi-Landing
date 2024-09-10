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
//import img7 from './assets/img7.jpg';
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
    ctaWhatsappButton: '¡Contáctanos!',
    iframeBackground: '',
    subtitles: ['Inspirados en la agricultura ecológica y biodinámica ', 'Comprometidos con la salud del suelo, la biodiversidad y un futuro sostenible.', 'Preocupados por el bienestar de las personas, la sociedad y el planeta', ],
    telefono: '+56940465696',
    message: "¡Hola! Quiero más información.",
    instagramLink: '',
    facebookLink: '',
    footerText:'secretaria@riochepu.cl',
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
          title: 'Agrícola Rio chepu',
          subtitle: "Malalhue, Región de los Rios. ",
          description: 'Agrícola Río Chepu es una empresa familiar ubicada en la Región de Los Ríos, al sur de Chile, a 800 km de Santiago. Situada en plena Ruta 203, se encuentra inmersa en los impresionantes paisajes del sur, rodeada de maravillas naturales como el Parque Nacional Huerquehue, la Ruta de los Lagos y la histórica ciudad de Valdivia y la imponente cordillera de los Ándes. Especializada en la producción de arándanos de alta calidad 100% orgánicos, la agrícola combina prácticas sostenibles con un profundo compromiso social. Río Chepu no solo contribuye al bienestar de la comunidad local en Malalhue, sino que también promueve el crecimiento económico y la preservación del entorno natural que la rodea, siendo un referente de responsabilidad y calidad en su sector',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.youtube.com/embed/IJZB19xo_8k',
            buttonText: 'Ver video',
          },
        },
        {
          image: img11,
          videoUrl: "",
          title: 'Certificación "Agricultura Ecologica en Chile"',
          subtitle: 'Ley 20.089',
          description: 'Agricola Rio Chepu cuenta con la certificacion "Agricultura Ecologica en Chile" que asegura que sus prácticas agrícolas cumplen con estrictos estándares nacionales para la producción orgánica. Esta normativa regula el uso de insumos naturales y la prohibición de químicos sintéticos, asegurando que los productos son cultivados de manera sustentable, protegiendo el medio ambiente y la biodiversidad. Además, la certificación garantiza que los productos son libres de organismos genéticamente modificados (OGM) y promueve prácticas agrícolas que mejoran la fertilidad del suelo y la salud de los ecosistemas locales. ',
          buttonConfig: {
            type: 'link',
            url: 'https://drive.google.com/file/d/1INlBcXMmyZ2waZz1h-w4XEoBLSZBtT9R/view?usp=sharing',
            buttonText: 'Descargar Documento',
          },
        },
        {
          image: img3,
          videoUrl: "",
          title: 'Certificación "Agricultura orgánica en Estados Unidos"',
          subtitle: 'USDA NOP',
          description: 'La certificación USDA NOP (National Organic Program) en Estados Unidos, otorgada por el Departamento de Agricultura de los Estados Unidos, asegura que la Agrícola Riochepu cumple con los estándares internacionales de producción orgánica reconocidos globalmente. Esta certificación regula de manera estricta el uso de pesticidas, herbicidas y fertilizantes sintéticos, y establece normas para la preservación de los recursos naturales y la biodiversidad. El USDA NOP también garantiza la integridad orgánica a lo largo de toda la cadena de suministro, desde la producción hasta el etiquetado, permitiendo el acceso a mercados internacionales y posicionando a la Agrícola Riochepu como un productor confiable de productos orgánicos de alta calidad.',
          buttonConfig: {
            type: 'link',
            url: 'https://drive.google.com/file/d/1psWH39UZBQL1v2KYbYFoSvA7fFiIjA2v/view?usp=drive_link',
            buttonText: 'Descargar Documento',
          },
        },
      
      ],
      

    carousel02:[
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
        title: 'Trabaja con nosotros',
        subtitle: '',
        description: 'Únete a la familia de Agrícola Río Chepu, Fundo Chaignal, y sé parte de una empresa que valora a su gente tanto como a su tierra. Te brindamos un entorno seguro y amigable, con horarios de trabajo matutinos que te permiten disfrutar de tus tardes libres. Trabaja bajo techos que protegen del sol, en instalaciones de primer nivel, y forma parte de un equipo que comparte nuestra pasión por la agricultura orgánica y el bienestar de nuestra comunidad. ¡Te esperamos!',
        buttonConfig: {
          type: 'link',
          url: '',
          buttonText: 'Contáctanos',
        },
      },
      {
        image: img1 ,
        videoUrl: "",
        title: 'Reglamento Interno de la empresa',
        subtitle: '',
        description: 'Te invitamos a revisar el Reglamento Interno de Agrícola Río Chepu, Fundo Chaignal. Es fundamental que lo leas, ya que establece las normas, condiciones, obligaciones, derechos y deberes tanto de la empresa como de sus trabajadores. Este reglamento forma parte esencial de tu contrato de trabajo y te ayudará a conocer mejor el funcionamiento de nuestra empresa, asegurando un ambiente laboral seguro y respetuoso para todos. ¡Conócenos y descubre cómo juntos podemos trabajar mejor!',
        buttonConfig: {
          type: 'link',
          url: 'https://drive.google.com/file/d/1ukFeveOn9f_BmxelOVgNcpui6E37fGjp/view?usp=sharing',
          buttonText: 'Descargar Documento',
        },
      },
    ]
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Presentación' },
    { id: 'carousel02', texto: 'Productos' },
    { id: 'carousel03', texto: 'Trabaja con nosotros' },
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
