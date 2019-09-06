import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { RootNav } from './navigation';
import { Colors, DEEP_LINKING_SCHEME } from './helpers/constants';
import { TokenProvider } from './components/TokenContext';

export const App: React.FC = () => {
  return (
    <TokenProvider>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appContainer}>
        <RootNav uriPrefix={DEEP_LINKING_SCHEME} />
      </View>
    </TokenProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.spotifyWhite,
    flex: 1,
  },
});
