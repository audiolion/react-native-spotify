import { createStackNavigator } from 'react-navigation-stack';
import { createStubScreen } from './createStubScreen';
import { AlbumListScreen } from '../screens/AlbumsListScreen';

export const AppNav = createStackNavigator(
  {
    AlbumList: AlbumListScreen,
    AlbumNotes: {
      screen: createStubScreen('Album Notes'),
      path: 'album-notes/:id',
    },
  },
  {
    initialRouteName: 'AlbumList',
  }
);
