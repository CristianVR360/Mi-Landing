// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación dinámica de los componentes de clientes
const PuertoMayorMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/PuertoMayorMiLanding/PuertoMayorMilanding'));
const HoffmanyWiller = lazy(() => import('./mi-landing/templates/hyw/HyWMiLanding')); 
const PuertoMayorCatalunaMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/CataluñaMiLanding/Cataluña'));
const PuertoMayorAragonMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/AragonMiLanding/Aragon'));
const PuertoMayorPuertoMAyorIIMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/PuertoMayorIIMiLanding/PuertoMayorII'));
const ParqueVicuna = lazy(() => import('./mi-landing/templates/PuertoMayor/ParqueVicunaMiLanding/ParqueVicunaMiLanding'));
const Ayurbana = lazy(() => import('./mi-landing/templates/AyurbanaMiLanding/AyurbanaMiLanding'));
const AinhoaBaby = lazy(() => import('./mi-landing/templates/AinhoaMiLanding/AinhoaMiLanding'));
const SantaFelicia = lazy(()=> import('./mi-landing/templates/SantaFeliciaMiLanding/SantaFeliciaMiLanding'));
const PonteVedra = lazy(()=> import ('./mi-landing/templates/Nualart/Pontevedra/PontevedraMiLanding'));
const GardenClub = lazy(()=> import ('./mi-landing/templates/GardenClub/GardenClub'));
const BosquesDeQuilentue = lazy(()=> import ('./mi-landing/templates/BosquesDeQuilentue/BosquesDeQuilentue'));
const LosTordos = lazy(()=> import ('./mi-landing/templates/LosTordos/LosTordos'));
const MarcosWiller = lazy(()=> import ('./mi-landing/templates/MarcosWiller/MarcosWiller'));
const Chaignal = lazy(()=> import ('./mi-landing/templates/Chaignal/Chaignal'));
const Astra360 = lazy(()=> import ('./mi-landing/templates/Astra.360/Astra.360'));
const EspacioZurich = lazy(()=> import ('./mi-landing/templates/Helvetica/EspacioZurich'));
const GeoPunto = lazy(()=> import ('./mi-landing/templates/GeoPunto/GeoPunto'));
const RioChepu = lazy(()=> import ('./mi-landing/templates/RioChepu/RioChepu'));
const ParcelasVillarrica = lazy(()=> import ('./mi-landing/templates/ParcelasVillarrica/ParcelasVillarrica'));
const Emdo = lazy(()=> import ('./mi-landing/templates/Emdo/Emdo'));
const VogelHaus = lazy(()=> import ('./mi-landing/templates/VogelHaus/VogelHaus'));
const TecnoAraucania = lazy(()=> import ('./mi-landing/templates//TecnoAraucania/TecnoAraucania'));
const HTVilcun = lazy(()=> import ('./mi-landing/templates/HTVilcun/HTVilcun'));
const ServiciosDeDrone = lazy(()=> import ('./mi-landing/templates/ServiciosDrone/ServiciosDeDrone'));
const HaciendaDelRanco = lazy(()=> import ('./mi-landing/templates/HaciendaDelRanco/HaciendaDelRanco'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Astra360 />} />
          <Route path="/astra360" element={<Astra360 />} />
          <Route path="/Puerto-Mayor" element={<PuertoMayorMiLanding />} />
          <Route path="/Hoffman-y-Willer" element={<HoffmanyWiller/>} />
          <Route path="/Puerto-Mayor-Cataluna" element={<PuertoMayorCatalunaMiLanding />} />
          <Route path="/Puerto-Mayor-Aragon" element={<PuertoMayorAragonMiLanding />} />
          <Route path="/Puerto-Mayor-Puerto-Mayor-II" element={<PuertoMayorPuertoMAyorIIMiLanding />} /> 
          <Route path="/Puerto-Mayor-Parque-Vicuña" element={<ParqueVicuna />} />
          <Route path="/Ayurbana" element={<Ayurbana />} />
          <Route path="/Ainhoa-Baby-Shower" element={<AinhoaBaby />} />
          <Route path="/Santa-Felicia" element = {< SantaFelicia/>} />
          <Route path="/Nualart-PonteVedra" element={<PonteVedra/>}/>
          <Route path="/Garden-club" element={<GardenClub/>}/>
          <Route path="/Bosques-de-Quilentue" element={<BosquesDeQuilentue/>}/>
          <Route path="/Los-Tordos" element={<LosTordos/>}/>
          <Route path="/Marcos-Willer" element={<MarcosWiller/>}/>
          <Route path="/Parcelas-Chaignal" element={<Chaignal/>}/>
          <Route path="/EspacioZurich" element={<EspacioZurich/>}/>
          <Route path="/GeoPunto" element={<GeoPunto/>}/>
          <Route path="/RioChepu" element={<RioChepu/>}/>
          <Route path="/Parcelas-Villarrica" element={<ParcelasVillarrica/>}/>
          <Route path="/Emdo" element={<Emdo/>}/>
          <Route path="/VogelHaus" element={<VogelHaus/>}/>
          <Route path="/TecnoAraucania" element={<TecnoAraucania/>}/>
          <Route path="/HT-Vilcun" element={<HTVilcun/>}/>
          <Route path="/ServiciosDeDrone" element={<ServiciosDeDrone/>}/>
          <Route path="/HaciendaDelRanco" element={<HaciendaDelRanco/>}/>
          {/* Agrega más rutas para otros clientes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
