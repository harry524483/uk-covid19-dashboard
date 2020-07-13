import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
