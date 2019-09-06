import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { AlbumListRow } from './AlbumListRow';

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

  const goToAlbumNotes = (id: string) => () =>
    id.charAt(0) !== '-' && navigation.navigate('AlbumNotes');

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        onRefresh={onRefresh}
        refreshing={refreshing}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <AlbumListRow item={item} onPress={goToAlbumNotes(item.album.id)} />
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
