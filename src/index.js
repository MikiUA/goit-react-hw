import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import appRoutes from './appRoutes';
import NavSelector from 'NavSelector';
import './index.css';

//  const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter  basename={baseUrl}> */}
    <BrowserRouter basename='https://mikiua.github.io/goit-react-hw'> 
      <NavSelector />
      <Routes>
        {appRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
