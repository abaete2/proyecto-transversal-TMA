import  { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export function Inventario() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const cargarDatos = () => {
    setLoading(true); /** loading se establece a true activando el texto de carga */
    fetch('https://fakestoreapi.com/products?limit=6') /** peticion a la API */
      .then(res => res.json()) /** convertimos res a json */
      /** guardamos los datos del json en el array de datos, una vez cargados loading = false y se quita el texto de carga */
      .then(json => {
        setData(json);
        setLoading(false);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Inventario</h2>
        {data.length === 0 && <button onClick={cargarDatos} className="btn-primary">Cargar Inventario</button>}
      </div>

      {loading && <p>Cargando datos del servidor...</p>}

      <div>
        {data.map(p => (
          <ProductCard key={p.id} title={p.title} price={p.price} category={p.category} image={p.image} />
        ))}
      </div>
    </div>
  );
}