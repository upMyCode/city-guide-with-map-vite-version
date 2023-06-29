import type { Features } from '@/components/LocationMarkers/types';
import type { SetFavouritesAction } from './types';

interface Favourites {
  favourites: Array<Features>;
}
const initialState: Favourites = {
  favourites: [],
};

const setFavouritesReducer = (
  state = initialState,
  action: SetFavouritesAction,
) => {
  switch (action.type) {
    case 'SET_FAVOURITES':
      return {
        favourites: action.payload,
      };

    default:
      return state;
  }
};

export default setFavouritesReducer;
