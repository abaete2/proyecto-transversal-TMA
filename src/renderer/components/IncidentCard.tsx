

export function IncidentCard({ id, title, completed }: any) {
  return (
    <div className="card" style={{ flexDirection: 'row', alignItems: 'center', background: completed ? '#f0fdf4' : '#fff1f2', borderColor: completed ? '#bbf7d0' : '#fecdd3' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <span>{completed ? '✅' : '⏳'}</span> {/* True ✅ False ⏳ comparamos valor completed y asociamos emoticono */}
        <div>
          <span style={{ fontSize: '0.625rem', color: '#64748b' }}>ID: {id}</span>
          <p style={{ margin: 0, fontSize: '0.85rem', textDecoration: completed ? 'line-through' : 'none', color: completed ? '#166534' : '#9f1239' }}>
            {title}
          </p>
        </div>
      </div>
      <span style={{ background: completed ? '#dcfce7' : '#ffe4e6', color: completed ? '#166534' : '#9f1239', fontSize: '0.6875rem', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '6.25rem' }}>
        {completed ? 'Resuelta' : 'Pendiente'}
      </span>
    </div>
  );
}