import React from 'react';
import { App, View } from 'framework7-react';
import routes from '../../routes';

export default () => {
  const f7Params = {
    name: '校历',
    theme: 'auto',
    routes: routes,
    dialog: {
      buttonOk: '好'
    }
  };

  return (
    <App params={f7Params}>
      <View main className="safe-areas" url="/" />
    </App>
  );
}
