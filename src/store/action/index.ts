import type {
  Features,
  InitialMarker,
} from '@/components/LocationMarkers/types';

import type { LocationData, Status, User } from './types';

const setCurrentUserInfoAction = (user: User | null) => ({
  payload: user,
  type: 'SET_CURRENT_USER',
});

const setDistanceRadiusAction = (radius: number) => ({
  payload: radius,
  type: 'SET_RADIUS',
});

const setModalStatusAction = (status: Status) => ({
  type: 'SET_MODAL_STATUS',
  payload: status,
});

const setSearchCategoriesAction = (category: string) => ({
  payload: category,
  type: 'SET_CATEGORY',
});

const setUserPositionAction = (location: LocationData) => ({
  payload: location,
  type: 'SET_USER_POSITION',
});

const setFavouritesAction = (favourites: Array<Features | InitialMarker>) => ({
  payload: favourites,
  type: 'SET_FAVOURITES',
});

const setSightsListAction = (sights: Array<Features>) => ({
  payload: sights,
  type: 'SET_SIGHTS',
});

export {
  setCurrentUserInfoAction,
  setDistanceRadiusAction,
  setFavouritesAction,
  setModalStatusAction,
  setSearchCategoriesAction,
  setSightsListAction,
  setUserPositionAction,
};
