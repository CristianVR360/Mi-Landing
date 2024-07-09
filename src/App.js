// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación dinámica de los componentes de clientes
const Astra360MiLanding = lazy(() => import('./mi-landing/templates/Astra360MiLanding/Astra360MiLanding'));
const PuertoMayorMiLanding = lazy(() => import('./mi-landing/templates/PuertoMayor/PuertoMayorMilanding'));
const HoffmanyWiller = lazy(() => import('./mi-landing/templates/hyw/HyWMiLanding')); 

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Astra360MiLanding />} />
          <Route path="/Puerto-Mayor" element={<PuertoMayorMiLanding />} />
          <Route path="/Hoffman-y-Willer" element={<HoffmanyWiller/>} />
          
          {/* Agrega más rutas para otros clientes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
