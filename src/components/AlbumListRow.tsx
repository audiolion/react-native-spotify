import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { material } from 'react-native-typography';
import { Colors } from '../helpers/constants';

type Props = {
  item: Echobind.SavedAlbum;
  onPress: () => void;
};

export const AlbumListRow: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.listRow}>
        <Image
          source={{ uri: item.album.images[0].url }}
          style={styles.image}
        />
        <View style={styles.flexStart}>
          <Text style={material.title} numberOfLines={1} ellipsizeMode="tail">
            {item.album.name}
          </Text>
        </View>
        <Icon name="chevron-thin-right" color={Colors.spotifyGreen} size={20} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listRow: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.spotifyWhite,
    borderBottomColor: Colors.spotifyBlack,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  flexStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
