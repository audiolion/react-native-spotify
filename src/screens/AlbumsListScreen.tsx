import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from '../components/Alert';
import { Loading } from '../components/Loading';
import { AlbumListView } from '../components/AlbumListView';
import { useSpotifyFetch } from '../hooks/use-spotify-fetch';
import { TokenContext } from '../components/TokenContext';
import { AlbumHeader } from '../components/AlbumHeader';

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

  const image = selectRandomImage(data.items);

  return (
    <View style={styles.container}>
      <AlbumHeader title="Saved Albums" uri={image.url} />
      <AlbumListView
        navigation={props.navigation}
        albums={data.items}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

// @ts-ignore
AlbumListScreen.navigationOptions = {
  header: null,
};

function selectRandomImage(albums: Echobind.SavedAlbum[]) {
  const randomAlbum = albums[Math.floor(Math.random() * albums.length)];
  return randomAlbum.album.images[0];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
