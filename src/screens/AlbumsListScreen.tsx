import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from '../components/Alert';
import { Loading } from '../components/Loading';
import { AlbumListView } from '../components/AlbumListView';
import { useSpotifyFetch } from '../hooks/use-spotify-fetch';
import { TokenContext } from '../components/TokenContext';
import { material } from 'react-native-typography';
import { Colors } from '../helpers/constants';

type FetchAlbums = {
  href: string;
  items: Echobind.SavedAlbum[];
};

const oneQuarterScreenHeight = Math.floor(Dimensions.get('screen').height / 4);

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
      <ImageBackground
        source={{ uri: image.url }}
        style={{
          height: oneQuarterScreenHeight,
          width: Dimensions.get('window').width,
          shadowRadius: 12,
          shadowOpacity: 0.13,
          shadowColor: Colors.tabBarShadowColor,
          shadowOffset: { height: 6, width: 0 },
        }}
        imageStyle={{ opacity: 0.7 }}
      >
        <SafeAreaView style={styles.headerContainer}>
          <View style={styles.center}>
            <Text style={[material.headlineWhite, styles.headline]}>
              Saved Albums
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <AlbumListView
        navigation={props.navigation}
        name={'ryan'}
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
  headerContainer: {
    flexDirection: 'row',
    flex: 1,
    height: oneQuarterScreenHeight,
  },
  center: {
    position: 'absolute',
    opacity: 1,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
