import React, { lazy, Suspense } from 'react';

import './App.scss';

const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div />}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
