import  { useState } from 'react';
import { EmployeeCard } from '../components/EmployeeCard';

export function Personal() {
  const [data, setData] = useState<any[]>([]); /** Guardar datos en un array (obtenidos de la API) */
  const [loading, setLoading] = useState(false); /**  Boolean para definir que pintar mientras recoge los datos */
  const [search, setSearch] = useState(''); /** texto de usuario */

  // Petición GET básica con .then()
  const cargarDatos = () => {
    setLoading(true); /** loading se establece a true activando el texto de carga */
    fetch('https://jsonplaceholder.typicode.com/users') /** peticion a la API */
      .then(res => res.json()) /** convertimos res a json */
      /** guardamos los datos del json en el array de datos, una vez cargados loading = false y se quita el texto de carga */
      .then(json => {
        setData(json);
        setLoading(false);
      });
  };
  /** filtro que compara el nombre de cada tarjeta (u.name), lo transforma a mins y busca si coincide con lo escrito por el usuario (search) en mins */
  const filtered = data.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Personal</h2>
        {/** Si el array de data no contiene datos pintamos el boton */}
        {data.length === 0 && <button onClick={cargarDatos} className="btn-primary">Cargar Datos</button>}
      </div>
      {/** Si tiene datos pintamos input de busqueda */}
      {data.length > 0 && (
        <input 
          type="text" 
          placeholder="Buscar por nombre..." 
          value={search} 
          onChange={e => setSearch(e.target.value)} /** Para cambiar dinamicamente el texto del input */
          className="search-input" 
        />
      )}

      {loading && <p>Cargando datos del servidor...</p>} {/** Texto mientras realiza la funcion cargarDatos*/}
      
      <div>
        {/** Transformamos cada elemento del array filtrado en el componente de la Card, pasandole cada dato u.X */}
        {filtered.map(u => (
          <EmployeeCard key={u.id} name={u.name} email={u.email} city={u.address.city} />
        ))}
      </div>
    </div>
  );
}