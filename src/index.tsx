import React from 'react';
import ReactDOM from 'react-dom/client';
import Framework7 from 'framework7/lite/bundle';
import Framework7React from 'framework7-react';
import App from './App';
import 'framework7/less/bundle';
import './global.less';

Framework7.use(Framework7React);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
