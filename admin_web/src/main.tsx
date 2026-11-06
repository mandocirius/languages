import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AdminLogin } from './pages/AdminLogin';
import { AdminLayout } from './components/AdminLayout';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <React.StrictMode>
      {isAuthenticated ? (
        <AdminLayout onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);