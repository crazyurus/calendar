import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/lite-bundle';
import Framework7React, { App, View } from 'framework7-react';
import HomePage from './pages/Home';
import 'framework7/framework7-bundle.less';
import './global.less';

Framework7.use(Framework7React);

const f7Params = {
  id: 'team.token.calendar',
  name: '校历',
  theme: 'auto',
  autoDarkTheme: false,
  dialog: {
    buttonOk: '确定'
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App {...f7Params}>
      <View main className="safe-areas" url="/">
        <HomePage />
      </View>
    </App>
  </React.StrictMode>,
  document.getElementById('app')
);
