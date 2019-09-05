import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
import { material } from 'react-native-typography';
import { TouchableHighlight } from 'react-native-gesture-handler';

type Props = {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
  name: string;
  albums: any[];
  onRefresh: () => void;
  refreshing: boolean;
};

export const AlbumListView: React.FC<Props> = ({
  navigation,
  name,
  albums,
  onRefresh,
  refreshing,
}) => {
  const keyExtractor = (item: any) =>
    (item && item.album && item.album.id) || `${Math.random() * -1}`;

  const goToAlbumNotes = (id: string | null) => () =>
    id && id.charAt(0) !== '-' && navigation.navigate('AlbumNotes');

  return (
    <View style={styles.container}>
      <Text style={material.title}>{name}'s Albums</Text>
      <FlatList
        data={albums}
        onRefresh={onRefresh}
        refreshing={refreshing}
        keyExtractor={keyExtractor}
        renderItem={({ item }) =>
          item &&
          item.album && (
            <View>
              <TouchableHighlight onPress={goToAlbumNotes(item.album.id)}>
                <Text style={material.body1}>{item.album.name}</Text>
              </TouchableHighlight>
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
