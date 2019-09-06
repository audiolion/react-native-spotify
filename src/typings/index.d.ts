declare namespace Echobind {
  type Track = {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  };
  type Image = {
    height: string;
    width: string;
    url: string;
  };

  type Copyright = {
    text: string;
    type: string;
  };

  type Artist = {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  };

  type Album = {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: {
      upc: string;
    };
    external_urls: {
      spotify: string;
    };
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    tracks: {
      href: string;
      items: Track[];
    };
    type: string;
    uri: string;
  };

  type SavedAlbum = {
    added_at: string;
    album: Album;
  };
}
