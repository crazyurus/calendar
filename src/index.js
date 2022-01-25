import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/lite';
import Framework7React from 'framework7-react';
import App from './components/App';
import 'framework7/framework7.less';
import './global.less';

Framework7.use(Framework7React);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
