

export function EmployeeCard({ name, email, city }: any) {
  return (
    <div className="card">
      <div>
        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{name}</h3>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>📧 {email}</p>
      </div>
      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '0.0625rem solid #f1f5f9', fontSize: '0.75rem', color: '#64748b' }}>
        📍 Ciudad: <strong>{city}</strong>
      </div>
    </div>
  );
}