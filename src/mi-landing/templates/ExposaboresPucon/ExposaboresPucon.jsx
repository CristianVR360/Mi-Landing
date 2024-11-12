import React, { useEffect } from 'react';
import MiLanding from '../../pages/Preview/MiLanding';
//import MiLanding from '../../pages/Preview/MiLanding';

//importacion de recursos

//import videoBkg from './assets/bkg.mp4';
import logo from './assets/logo.png';
import favIcon from './assets/favicon.png';
import img1 from'./assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import puconchef from './assets/chefpucon.jpg';
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
import sucre from './assets/sucre.jpg';
import loretano from './assets/loretano.jpg';
import kombu from './assets/kombu.jpg';
import ninjapizza from './assets/ninjapizza.jpg';
import delalba from './assets/delalba.jpg';
import lacasita from './assets/lacasita.jpg';
import bergland from './assets/bergland.jpg';
import sweetvegan from './assets/sweetvegan.jpg';
import manuali from './assets/manuali.jpg';
import montañabee from './assets/montañabee.jpg';
import queen from './assets/queen.jpg';
import arteydelicias from './assets/arteydelicias.jpg';
import isabela from './assets/isabela.jpg';
import rusticos from './assets/rusticos..jpg';
import araucaniamilenaria from './assets/araucaniamilenaria.jpg';
import dispack from './assets/Dispack-LTDA.jpg';
import wenkimey from './assets/wenkimey.jpg';
import pacari from './assets/pacari.jpg';
import nuke from './assets/nuke.jpg';
import expo24 from './assets/expo24.jpg';




