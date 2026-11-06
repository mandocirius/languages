import React, { useState, useEffect } from 'react';

interface Report {
  id: string;
  reporterId: string;
  reportedUserId: string;
  roomName: string;
  reason: string;
  createdAt: string;
}

export const ModerationDashboard: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setReports([
        {
          id: 'rep-101',
          reporterId: 'usr-001',
          reportedUserId: 'usr-002',
          roomName: 'room_1700000000_001_002',
          reason: 'Uso de idioma diferente al acordado',
          createdAt: new Date().toISOString(),
        },
        {
          id: 'rep-102',
          reporterId: 'usr-005',
          reportedUserId: 'usr-009',
          roomName: 'room_1700000050_005_009',
          reason: 'Acoso o comportamiento inapropiado',
          createdAt: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleAction = (reportId: string, action: string) => {
    alert(`Acción ${action} ejecutada sobre el reporte ${reportId}`);
    setReports(reports.filter((r) => r.id !== reportId));
  };

  if (loading) {
    return <div style={{ padding: '20px', color: '#fff' }}>Cargando panel de moderación...</div>;
  }

  return (
    <div style={{ padding: '30px', backgroundColor: '#0f172a', minHeight: '100vh', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      <h2>🛡️ Panel de Moderación y Seguridad Operativa</h2>
      <p style={{ color: '#94a3b8' }}>Gestión de reportes de usuarios y cumplimiento del código de convivencia.</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'left' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #334155', color: '#38bdf8' }}>
            <th style={{ padding: '12px' }}>ID Reporte</th>
            <th style={{ padding: '12px' }}>Reportante</th>
            <th style={{ padding: '12px' }}>Usuario Reportado</th>
            <th style={{ padding: '12px' }}>Razón</th>
            <th style={{ padding: '12px' }}>Acciones Mod.</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} style={{ borderBottom: '1px solid #1e293b' }}>
              <td style={{ padding: '12px' }}>{report.id}</td>
              <td style={{ padding: '12px' }}>{report.reporterId}</td>
              <td style={{ padding: '12px', color: '#f87171', fontWeight: 'bold' }}>{report.reportedUserId}</td>
              <td style={{ padding: '12px' }}>{report.reason}</td>
              <td style={{ padding: '12px' }}>
                <button
                  onClick={() => handleAction(report.id, 'WARN')}
                  style={{ marginRight: '8px', padding: '6px 12px', backgroundColor: '#eab308', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Advertir
                </button>
                <button
                  onClick={() => handleAction(report.id, 'SUSPEND')}
                  style={{ marginRight: '8px', padding: '6px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Suspender
                </button>
                <button
                  onClick={() => handleAction(report.id, 'DISMISS')}
                  style={{ padding: '6px 12px', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Desestimar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};