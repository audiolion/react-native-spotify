import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { RootNav } from './navigation';
import { Colors, DEEP_LINKING_SCHEME } from './helpers/constants';
import { TokenProvider } from './components/TokenContext';

export const App: React.FC = () => {
  return (
    <TokenProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <RootNav uriPrefix={DEEP_LINKING_SCHEME} />
      </SafeAreaView>
    </TokenProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: Colors.spotifyWhite,
    flex: 1,
  },
});
