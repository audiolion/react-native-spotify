import React from 'react';
import gql from 'graphql-tag';
import { NetworkStatus } from 'apollo-client';
import { NavigationScreenProps } from 'react-navigation';
import {
  AlbumListQuery,
  AlbumListQuery_me_albums,
} from '../../spotify-graphql-types';
import { Query } from '../components/Query';
import { Alert } from '../components/Alert';
import { AlbumListView } from '../components/AlbumListView';

const imageFragment = gql`
  fragment ImageFragment on Image {
    height
    width
    url
  }
`;

const artistFragment = gql`
  fragment ArtistFragment on Artist {
    id
    name
    images {
      ...ImageFragment
    }
  }
  ${imageFragment}
`;

const albumFragment = gql`
  fragment AlbumFragment on Album {
    id
    album_type
    artists {
      ...ArtistFragment
    }
    genres
    label
    name
    release_date
    popularity
    type
    images {
      ...ImageFragment
    }
  }
  ${artistFragment}
  ${imageFragment}
`;

const albumList = gql`
  query AlbumListQuery {
    me {
      id
      display_name
      albums {
        added_at
        album {
          ...AlbumFragment
        }
      }
    }
  }
  ${albumFragment}
`;

export const AlbumListScreen: React.FC<NavigationScreenProps> = props => {
  return (
    <Query<AlbumListQuery> query={albumList} navigation={props.navigation}>
      {({ data, refetch, networkStatus }) => {
        if (!data || !data.me || !data.me.display_name || !data.me.albums) {
          return <Alert type="red" message="Error retrieving data." />;
        }
        const albums = data.me.albums.filter(
          album => album !== null
        ) as AlbumListQuery_me_albums[];

        return (
          <AlbumListView
            navigation={props.navigation}
            name={data.me.display_name}
            albums={albums}
            onRefresh={refetch}
            refreshing={networkStatus === NetworkStatus.refetch}
          />
        );
      }}
    </Query>
  );
};
