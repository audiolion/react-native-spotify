import React from 'react';
import addSeconds from 'date-fns/addSeconds';
import { render } from 'react-native-testing-library';
import AsyncStorage from '@react-native-community/async-storage';
import { SpotifyLoginScreen } from '../../screens/SpotifyLoginScreen';

test('Checks for existing unexpired access token and pushes to App route', async () => {
  await AsyncStorage.multiSet([
    ['access-token', 'foo'],
    ['token-expires', addSeconds(new Date(), 60).toISOString()],
  ]);

  const navigateMock = {
    navigate: jest.fn(),
  };

  render(<SpotifyLoginScreen navigation={navigateMock as any} />);

  await new Promise(res => setTimeout(() => res(), 50));

  expect(navigateMock.navigate).toBeCalledWith('App');
});
