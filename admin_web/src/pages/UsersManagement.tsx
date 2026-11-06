import React from 'react';

export const UsersManagement: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#f8fafc' }}>👤 Gestión de Usuarios y Perfiles</h2>
      <p style={{ color: '#94a3b8' }}>Administración de cuentas registradas, reputación e idiomas.</p>

      <div style={{ marginTop: '20px', backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
        <input
          type="text"
          placeholder="Buscar usuario por ID, nombre o correo..."
          style={{ width: '100%', maxWidth: '400px', padding: '10px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', marginBottom: '20px' }}
        />
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#f8fafc' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #334155', color: '#38bdf8' }}>
              <th style={{ padding: '10px' }}>Usuario</th>
              <th style={{ padding: '10px' }}>Idioma Nativo</th>
              <th style={{ padding: '10px' }}>Idioma Objetivo</th>
              <th style={{ padding: '10px' }}>Nivel CEFR</th>
              <th style={{ padding: '10px' }}>Reputación</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px' }}>usr-001 (Carlos M.)</td>
              <td style={{ padding: '10px' }}>Español (es)</td>
              <td style={{ padding: '10px' }}>Inglés (en)</td>
              <td style={{ padding: '10px' }}>B2</td>
              <td style={{ padding: '10px', color: '#4ade80' }}>4.95 / 5.00</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px' }}>usr-002 (Sarah W.)</td>
              <td style={{ padding: '10px' }}>Inglés (en)</td>
              <td style={{ padding: '10px' }}>Español (es)</td>
              <td style={{ padding: '10px' }}>B1</td>
              <td style={{ padding: '10px', color: '#4ade80' }}>4.88 / 5.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};