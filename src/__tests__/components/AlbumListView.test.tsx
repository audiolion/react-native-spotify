import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { AlbumListView } from '../../components/AlbumListView';
import { fakeSavedAlbum } from '../mock-data';

describe('AlbumListView', () => {
  it('navigates to AlbumNotes with params', () => {
    const navigation = {
      navigate: jest.fn(),
    };

    const albums = [fakeSavedAlbum()];

    const { getByText } = render(
      <AlbumListView
        navigation={navigation}
        albums={albums}
        onRefresh={jest.fn()}
        refreshing={false}
      />
    );

    const albumName = albums[0].album.name;
    const re = new RegExp(albumName, 'i');

    fireEvent.press(getByText(re));

    expect(navigation.navigate.mock.calls[0][0]).toEqual('AlbumNotes');

    expect(navigation.navigate.mock.calls[0][1]).toMatchObject({
      name: albumName,
    });
  });
});
