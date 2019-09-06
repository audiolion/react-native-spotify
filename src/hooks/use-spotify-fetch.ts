import { baseUseFetch } from '@ryanar/hooks';
import { API_URL } from '../helpers/constants';

export const useSpotifyFetch = baseUseFetch({
  getBaseUrl: () => API_URL,
  defaultOptions: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
});
