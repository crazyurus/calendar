import React from 'react';
import { App, View } from 'framework7-react';
import routes from '../../routes';

function Main() {
  const f7Params = {
    id: 'team.token.calendar',
    name: '校历',
    theme: 'auto',
    routes: routes,
    dialog: {
      buttonOk: '确定'
    }
  };

  return (
    <App {...f7Params}>
      <View main className="safe-areas" url="/" />
    </App>
  );
}

export default Main;
