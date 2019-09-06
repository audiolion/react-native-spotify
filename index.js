if (__DEV__) {
  import('./ReactotronConfig').then(() =>
    console.tron.log('Reactotron Configured')
  );
}

import { AppRegistry, YellowBox } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Async Storage has been extracted']);

AppRegistry.registerComponent(appName, () => App);
