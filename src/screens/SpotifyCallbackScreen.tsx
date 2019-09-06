import React from 'react';
import addSeconds from 'date-fns/addSeconds';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../helpers/constants';
import { TokenContext } from '../components/TokenContext';

export const SpotifyCallbackScreen: React.FC<NavigationScreenProps> = props => {
  const [, setToken] = React.useContext(TokenContext);

  console.tron.log({ setToken });

  React.useEffect(() => {
    const accessToken = props.navigation.getParam('access_token', '');

    setToken(accessToken);

    const now = new Date();
    const expiresIn = props.navigation.getParam('expires_in', '0');
    const tokenExpires = addSeconds(now, expiresIn);

    AsyncStorage.multiSet([
      ['access-token', accessToken],
      ['token-expires', tokenExpires.toISOString()],
    ]).then(() => props.navigation.navigate('App'));
  }, [props.navigation, setToken]);

  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.spotifyGreen} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
