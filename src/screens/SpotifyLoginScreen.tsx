import React from 'react';
import { material } from 'react-native-typography';
import { NavigationScreenProps } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../helpers/constants';

export const SpotifyLoginScreen: React.FC<NavigationScreenProps> = props => {
  const openSpotifyLogin = () => {};

  return (
    <View style={styles.center}>
      <Image
        style={styles.logo}
        source={require('../assets/spotify-icon-green.png')}
      />
      <Text style={styles.heading}>Echobind Spotify</Text>
      <TouchableOpacity onPress={openSpotifyLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login with Spotify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 44,
    width: 44,
    marginBottom: 10,
  },
  heading: {
    ...material.titleObject,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: Colors.spotifyGreen,
    borderRadius: 500,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    ...material.subheadingWhiteObject,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
