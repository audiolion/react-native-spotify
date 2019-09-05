import React from 'react';
import queryString from 'query-string';
import { material } from 'react-native-typography';
import { NavigationScreenProps } from 'react-navigation';
import compareAsc from 'date-fns/compareAsc';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Colors, DEEP_LINKING_SCHEME } from '../helpers/constants';
import AsyncStorage from '@react-native-community/async-storage';

const scopes = [
  'user-library-read',
  'user-read-private',
  'user-follow-read',
  'user-read-email',
];

export const SpotifyLoginScreen: React.FC<NavigationScreenProps> = props => {
  const openSpotifyLogin = () => {
    const queryParams = {
      client_id: '3a672567e35644c6b913dfdeea6494bd',
      redirect_uri: `${DEEP_LINKING_SCHEME}callback`,
      response_type: 'token',
      scope: scopes.join(','),
    };

    Linking.openURL(
      `https://accounts.spotify.com/authorize?${queryString.stringify(
        queryParams
      )}`
    ).catch(console.error);
  };

  React.useEffect(() => {
    const handleSpotifyCallback = ({ url }: { url: string }) => {
      const params = queryString.parse(url);
      const access_token =
        params[`${DEEP_LINKING_SCHEME}callback/#access_token`];

      props.navigation.navigate({
        routeName: 'Callback',
        params: {
          access_token,
          expires_in: params.expires_in,
          token_type: params.token_type,
        },
      });
    };

    Linking.addEventListener('url', handleSpotifyCallback);
    return () => {
      Linking.removeEventListener('url', handleSpotifyCallback);
    };
  }, [props.navigation]);

  React.useEffect(() => {
    AsyncStorage.multiGet(['access-token', 'token-expires'])
      .then(vals => {
        if (vals.length === 2) {
          const [, accessToken] = vals[0];
          const [, expiresIn] = vals[1];
          if (
            accessToken &&
            expiresIn &&
            compareAsc(new Date(expiresIn), new Date())
          ) {
            props.navigation.navigate('App');
          }
        }
      })
      .catch(console.error);
  }, [props.navigation]);

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
