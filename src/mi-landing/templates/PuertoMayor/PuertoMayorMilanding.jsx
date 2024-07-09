import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';



//importacion de recursos
import favUrl from './assets/fav.jpg'
import logo from './assets/logopm_b.png';
import parqueVicunaBkg from './assets/ParqueVicuna.jpg';
import foto01 from './assets/PilotoAragon.jpg';
import catalunaPiloto from './assets/CasaPilotoCataluna.jpg';
import catalunaA from './assets/CatalunaA.jpg';
import catalunaC2 from './assets/Catalunac2.jpg';
import catalunaGourmet from './assets/Gourmet.jpg';
import aragonPiloto from './assets/PilotoAragon.jpg';
import aragonPortada from './assets/AragonAerea.jpg';
import catalunaPortada from './assets/CatalunaAerea.jpg';
import puertoMayorIIPortada from './assets/PuertoMayor.jpg';


const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo,
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: "",
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita virtual!',
    iframeBackground: 'https://astra360.s3.sa-east-1.amazonaws.com/Backgrounds/MiLandingPuertoMayor/output/index.html',
    subtitles: ['Sumérgete en nuestros recorridos 360', 'Explora a tu propio ritmo, en cualquier momento y lugar', 'Elije tu futuro hogar desde la comodidad de tu sofá'],
    telefono: '+56998474178',
    instagramLink: 'https://www.instagram.com/inmobiliariapuertomayor/',
    facebookLink: 'https://facebook.com/puertomayor.inmobiliaria',
    gpsLink: 'https://maps.app.goo.gl/gfHdC1akMjBd6BzN8',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
    
    carousels: {
      carousel01: [
        {
          image: parqueVicunaBkg,
          videoUrl: "",
          title: 'PARQUE VICUÑA',
          subtitle: 'Avenida Ricardo Vicuña 812',
          description: '2 torres de 17 pisos, con departamentos estudio, de 1, 2 y 3 dormitorios, además de un moderno equipamiento, salón gourmet, gimnasio, piscina y espacios cowork para estudiantes y reuniones.',
          
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Parque-Vicu%C3%B1a/aerea/output/index.html',
            buttonText: 'Ver Vista aérea',
          },
        },
        {
          image: foto01,
          videoUrl: "",
          title: 'RESERVA AHORA',
          subtitle: 'Y aprovecha descuentos increibles',
          description: '.',
          buttonConfig: {
            type: 'link',
            url: 'https://wa.me/15551234567',
            buttonText: 'Reserva ahora',
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
            buttonText: 'Ver Master Plan',
          },
        },
        {
          image: aragonPiloto,
          videoUrl: "",
          title: 'VISITA PILOTO VIRTUAL',
          subtitle: 'Inmobiliarias, Proyectos de Parcelación',
          description: '19 casas de 102,92 m2, en dos niveles, de 3 dormitorios y 3 baños.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Aragon/CasaPiloto/output-1/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
      ],
      carousel03: [
        {
          image: catalunaPortada,
          videoUrl: "",
          title: 'CONDOMINIO CATALUÑA',
          subtitle: 'Avenida Ricardo Vicuña 1610',
          description: 'Condominio Cataluña está ubicado detrás del Barrio residencial Cataluña, con acceso por Av. Gabriela Mistral y también por Av. Alemania',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Aerea/output/index.html',
            buttonText: 'Ver Master Plan',
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
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaA,
          videoUrl: "",
          title: 'DEPARTAMENTO TIPO A',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+TIPO+A/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaC2,
          videoUrl: "",
          title: 'DEPARTAMENTO C2',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Depto+C2/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
        {
          image: catalunaGourmet,
          videoUrl: "",
          title: 'SALÓN GOURMET ',
          subtitle: '193 m2, 4 Dormitorios 4 Baños.  ',
          description: 'Casas con altos estandares de construcción, hormigon armado, pisos porcelanatos continuos, cocinas full equipadas, calefacción central y segundo dormitorio en suite.',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Puerto-Mayor/Condominio-Catalu%C3%B1a/Sal%C3%B3n+Gourmet/output/index.html',
            buttonText: 'Ver Master Plan',
          },
          
        },
      ],

      carousel04: [
        {
          image: puertoMayorIIPortada,
          videoUrl: "",
          title: 'PUERTO MAYOR II',
          subtitle: 'Bulnes 220, Los Ángeles',
          description: 'Al costado del Edificio Puerto Mayor I y en un sector residencial a pasos del centro de la ciudad, moderno sistema de oficinas con plantas libres, para que diseñes como necesites',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://s3.sa-east-1.amazonaws.com/tourvirtual.grupomarketing.cl/PuertoMayor/output/index.html',
            buttonText: 'Ver Master Plan',
          },
        },
      ]
    },
   
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Parque Vicuña' },
    { id: 'carousel02', texto: 'Aragón' },
    { id: 'carousel03', texto: 'Cataluña' },
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