const TemplateMiLanding = () => {
  const landingPageData = {
    logo: logo , // Agrega la ruta de tu logo aquí
    colorPrimario: '#000000',
    colorSecundario: '#fff',
    colorPrimarioTransparente: 'rgba(23, 23, 23,23.8)',
    colorTerciario: '#4a4a4a', //botones del carrusel
    colorCuaternario: '#34495e', 
    backgroundImage: img1 ,
    title: 'Sabores auténticos en un festival gastronómico único.',
    bookButtonText: 'Book Now',
    bookDescription: 'Schedule a consultation with us today.',
    consultationButtonText: 'Get Consultation',
    ctaWhatsappButton: '¡Más Información!',
    iframeBackground: '',
    subtitles: ['Saboreando 10 años de historia gastronómica', 'Hotel Enjoy Pucón'],
    telefono: '',
    message: "¡Hola! Quiero más información.",
    instagramLink: 'https://www.instagram.com/exposaborespucon/',
    facebookLink: '',
    footerText:'pucon.exposabores@gmail.com',
    gpsLink: 'https://goo.gl/maps/MGfArjqFhd6V3HP88',
    linkedinLink:"",
    footerAfterStyles: {
      background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 5%, rgba(0, 0, 0, 0.4) 20%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.9) 70%, rgba(0, 0, 0, 1) 100%)",

      textColor: '#fff'
    },




    carousels: {
      //aqui va el brochure
      carousel01: [
        {
          image: puconchef,
          videoUrl: "",
          title: 'Pucón Chef',
          subtitle: "Conoce nuestra Historia.",
          description: 'Te queremos contar un poco sobre nosotros, quien es Pucón Chef, la agrupación que está detrás de este maravilloso festival que es ¨Expo Sabores Pucón”. ¡Desliza! ',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: img2,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: 'Pucón Chef  nace en el año 2011, constituyéndose formalmente un año después. Se gesta como respuesta a unir a chef principalmente de la comuna de Pucón, de ahí su nombre, pero hoy día contamos también con socios de otras comunas de la región de la Araucanía. A través de esta agrupación buscamos siempre vincular la gastronomía a diferentes áreas productivas, comerciales, turísticas y educativas. ',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: img1,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: 'Así nace Expo Sabores Pucón, una vitrina para productores locales y espacio de intercambio culinario. Hoy, ya en su onceava versión, es uno de los festivales gastronómicos más destacados del sur de Chile. Durante años, hemos colaborado con emprendedores de la zona, ofreciendo productos como conservas, mermeladas, chocolates, pastas de ají, encurtidos, frutas, verduras, cervezas artesanales, licores, carnes de crianza libre, lácteos, hongos, hierbas botánicas y una creciente variedad de productos orgánicos para cosmetología, cuidado personal y alimentación saludable.',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
        {
          image: img6,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: 'Expo Sabores Pucón, más allá de ser un festival, se ha transformado en parte de la identidad de esta región motivando a otras comunas a realizar eventos de esta envergadura. Y hoy en su aniversario número 11, vamos por mucho más.',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
        },
       
        
      ],

      carousel02: [        
      
        {
          image: expo24,
          videoUrl: "",
          title: 'ExpoSabores 2024',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'popup',
            iframeUrl: 'https://astra360.s3.sa-east-1.amazonaws.com/Exposabores2024/output/index.html',
            buttonText: '¡Revive la experiencia!',
          },
          
        },
        {
          image: img7,
          videoUrl: "",
          title: 'ExpoSabores 2024',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://youtu.be/GB6VU8qyFOM',
            buttonText: '¡Revive la experiencia!',
          },
          
        },
      ],
      carousel03: [
        {
          image: sucre,
          videoUrl: "",
          title: 'SUCRE',
          subtitle: "Productos Ancestrales Y Naturales",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/sucrehuertofusion/',
            buttonText: 'Instagram',
          },
          
        },
        {
          image: loretano,
          videoUrl: "",
          title: 'Loretano',
          subtitle: "Disfruta lo mejor de la comida Peruana y Sabores Latinos🇵🇪. Cocinamos con el ❤️.",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/kombupucon/?hl=es',
            buttonText: 'Instagram',
          },
         
        },
        {
          image: kombu,
          videoUrl: "",
          title: 'Kombu',
          subtitle: "Sushi/Gyozas/Ceviches",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/kombupucon/?hl=es',
            buttonText: 'Instagram',
          },
          
        },
        {
          image: ninjapizza,
          videoUrl: "",
          title: 'Ninja Pizza',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/ninjapizzapucon/?hl=es-la',
            buttonText: 'Instagram',
          },
         
        },
        {
          image: delalba,
          videoUrl: "",
          title: 'Del alba',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/delalbapucon/?hl=es',
            buttonText: 'Instagram',
          },
          
        },
        {
          image: lacasita,
          videoUrl: "",
          title: 'La Casita del Chocolate',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/lacasitadelchocolate.tco/',
            buttonText: 'Instagram',
          },
          
        },
        {
          image: bergland,
          videoUrl: "",
          title: 'Berg land',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/bergland.cl/?hl=es',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: sweetvegan,
          videoUrl: "",
          title: 'Vegan Sweet',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.facebook.com/profile.php?id=100052214146002',
            buttonText: 'Más información',
          },
      
        },
        {
          image: manuali,
          videoUrl: "",
          title: 'Manuali.fc',
          subtitle: "Artesanías en madera, juguetes, estampados y todo lo que quieras para un regalo especial y único",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/manuali.fc/',
            buttonText: 'Más información',
          },
      
        },
        {
          image: montañabee,
          videoUrl: "",
          title: 'Montaña Bee',
          subtitle: "Miel 100% Natural - Pucón",
          description: 'Apicultura amigable y consciente',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/montanabee.cl/',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: queen,
          videoUrl: "",
          title: 'Queen Fizz',
          subtitle: "Más que un syrup.",
          description: 'Syrup 100% de espumante de manzana limona, el 1° a base de fermentado.🥇',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/queenfizzsyrup/?hl=es-la',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: arteydelicias,
          videoUrl: "",
          title: 'Arte y Delicias',
          subtitle: "Chocolatería italiana",
          description: 'Venta al por mayor y al detalle',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/arteydeliciasgourmet/',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: isabela,
          videoUrl: "",
          title: 'Isabela Joyas',
          subtitle: "Plata y piedras naturales",
          description: 'Joyas a pedido, trabajo en Plata y piedras naturales, hechas a mano, despacho a todo 🇨🇱 Las piedras nos comparten sus propiedades, disfrútalas!',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/isabelapuntocl/?hl=es',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: rusticos,
          videoUrl: "",
          title: 'Rusticos Coyan',
          subtitle: "Artesanía en maderas inertes apellinadas",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/rusticos_coyan/',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: araucaniamilenaria,
          videoUrl: "",
          title: 'Araucania Milenaria',
          subtitle: "🌿 Ilustraciones con paisajes y aves de🇨🇱 que te conectarán💚",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/araucania_milenaria/',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: dispack,
          videoUrl: "",
          title: 'DISPACK® Chillán',
          subtitle: "Venta de Art. desechables y Repostería",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/dispackchillan/',
            buttonText: 'Instagram',
          },
      
        },
        {
          image: wenkimey ,
          videoUrl: "",
          title: 'WEN KIMEY ALIMENTO ANCESTRAL',
          subtitle: "Productos a base de piñón alimento ancestral mapuche, recolectado de forma sustentable por familias pewenche en la zona cordillerana de Lonquimay.",
          description: '',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/wen_kimey_alimento_ancestral/',
            buttonText: 'Instagram',
          },
          
      
        },
        {
          image: pacari ,
          videoUrl: "",
          title: 'Paccari chile',
          subtitle: "N*1 del Mundo",
          description: '100% Orgánico',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/paccarichile/',
            buttonText: 'Instagram',
          },
          
      
        },
        {
          image: nuke ,
          videoUrl: "",
          title: 'Ñuke Medicina Mapuche',
          subtitle: "",
          description: 'Somos un emprendimiento familiar👨‍👩‍👦‍👦de la cordillerana comuna de lonquimay, 🏔contamos con un huerto medicinal, realizamos recolección consciente',
          buttonConfig: {
            type: 'link',
            url: 'https://www.instagram.com/nukemedicinamapuche2/',
            buttonText: 'Instagram',
          },
          
      
        },

      ],

      carousel04: [
        {
          image: img1,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '.',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img4,
          videoUrl: "",
          title: '  ',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img5,
          videoUrl: "",
          title: '  ',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img3,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },

        {
          image: img5,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img6,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img7,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img8,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img9,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img10,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img11,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img12,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img13,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img14,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img15,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img16,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img17,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        {
          image: img18,
          videoUrl: "",
          title: '',
          subtitle: "",
          description: '',
          buttonConfig: {
            type: 'link',
            url: '',
            buttonText: 'Más información',
          },
          className: 'photoGallery',
        },
        

        
      ],
      

    
    
    
    

    

    
    
    
    



    }
  
  };

  const opciones = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'carousel01', texto: 'Quienes somos' },
    { id: 'carousel02', texto: 'Exposabores 2024' },
    { id: 'carousel03', texto: 'Espositores' },
    { id: 'carousel04', texto: 'Galería' },

   
    
    
  ];

  useEffect(() => {
    document.title = 'Exposabores Pucón';
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
