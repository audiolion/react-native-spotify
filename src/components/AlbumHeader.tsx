import React from 'react';
import { Colors } from '../helpers/constants';
import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { material } from 'react-native-typography';

type Props = {
  uri: string;
};

const oneQuarterScreenHeight = Math.floor(Dimensions.get('screen').height / 4);

export const AlbumHeader: React.FC<Props> = ({ uri }) => {
  const source = { uri };
  return (
    <ImageBackground
      source={source}
      style={styles.background}
      imageStyle={styles.image}
    >
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.center}>
          <Text style={[material.headlineWhite, styles.headline]}>
            Saved Albums
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: oneQuarterScreenHeight,
    width: Dimensions.get('window').width,
    shadowRadius: 12,
    shadowOpacity: 0.13,
    shadowColor: Colors.tabBarShadowColor,
    shadowOffset: { height: 6, width: 0 },
  },
  image: {
    opacity: 0.7,
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
