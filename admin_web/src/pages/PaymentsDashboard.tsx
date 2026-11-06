import React from 'react';

export const PaymentsDashboard: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginTop: 0, color: '#f8fafc' }}>💳 Financiero y Suscripciones</h2>
      <p style={{ color: '#94a3b8' }}>Conciliación de pagos vía CyberSource Flex Microform y Compras In-App.</p>

      <div style={{ marginTop: '20px', backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#f8fafc' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #334155', color: '#38bdf8' }}>
              <th style={{ padding: '10px' }}>ID Transacción</th>
              <th style={{ padding: '10px' }}>Procesador</th>
              <th style={{ padding: '10px' }}>Plan</th>
              <th style={{ padding: '10px' }}>Monto</th>
              <th style={{ padding: '10px' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px' }}>tx_cs_991823</td>
              <td style={{ padding: '10px', color: '#38bdf8' }}>CyberSource Web</td>
              <td style={{ padding: '10px' }}>Premium Anual</td>
              <td style={{ padding: '10px' }}>$69.99 USD</td>
              <td style={{ padding: '10px', color: '#4ade80' }}>COMPLETADO</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #334155' }}>
              <td style={{ padding: '10px' }}>tx_apple_44012</td>
              <td style={{ padding: '10px', color: '#a855f7' }}>Apple IAP</td>
              <td style={{ padding: '10px' }}>Premium Mensual</td>
              <td style={{ padding: '10px' }}>$9.99 USD</td>
              <td style={{ padding: '10px', color: '#4ade80' }}>COMPLETADO</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};