import React from 'react';
import gql from 'graphql-tag';

const fragment = gql`
  fragment TrackFragment on Track {
    name
  }
`;

const dummyQuery = gql`
  query TrackQuery {
    track(name: "XO") {
      ...TrackFragment
      artists {
        name
      }
      album {
        name
      }
    }
  }
  ${fragment}
`;
