import  { useState } from 'react';

export function Header() {
  // Estado para la hora actual del sistema
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  // Actualiza la hora cada segundo
  setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ fontSize: '1.5rem' }}>🌸</span>
        <h1 style={{ fontSize: '1.25rem', margin: 0 }}>ROSE CORP</h1>
      </div>
      <div className="header-clock">
        🕒 {hora}
      </div>
    </header>
  );
}