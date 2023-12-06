import React from 'react';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';


import store from './configureStore';

import App from '../../app/App';



let manifest;
try {
	manifest = JSON.parse(fs.readFileSync(path.join('public', 'manifest.json'), 'utf8'));
} catch (err) {
	console.log(err);
	manifest = null;
}


export default (req) => {
  console.log(req.path);
  const content = renderToString(
    <Provider store={store()}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return `<!DOCTYPE html>  
  <head>
     <link rel="stylesheet" href='/css/app.css'"/>
     <link rel="icon" type="image/x-icon" href="/images/favicon.ico"> 
  </head>  
  <body> 
    <div id="root">${content}</div>
	<script src="${manifest['appVendor.js']}" async defer></script>        
	<script src="${manifest['vendors.js']}" async defer></script>        
	<script src="${manifest['runtime.js']}" async defer></script>
	<script src="${manifest['app.js']}" async defer></script>      
  </body>
  </html>`;
};
