import  { useState } from 'react';
import { IncidentCard } from '../components/IncidentCard';

export function Incidencias() {
  const [data, setData] = useState<any[]>([]); /** Array de datos con useState */
  const [loading, setLoading] = useState(false);


  /** Misma dinamica que los otros metodos de cargar datos */
  const cargarDatos = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Incidencias</h2>
        {data.length === 0 && <button onClick={cargarDatos} className="btn-primary">Cargar Incidencias</button>}
      </div>

      {loading && <p>Cargando datos del servidor...</p>}

      <div>
        {data.map(t => (
          <IncidentCard key={t.id} id={t.id} title={t.title} completed={t.completed} />
        ))}
      </div>
    </div>
  );
}