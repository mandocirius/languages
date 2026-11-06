import React from 'react';

export const AnalyticsDashboard: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#f8fafc' }}>📊 Métricas de Operación y Crecimiento</h2>
      <p style={{ color: '#94a3b8' }}>Resumen de actividad global de la plataforma en tiempo real.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Usuarios Activos Diarios (DAU)</span>
          <h3 style={{ color: '#38bdf8', fontSize: '28px', margin: '8px 0 0 0' }}>12,450</h3>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Llamadas Activas en Vivo</span>
          <h3 style={{ color: '#4ade80', fontSize: '28px', margin: '8px 0 0 0' }}>342</h3>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Tasa de Emparejamiento</span>
          <h3 style={{ color: '#facc15', fontSize: '28px', margin: '8px 0 0 0' }}>94.2%</h3>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px' }}>Ingresos Mes (MRR)</span>
          <h3 style={{ color: '#c084fc', fontSize: '28px', margin: '8px 0 0 0' }}>$14,890</h3>
        </div>
      </div>
    </div>
  );
};