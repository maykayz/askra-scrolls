import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import Home from '@/pages/Home';
import Error from '@/pages/Error';
import { useSocket } from '@/hooks/useSocket';
import MainLayout from '@/layout';
import { ROUTE_CONFIG } from '@/constants/routes';

import '@/App.css';

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {children}
    </div>
  );
};

const App = () => {
  useSocket();

  return (
    <AppContainer>
      <ErrorBoundary fallback={<Error />}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to={ROUTE_CONFIG.CHAT} replace />} />
            <Route path={ROUTE_CONFIG.CHAT} element={<Home />} />
            <Route path={ROUTE_CONFIG.CHAT_DETAILS(':id')} element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </AppContainer>
  );
};

export default App;
