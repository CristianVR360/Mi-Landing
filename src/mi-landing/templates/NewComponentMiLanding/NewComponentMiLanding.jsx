import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

// const logo = '';
// const parqueVicunaBkg = '';
// const foto01 = '';
// const catalunaPiloto = '';
// const catalunaA = '';
// const catalunaC2 = '';
// const catalunaGourmet = '';
// const aragonPiloto = '';
// const aragonPortada = '';
// const catalunaPortada = '';

const Astra360MiLanding = () => {
  const landingPageData = {
    logo: '', // Agrega la ruta de tu logo aquí
    colorPrimario: '#3498db',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(52, 152, 219, 0.5)',
    colorTerciario: '#9b59b6',
    colorCuaternario: '#34495e',
    backgroundImage: '',
    title: 'Tour Virtual',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Agenda tu visita virtual!',
    iframeBackground: '',
    subtitles: ['Subtitulo 1', 'Subtitulo 2', 'Subtitulo 3'],
    carousels: {
      carousel01: [
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 1',
          subtitle: 'Subtitulo 1',
          description: 'Descripción 1',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 2',
          subtitle: 'Subtitulo 2',
          description: 'Descripción 2',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Reserva ahora',
          },
        },
      ],
      carousel02: [
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 3',
          subtitle: 'Subtitulo 3',
          description: 'Descripción 3',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 4',
          subtitle: 'Subtitulo 4',
          description: 'Descripción 4',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
      ],
      carousel03: [
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 5',
          subtitle: 'Subtitulo 5',
          description: 'Descripción 5',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
        {
          image: '',
          videoUrl: '',
          title: 'Titulo 6',
          subtitle: 'Subtitulo 6',
          description: 'Descripción 6',
          buttonConfig: {
            type: 'popup',
            iframeUrl: '',
            buttonText: 'Ver más',
          },
        },
      ],
    },
    telefono: '',
    instagramLink: '',
    facebookLink: '',
    gpsLink: '',
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 179, 152, 0) 0%, rgba(0, 179, 152, 0.2) 5%, rgba(0, 179, 152, 0.4) 20%, rgba(0, 179, 152, 0.7) 50%, rgba(0, 179, 152, 0.9) 70%, rgba(0, 179, 152, 1) 100%)",
      textColor: '#f1f1f1'
    },
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Carousel 1' },
    { id: 'carousel02', texto: 'Carousel 2' },
    { id: 'carousel03', texto: 'Carousel 3' },
    { id: 'carousel04', texto: 'Carousel 4' },
  ];

  useEffect(() => {
    document.title = 'MiLanding';
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = 'default_favicon.ico';

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

export default Astra360MiLanding;
