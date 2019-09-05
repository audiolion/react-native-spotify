import { createStackNavigator } from 'react-navigation-stack';
import { createStubScreen } from './createStubScreen';

export const AppNav = createStackNavigator(
  {
    AlbumList: createStubScreen('Album List'),
    AlbumNotes: createStubScreen('Album Notes'),
  },
  {
    initialRouteName: 'AlbumList',
  }
);
