import React, { useState } from 'react';
import { AnalyticsDashboard } from '../pages/AnalyticsDashboard';
import { ModerationDashboard } from '../pages/ModerationDashboard';
import { UsersManagement } from '../pages/UsersManagement';
import { PaymentsDashboard } from '../pages/PaymentsDashboard';

interface Props {
  onLogout: () => void;
}

export const AdminLayout: React.FC<Props> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'moderation' | 'users' | 'payments'>('analytics');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', fontFamily: 'sans-serif' }}>
      {/* Sidebar Navigation */}
      <div style={{ width: '250px', backgroundColor: '#1e293b', borderRight: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ padding: '24px 20px', borderBottom: '1px solid #334155' }}>
            <h3 style={{ color: '#38bdf8', margin: 0, fontSize: '18px' }}>🌐 Idiomas Admin</h3>
            <span style={{ color: '#64748b', fontSize: '12px' }}>v1.0.0 Commercial</span>
          </div>

          <nav style={{ padding: '20px 10px' }}>
            <button
              onClick={() => setActiveTab('analytics')}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', marginBottom: '8px', backgroundColor: activeTab === 'analytics' ? '#0284c7' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              📊 Métricas
            </button>
            <button
              onClick={() => setActiveTab('moderation')}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', marginBottom: '8px', backgroundColor: activeTab === 'moderation' ? '#0284c7' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              🛡️ Moderación
            </button>
            <button
              onClick={() => setActiveTab('users')}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', marginBottom: '8px', backgroundColor: activeTab === 'users' ? '#0284c7' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              👤 Usuarios
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              style={{ width: '100%', textAlign: 'left', padding: '12px 16px', marginBottom: '8px', backgroundColor: activeTab === 'payments' ? '#0284c7' : 'transparent', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              💳 Financiero
            </button>
          </nav>
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #334155' }}>
          <button
            onClick={onLogout}
            style={{ width: '100%', padding: '10px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        {activeTab === 'analytics' && <AnalyticsDashboard />}
        {activeTab === 'moderation' && <ModerationDashboard />}
        {activeTab === 'users' && <UsersManagement />}
        {activeTab === 'payments' && <PaymentsDashboard />}
      </div>
    </div>
  );
};