// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación dinámica de los componentes de clientes
const Astra360MiLanding = lazy(() => import('./mi-landing/templates/Astra360MiLanding/Astra360MiLanding'));
const PuertoMayorMiLanding = lazy(()=> import('./mi-landing/templates/PuertoMayor/PuertoMayorMilanding'));
// Agrega más importaciones dinámicas para otros clientes

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Astra360MiLanding />} />
          <Route path="/Puerto-Mayor" element={<PuertoMayorMiLanding />} />
          {/* Agrega más rutas para otros clientes */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;