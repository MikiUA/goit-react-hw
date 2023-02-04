import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import appRoutes from './appRoutes';
import NavSelector from 'NavSelector';
import './index.css';

//  const baseUrl = window.location.origin;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Test render</h1>
    <BrowserRouter  basename='/goit-react-hw'>
    {/* <BrowserRouter basename={baseURL}>  */}
      <NavSelector/>
      <Routes>
        {appRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
