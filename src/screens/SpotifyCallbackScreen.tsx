import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../helpers/constants';

export const SpotifyCallbackScreen: React.FC<NavigationScreenProps> = props => {
  React.useEffect(() => {
    AsyncStorage.setItem(
      'access-token',
      props.navigation.getParam('access_token', '')
    ).then(() => props.navigation.navigate('App'));
  }, []);

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
