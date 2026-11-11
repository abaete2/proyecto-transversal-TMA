

export function Sidebar({ seccion, setSeccion }: any) {
  return (
    <aside className="sidebar">
      <p style={{ fontSize: '0.75rem', color: '#ffffff', textTransform: 'uppercase', margin: '0 0 0.5rem 0.5rem' }}>Navegación</p>
      {/** Creamos array para no repetir por cada valor la etiqueta <button> asigna los valores en item*/}
      {['Personal', 'Inventario', 'Incidencias'].map((item) => (
        <button
          key={item} 
          onClick={() => setSeccion(item)} /** llamamos a la funcion pasandole el valor de item */
          className={`sidebar-btn ${seccion === item ? 'active' : ''}`} /** Si la seccion que pasamos tiene el mismo valor que item se añade el .active del css*/
        >
          {/** Comparamos item para saber que emoticono pintar, posteriormente pintamos el valor de item*/}
          {item === 'Personal' && '👥 '}
          {item === 'Inventario' && '📦 '}
          {item === 'Incidencias' && '⚠️ '}
          {item}
        </button>
      ))}
    </aside>
  );
}