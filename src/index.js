import WebFont from 'webfontloader';
import 'normalize.css';
import './ui/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Montserrat:400,600,700', 'Lora:400,600,700', 'sans-serif']
  }
});

// const venueId = process.env.REACT_APP_VENUE_ID || url.parse(window.location.href).hostname;
const venuexConfig = window.__venuex__ || { venueId: 'test_venue' };
const { venueId } = venuexConfig;

ReactDOM.render(
  <App venueId={venueId} />,
  document.getElementById('root')
);

serviceWorker();
