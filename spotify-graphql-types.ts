/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TrackQuery
// ====================================================

export interface TrackQuery_track_artists {
  __typename: "Artist";
  name: string | null;
}

export interface TrackQuery_track_album {
  __typename: "Album";
  name: string | null;
}

export interface TrackQuery_track {
  __typename: "Track";
  name: string | null;
  artists: (TrackQuery_track_artists | null)[] | null;
  album: TrackQuery_track_album | null;
}

export interface TrackQuery {
  track: TrackQuery_track | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TrackFragment
// ====================================================

export interface TrackFragment {
  __typename: "Track";
  name: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
