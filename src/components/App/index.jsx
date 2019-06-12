import React from 'react';
import { App, View } from 'framework7-react';
import routes from '../../js/routes';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      f7Params: {
        name: 'calendar',
        theme: 'ios',
        routes: routes,
      }
    }
  }

  render() {
    return (
      <App params={this.state.f7Params} >
        <View main className="safe-areas" url="/" />
      </App>
    );
  }

  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}
