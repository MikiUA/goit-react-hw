import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import appRoutes, { baseURL } from './appRoutes';
import NavSelector from 'NavSelector';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  basename={baseURL}>
      <NavSelector/>
      <Suspense fallback={<></>}>
      <Routes>
        {appRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
