import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { AlbumListRow } from './AlbumListRow';
import { material } from 'react-native-typography';

type Props = {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
  albums: Echobind.SavedAlbum[];
  onRefresh: () => void;
  refreshing: boolean;
};

export const AlbumListView: React.FC<Props> = ({
  navigation,
  albums,
  onRefresh,
  refreshing,
}) => {
  const keyExtractor = (item: Echobind.SavedAlbum) =>
    (item && item.album && item.album.id) || `${Math.random() * -1}`;

  const goToAlbumNotes = (id: string, uri: string, name: string) => () =>
    navigation.navigate('AlbumNotes', {
      id,
      uri,
      name,
    });

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        onRefresh={onRefresh}
        refreshing={refreshing}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text style={material.body1}>No saved albums.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <AlbumListRow
            item={item}
            onPress={goToAlbumNotes(
              item.album.id,
              item.album.images[0].url,
              item.album.name
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
