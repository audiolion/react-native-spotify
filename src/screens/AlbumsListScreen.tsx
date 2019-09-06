import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from '../components/Alert';
import { Loading } from '../components/Loading';
import { AlbumListView } from '../components/AlbumListView';
import { useSpotifyFetch } from '../hooks/use-spotify-fetch';
import { TokenContext } from '../components/TokenContext';

type FetchAlbums = {
  href: string;
  items: Echobind.SavedAlbum[];
};

export const AlbumListScreen: React.FC<NavigationScreenProps> = props => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [token] = React.useContext(TokenContext);

  const [state, fetchAlbums] = useSpotifyFetch<FetchAlbums>({
    url: '/me/albums',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    onSuccess: data => {},
    onError: err => {
      AsyncStorage.clear().then(() => {
        props.navigation.navigate('Auth');
      });
    },
  });

  React.useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const handleRefresh = () => {
    setRefreshing(true);
  };

  const { loading, error, value: data } = state;

  if (loading) {
    return <Loading />;
  }

  if (error || !data || !data.items) {
    return <Alert type="red" message="Error retrieving data." />;
  }

  return (
    <AlbumListView
      navigation={props.navigation}
      name={'ryan'}
      albums={data.items}
      onRefresh={handleRefresh}
      refreshing={refreshing}
    />
  );
};
