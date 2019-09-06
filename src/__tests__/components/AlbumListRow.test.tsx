import React from 'react';
import { render } from 'react-native-testing-library';
import { AlbumListRow } from '../../components/AlbumListRow';
import { fakeSavedAlbum } from '../mock-data';

describe('AlbumListRow', () => {
  it('matches snapshot', () => {
    const onPress = jest.fn();
    const tree = render(
      <AlbumListRow
        item={fakeSavedAlbum('https://example.com', 'Scorpion')}
        onPress={onPress}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
