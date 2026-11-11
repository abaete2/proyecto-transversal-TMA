import  { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Personal } from './views/Personal';
import { Inventario } from './views/Inventario';
import { Incidencias } from './views/Incidencias';

export default function App() {
  const [seccion, setSeccion] = useState('Personal');

  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        <Sidebar seccion={seccion} setSeccion={setSeccion} />
        {/** Dependiendo del valor de seccion renderizamos cada componente */}
        <main id="panel_central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  );
}