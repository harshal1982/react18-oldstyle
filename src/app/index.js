import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

const domNode = document.getElementById('root');
import { Provider } from 'react-redux';
 import store from '../app/clientstore/store';
//import store from '../server/helpers/configureStore'

const root = hydrateRoot(
  domNode,
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//Use below code if you dont want to hydrate

// const root = createRoot(document.getElementById("root"));

// root.render( <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>)
