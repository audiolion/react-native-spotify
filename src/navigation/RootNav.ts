import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppNav } from './AppNav';
import { AuthNav } from './AuthNav';

export const RootNav = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNav,
      App: AppNav,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);
