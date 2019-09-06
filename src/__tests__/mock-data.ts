import * as faker from 'faker';

export function fakeTrack(): Echobind.Track {
  return {
    artists: [],
    available_markets: [],
    disc_number: faker.random.number(),
    duration_ms: faker.random.number(),
    explicit: faker.random.boolean(),
    external_urls: {
      spotify: faker.internet.url(),
    },
    href: faker.internet.url(),
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    preview_url: faker.internet.url(),
    track_number: faker.random.number(),
    type: 'Track',
    uri: faker.internet.url(),
  };
}

export function fakeImage(url?: string): Echobind.Image {
  return {
    height: `${faker.random.number()}`,
    width: `${faker.random.number()}`,
    url: url || faker.internet.url(),
  };
}

export function fakeCopyright(): Echobind.Copyright {
  return {
    text: faker.lorem.words(),
    type: 'Copyright',
  };
}

export function fakeArtist(): Echobind.Artist {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    href: faker.internet.url(),
    external_urls: {
      spotify: faker.internet.url(),
    },
    type: 'Artist',
    uri: faker.internet.url(),
  };
}

export function fakeAlbum(url?: string, name?: string): Echobind.Album {
  return {
    id: faker.random.uuid(),
    href: faker.internet.url(),
    genres: [],
    external_ids: {
      upc: faker.random.word(),
    },
    external_urls: {
      spotify: faker.internet.url(),
    },
    copyrights: [fakeCopyright()],
    available_markets: [],
    artists: [fakeArtist()],
    album_type: faker.random.word(),
    images: [fakeImage(url)],
    name: name || faker.random.words(),
    popularity: faker.random.number(),
    release_date: faker.date.recent().toISOString(),
    release_date_precision: 'days',
    tracks: {
      href: faker.internet.url(),
      items: [fakeTrack()],
    },
    type: 'Album',
    uri: faker.internet.url(),
  };
}

export function fakeSavedAlbum(
  url?: string,
  name?: string
): Echobind.SavedAlbum {
  return {
    added_at: faker.date.past().toISOString(),
    album: fakeAlbum(url, name),
  };
}
