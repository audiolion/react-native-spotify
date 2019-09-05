import { createStackNavigator } from 'react-navigation-stack';
import { createStubScreen } from './createStubScreen';

export const AuthNav = createStackNavigator(
  {
    Login: createStubScreen('Spotify Login'),
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);
