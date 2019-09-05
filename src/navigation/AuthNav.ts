import { createStackNavigator } from 'react-navigation-stack';
import { SpotifyLoginScreen } from '../screens/SpotifyLoginScreen';

export const AuthNav = createStackNavigator(
  {
    Login: SpotifyLoginScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
