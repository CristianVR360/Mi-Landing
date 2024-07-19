// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación dinámica de los componentes de clientes
const Astra360MiLanding = lazy(() => import('./mi-landing/templates/Astra360MiLanding/Astra360MiLanding'));
const PuertoMayorMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/PuertoMayorMiLanding/PuertoMayorMilanding'));
const HoffmanyWiller = lazy(() => import('./mi-landing/templates/hyw/HyWMiLanding')); 
const PuertoMayorCatalunaMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/CataluñaMiLanding/Cataluña'));
const PuertoMayorAragonMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/AragonMiLanding/Aragon'));
const PuertoMayorPuertoMAyorIIMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/PuertoMayorIIMiLanding/PuertoMayorII'));
const ParqueVicuna = lazy(() => import('./mi-landing/templates/PuertoMayor/ParqueVicunaMiLanding/ParqueVicunaMiLanding'));
const Ayurbana = lazy(() => import('./mi-landing/templates/AyurbanaMiLanding/AyurbanaMiLanding'));
const AinhoaBaby = lazy(() => import('./mi-landing/templates/AinhoaMiLanding/AinhoaMiLanding'));
const SantaFelicia = lazy(()=> import('./mi-landing/templates/SantaFeliciaMiLanding/SantaFeliciaMiLanding'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Astra360MiLanding />} />
          <Route path="/Puerto-Mayor" element={<PuertoMayorMiLanding />} />
          <Route path="/Hoffman-y-Willer" element={<HoffmanyWiller/>} />
          <Route path="/Puerto-Mayor-Cataluna" element={<PuertoMayorCatalunaMiLanding />} />
          <Route path="/Puerto-Mayor-Aragon" element={<PuertoMayorAragonMiLanding />} />
          <Route path="/Puerto-Mayor-Puerto-Mayor-II" element={<PuertoMayorPuertoMAyorIIMiLanding />} /> 
          <Route path="/Puerto-Mayor-Parque-Vicuña" element={<ParqueVicuna />} />
          <Route path="/Ayurbana" element={<Ayurbana />} />
          <Route path="/Ainhoa-Baby-Shower" element={<AinhoaBaby />} />
          <Route path="/Santa-Felicia" element = {< SantaFelicia/>} />
          {/* Agrega más rutas para otros clientes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
