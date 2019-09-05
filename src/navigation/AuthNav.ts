import { createStackNavigator } from 'react-navigation-stack';
import { SpotifyLoginScreen } from '../screens/SpotifyLoginScreen';
import { SpotifyCallbackScreen } from '../screens/SpotifyCallbackScreen';

export const AuthNav = createStackNavigator(
  {
    Login: {
      screen: SpotifyLoginScreen,
      path: 'login*',
    },
    Callback: {
      screen: SpotifyCallbackScreen,
      path: 'callback*',
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
