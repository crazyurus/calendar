import React from 'react';
import { App, View } from 'framework7-react';
import routes from '../../js/routes';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      f7Params: {
        name: '校历',
        theme: 'ios',
        routes: routes,
        dialog: {
          buttonOk: '好'
        }
      }
    };
  }

  render() {
    return (
      <App params={this.state.f7Params} >
        <View main className="safe-areas" url="/" />
      </App>
    );
  }
}
