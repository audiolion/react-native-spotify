/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AlbumListQuery
// ====================================================

export interface AlbumListQuery_me_albums_album_artists_images {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface AlbumListQuery_me_albums_album_artists {
  __typename: "Artist";
  id: string | null;
  name: string | null;
  images: (AlbumListQuery_me_albums_album_artists_images | null)[] | null;
}

export interface AlbumListQuery_me_albums_album_images {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface AlbumListQuery_me_albums_album {
  __typename: "Album";
  id: string | null;
  album_type: string | null;
  artists: (AlbumListQuery_me_albums_album_artists | null)[] | null;
  genres: (string | null)[] | null;
  label: string | null;
  name: string | null;
  release_date: string | null;
  popularity: number | null;
  type: string | null;
  images: (AlbumListQuery_me_albums_album_images | null)[] | null;
}

export interface AlbumListQuery_me_albums {
  __typename: "SavedAlbum";
  added_at: string | null;
  album: AlbumListQuery_me_albums_album | null;
}

export interface AlbumListQuery_me {
  __typename: "PrivateUser";
  id: string | null;
  display_name: string | null;
  albums: (AlbumListQuery_me_albums | null)[] | null;
}

export interface AlbumListQuery {
  me: AlbumListQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ImageFragment
// ====================================================

export interface ImageFragment {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArtistFragment
// ====================================================

export interface ArtistFragment_images {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface ArtistFragment {
  __typename: "Artist";
  id: string | null;
  name: string | null;
  images: (ArtistFragment_images | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: AlbumFragment
// ====================================================

export interface AlbumFragment_artists_images {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface AlbumFragment_artists {
  __typename: "Artist";
  id: string | null;
  name: string | null;
  images: (AlbumFragment_artists_images | null)[] | null;
}

export interface AlbumFragment_images {
  __typename: "Image";
  height: number | null;
  width: number | null;
  url: string | null;
}

export interface AlbumFragment {
  __typename: "Album";
  id: string | null;
  album_type: string | null;
  artists: (AlbumFragment_artists | null)[] | null;
  genres: (string | null)[] | null;
  label: string | null;
  name: string | null;
  release_date: string | null;
  popularity: number | null;
  type: string | null;
  images: (AlbumFragment_images | null)[] | null;
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
