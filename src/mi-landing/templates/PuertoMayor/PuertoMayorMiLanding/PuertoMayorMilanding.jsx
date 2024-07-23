import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/Recurso 1.png';
import parqueVicunaBkg from './assets/ParqueVicuna.jpg';
import parqueVicunaBkg2 from './assets/parque-vicuna-proyecto.jpg';
//import foto01 from './assets/PilotoAragon.jpg';
import catalunaPiloto from './assets/CasaPilotoCataluna.jpg';
import catalunaA from './assets/CatalunaA.jpg';
import catalunaC2 from './assets/Catalunac2.jpg';
import catalunaGourmet from './assets/Gourmet.jpg';
import aragonPiloto from './assets/PilotoAragon.jpg';
import aragonPortada from './assets/AragonAerea.jpg';
import catalunaPortada from './assets/CatalunaAerea.jpg';
import puertoMayorIIPortada from './assets/PuertoMayor.jpg';
import puertoMayorIIPortada2 from './assets/PuertoMayorII2.jpg';
import edificioPortada from './assets/EdificioPortada.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#4d9dd2 ',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.8)',
    colorTerciario: '#313131',
    colorCuaternario: '#34495e',
    backgroundImage: "",
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Contáctate con nosotros!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Explora a tu propio ritmo, en cualquier momento y lugar', 'Elije tu futuro hogar desde la comodidad de tu sofá'],
    telefono: '+56998474178',
    footerText:"ventaslosangeles@ipuertomayor.cl",
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    linkedinLink: 'https://www.linkedin.com/company/inmobiliariapuertomayor',
    gpsLink: 'https://maps.app.goo.gl/gfHdC1akMjBd6BzN8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(52, 152, 219, 0) 0%, rgba(52, 152, 219, 0.2) 5%, rgba(52, 152, 219, 0.4) 20%, rgba(52, 152, 219, 0.7) 50%, rgba(52, 152, 219, 0.9) 70%, rgba(52, 152, 219, 1) 100%)",

      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: parqueVicunaBkg,
          videoUrl: "",
          title: 'PARQUE VICUÑA',
          subtitle: 'Avenida Ricardo Vicuña 812',
          description: 'Parque Vicuña, ubicado en plena avenida Ricardo Vicuña y frente al supermercado Jumbo, es un espacio privilegiado en la ciudad. Cercano a áreas verdes como la lagunas esmeralda, el estadio municipal e incluso la propia avenida que ofrece paseos, parques y una importante ciclovía. Además, destaca su proximidad a importantes instituciones educativas como Inacap y Santo Tomás, así como al centro de la ciudad, lo que lo convierte en un punto estratégico y accesible para todos.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: parqueVicunaBkg2,
          videoUrl: "",
          title: 'EDIFICIO PARQUE VICUÑA',
          subtitle: 'PRÓXIMAMENTE',
          description: '2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios, además de un moderno equipamiento, salón gourmet, gimnasio, piscina y espacios cowork para estudiantes y reuniones.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        
      ],
      carousel02: [
        {
          image: aragonPortada,
          videoUrl: "",
          title: 'CONDOMINIO ARAGON',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Ubicado en el consolidado sector Villa Cataluña de Los Ángeles, con acceso por Av. Gabriela Mistral y posteriormente también por Av. Alemania',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: aragonPiloto,
          videoUrl: "",
          title: 'VISITA PILOTO VIRTUAL',
          subtitle: '19 casas de 102,92 m2, en dos niveles, de 3 dormitorios y 3 baños.',
          description: 'Ventanas de termopanel con marcos de PVC folio blanco, cocina equipada con campana, encimera a gas, horno empotrado y cubiertas de granito. El dormitorio principal en suite incluye baño con shower door y walk-in closet. Pisos de pavimentos cerámicos continuos completan el diseño.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/CasaPiloto/output-1/index.html',
            buttonText: 'Ver Tour Virtual',
          },
        },
      ],
      carousel03: [
        {
          image: edificioPortada,
          videoUrl: "",
          title: 'EDIFICIO ARAGÓN',
          subtitle: 'PRÓXIMAMENTE',
          description: 'Edificio Aragón estará ubicado en el consolidado sector Villa Cataluña de Los Ángeles, con acceso por Av. Gabriela Mistral y posteriormente también por Av. Alemania, lo que mejorará la conectividad hacia todos los servicios que necesitas.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: edificioPortada,
          videoUrl: "",
          title: 'AVANCES CONTRUCCIÓN',
          subtitle: '2024',
          description: 'Edificio de 7 pisos con un total de 56 departamentos, de 1, 2 y 3 dormitorios, con metrajes desde 36 m² hasta 79m²',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/Fachada-Arag%C3%B3n/output/index.html',
            buttonText: 'Ver avances',
          },
        },
    ],
      carousel04: [
        {
          image: catalunaPortada,
          videoUrl: "",
          title: 'CONDOMINIO CATALUÑA',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Condominio Cataluña está ubicado detrás del Barrio residencial Cataluña, con acceso por Av. Gabriela Mistral y también por Av. Alemania',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: catalunaPiloto,
          videoUrl: "",
          title: 'CASA PILOTO',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
        {
          image: catalunaA,
          videoUrl: "",
          title: 'DEPARTAMENTO TIPO A',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Los departamentos del proyecto cuentan con pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, horno eléctrico, encimera y campana. Además, disponen de ventanas termopanel con marcos de PVC, calefacción central a gas individual y baños principales con shower door.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+TIPO+A/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
        {
          image: catalunaC2,
          videoUrl: "",
          title: 'DEPARTAMENTO C2',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Los departamentos del proyecto cuentan con pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, horno eléctrico, encimera y campana. Además, disponen de ventanas termopanel con marcos de PVC, calefacción central a gas individual y baños principales con shower door.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+C2/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
        {
          image: catalunaGourmet,
          videoUrl: "",
          title: 'SALÓN GOURMET ',
          subtitle: 'Elegante, moderno, versátil, acogedor, exclusivo',
          description: 'Descubre un espacio exclusivo diseñado para celebrar la vida y compartir momentos inolvidables con familiares y amigos. Nuestro Salón Gourmet tipo Quincho combina elegancia y comodidad, creando el ambiente perfecto para tus reuniones sociales y eventos especiales.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Sal%C3%B3n+Gourmet/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
      ],

      carousel05: [
        {
          image: puertoMayorIIPortada2,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, moderno sistema de oficinas con plantas libres, para que diseñes como necesites',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        
        {
          image: puertoMayorIIPortada,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, moderno sistema de oficinas con plantas libres, para que diseñes como necesites',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
      ]
    },
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Parque Vicuña' },
    { id: 'carousel02', texto: 'Aragón' },
    { id: 'carousel03', texto: 'Aragón Deptos' },
    { id: 'carousel04', texto: 'Puerto Mayor II' },
    { id: 'carousel04', texto: 'Puerto Mayor II' },
    { id: 'carousel04', texto: 'Puerto Mayor II' },
    
  ];

  useEffect(() => {
    document.title = 'Puerto Mayor';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href =  favUrl;

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
