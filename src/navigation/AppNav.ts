import { createStackNavigator } from 'react-navigation-stack';
import { AlbumListScreen } from '../screens/AlbumsListScreen';
import { AlbumNotesScreen } from '../screens/AlbumNotesScreen';

export const AppNav = createStackNavigator(
  {
    AlbumList: AlbumListScreen,
    AlbumNotes: AlbumNotesScreen,
  },
  {
    initialRouteName: 'AlbumList',
  }
);
