import React from 'react';
import { render } from 'react-native-testing-library';
import { AlbumHeader } from '../../components/AlbumHeader';

describe('AlbumHeader', () => {
  it('matches snapshot', () => {
    const tree = render(
      <AlbumHeader title="foo" uri="https://example.com" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
