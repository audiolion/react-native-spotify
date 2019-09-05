import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

export const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <Text>Echobind Spotify</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'pink',
  },
});
