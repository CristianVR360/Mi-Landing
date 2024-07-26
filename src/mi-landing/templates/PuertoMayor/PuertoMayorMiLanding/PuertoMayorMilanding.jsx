import React, { useEffect } from 'react';
import MiLanding from '../../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/Recurso 1.png';
import parqueVicunaBkg from './assets/ParqueVicuna.jpg';

//import parqueVicunaBkg2 from './assets/parque-vicuna-proyecto.jpg';
//import foto01 from './assets/PilotoAragon.jpg';

import catalunaPiloto from './assets/CasaPilotoCataluna.jpg';
import catalunaA from './assets/CatalunaA.jpg';
import catalunaC2 from './assets/Catalunac2.jpg';
import catalunaC1 from './assets/Catalunac1.jpg';
import catalunaGourmet from './assets/Gourmet.jpg';
import aragonPiloto from './assets/PilotoAragon.jpg';
import aragonPortada from './assets/AragonAerea.jpg';
import catalunaPortada from './assets/CatalunaAerea.jpg';
import puertoMayorIIPortada from './assets/PuertoMayor.jpg';
import puertoMayorIIPortada2 from './assets/PuertoMayorII2.jpg';
import edificioPortada from './assets/EdificioPortada.jpg';
import workCafe from './assets/work-cafe.jpg';
import EdificioPortada2 from './assets/EdificioAragon2.jpg';
import catalunaPortadaCasas from './assets/CasasCataluna.jpg';
import parqueVicuna03 from './assets/parquevicuna03.jpg';
import bkgcarousel2 from './assets/parque-vicuna-proyecto-banner.jpg';

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
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Elije tu futuro hogar desde la comodidad de tu sofá', ],
    telefono: '+56998474178',
    message:'Necesito más información sobre el proyecto',
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
          subtitle: 'PROYECTO',
          description: 'Un espacio único que contempla 2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/ParqueVicu%C3%B1a-Fachada/output/index.html',
            buttonText: 'Ver Proyecto',
          },
        },
        {
          image: bkgcarousel2,
          videoUrl: "",
          title: 'UBICACIÓN CÉNTRICA',
          subtitle: 'Av. Ricardo Vicuña 812',
          description: 'Cercano a parques, universidades, supermercado, servicentros, ciclovías y más.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/ParqueVicu%C3%B1a-Emplazamiento/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: parqueVicuna03,
          videoUrl: "",
          title: 'PARQUE VICUÑA',
          subtitle: 'ESPACIOS',
          description: 'Moderno equipamiento, salón gourmet, gimnasio, piscina, taller de bicicletas y espacios cowork.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://www.puertomayor.cl/index.php?action=parque-vicuna',
            buttonText: 'Ver sitio web',
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
          subtitle: '19 casas de 102,92 m², en dos niveles, de 3 dormitorios y 3 baños.',
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
          image: EdificioPortada2,
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
          image: catalunaPortadaCasas,
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
          subtitle: '193 m², 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Casa+Piloto/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },

      ],
      carousel05: [
       
        {
          image: catalunaPortada,
          videoUrl: "",
          title: 'CONDOMINIO CATALUÑA',
          subtitle: 'Barrio residencial Cataluña, con acceso por Av. Gabriela Mistral y también por Av. Alemania',
          description: 'Los departamentos del proyecto cuentan con pisos de porcelanato continuos, amplias terrazas, cocinas amobladas con cubiertas de silestone, horno eléctrico, encimera y campana. Además, disponen de ventanas termopanel con marcos de PVC, calefacción central a gas individual y baños principales con shower door.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },

        {
          image: catalunaA,
          videoUrl: "",
          title: 'DEPARTAMENTO TIPO A',
          subtitle: '61 m², 2 Dormitorios 2 Baños.  ',
          description: ' Dispone de 2 dormitorios amplios y luminosos, perfectos para el descanso, y 2 baños modernos y equipados con todas las comodidades necesarias. Además, incluye un estar versátil, ideal para relajarse o recibir a tus invitados. La amplia terraza te permitirá disfrutar de momentos al aire libre, con espacio suficiente para crear un ambiente acogedor y relajante. ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+TIPO+A/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
        {
          image: catalunaC1,
          videoUrl: "",
          title: 'DEPARTAMENTO C1',
          subtitle: '121,95 m² y una terraza de 26,66 m², 3 Dormitorios 3 Baños.  ',
          description: 'Ofrece un espacio generoso y elegante, ideal para quienes buscan amplitud y confort en su hogar. Dispone de 3 dormitorios espaciosos y luminosos, perfectos para el descanso, y 3 baños modernos y completamente equipados. Además, incluye un estar amplio y versátil, ideal para relajarse o recibir a tus invitados. La extensa terraza te permitirá organizarla a tu medida, con espacio suficiente para crear un ambiente acogedor y relajante. ',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+C1/output/index.html',
            buttonText: 'Ver Tour Virtual',
          },
          
        },
        {
          image: catalunaC2,
          videoUrl: "",
          title: 'DEPARTAMENTO C2',
          subtitle: '124,39 m², 3 Dormitorios 3 Baños.  ',
          description: 'Ofrece un espacio generoso y elegante, ideal para quienes buscan amplitud y confort en su hogar. Dispone de 3 dormitorios espaciosos y luminosos, perfectos para el descanso, y 3 baños modernos y completamente equipados. Además, incluye un estar amplio y versátil, ideal para relajarse o recibir a tus invitados. La extensa terraza te permitirá organizarla a tu medida, con espacio suficiente para crear un ambiente acogedor y relajante.',
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

      carousel06: [
        {
          image: puertoMayorIIPortada,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, conoce este moderno edificio de oficinas de plantas libres.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-Emplazamiento/output/index.html',
            buttonText: 'Ver ubicación',
          },
        },
        {
          image: puertoMayorIIPortada2,
          videoUrl: "",
          title: 'Locales Comerciales',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'En el primer piso contamos con 7 locales comerciales de un piso, con superficies de 39 a 92m², en plantas libres, cerca de puntos estratégicos de la ciudad. Quedan pocas unidades disponibles para arriendo.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-Fachada/output/index.html',
            buttonText: 'Ver Fachada',
          },
        },
        {
          image: workCafe,
          videoUrl: "",
          title: 'SALA DE REUNIONES Y WORK CAFÉ ',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Contamos con cómodas y amplias salas de reuniones de uso común, y un work café en el hall del edificio para tener un espacio de relajo y trabajo.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Puerto-Mayor-II/PuertoMayorII-WorkCafe/output/index.html',
            buttonText: 'Ver Work Café',
          },
        },
      ]
    },
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Parque Vicuña' },
    { id: 'carousel02', texto: 'Aragón Casas' },
    { id: 'carousel03', texto: 'Aragón Deptos' },
    { id: 'carousel04', texto: 'Cataluña Casas' },
    { id: 'carousel05', texto: 'Cataluña Deptos' },
    { id: 'carousel06', texto: 'Puerto Mayor II' },
    
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
