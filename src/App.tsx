import React from 'react';
import { App, View } from 'framework7-react';
import HomePage from './pages/Home';

const f7Params = {
  id: 'team.token.calendar',
  name: '校历',
  theme: 'auto',
  autoDarkTheme: false,
  dialog: {
    buttonOk: '确定',
  },
};

function Main(): JSX.Element {
  return (
    <App {...f7Params}>
      <View main className="safe-areas" url="/">
        <HomePage />
      </View>
    </App>
  );
}

export default Main;
