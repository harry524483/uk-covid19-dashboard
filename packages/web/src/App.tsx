import React, { lazy, Suspense } from 'react';
import { Loader } from 'semantic-ui-react';

import './App.scss';

const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loader active />}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
