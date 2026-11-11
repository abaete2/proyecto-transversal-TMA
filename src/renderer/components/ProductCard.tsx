

export function ProductCard({ title, price, category, image }: any) {
  return (
    <div className="card">
      <div>
        <div style={{ height: '7.5rem', display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
          <img src={image} alt={title} style={{ height: '100%', objectFit: 'contain' }} />
        </div>
        <span style={{ fontSize: '0.625rem', background: '#fff1f2', color: '#e11d48', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {category}
        </span>
        <h3 style={{ fontSize: '0.85rem', margin: '0.5rem 0' }}>{title}</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>${price}</span>
        
        {/* si precio mas de 50 se renderiza de manera distinta: */}
        {price > 50 && (
          <span style={{ background: '#ffe4e6', color: '#9f1239', fontSize: '0.5625rem', fontWeight: 'bold', padding: '0.125rem 0.375rem', borderRadius: '6.25rem', textTransform: 'uppercase' }}>
            Activo de Alto Valor
          </span>
        )}
      </div>
    </div>
  );
}