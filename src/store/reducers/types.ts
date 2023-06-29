import type { LatLngTuple } from 'leaflet';

import type {
  setCurrentUserInfoAction,
  setDistanceRadiusAction,
  setFavouritesAction,
  setModalStatusAction,
  setSearchCategoriesAction,
  setSightsListAction,
  setUserPositionAction,
} from '../action';

type SetCurrentUserInfoAction = ReturnType<typeof setCurrentUserInfoAction>;
type SetDistanceRadiusAction = ReturnType<typeof setDistanceRadiusAction>;
type SetModalStatusAction = ReturnType<typeof setModalStatusAction>;
type SetSearchCategoriesAction = ReturnType<typeof setSearchCategoriesAction>;
type SetUserPositionAction = ReturnType<typeof setUserPositionAction>;
type SetSightsListAction = ReturnType<typeof setSightsListAction>;
type SetFavouritesAction = ReturnType<typeof setFavouritesAction>;

interface Coords {
  coords: LatLngTuple;
  zoom: number;
}

interface Status {
  status: boolean;
  modalName?: string;
}

interface User {
  userEmail: string | null;
  uid: string;
}

export type {
  Coords,
  SetCurrentUserInfoAction,
  SetDistanceRadiusAction,
  SetFavouritesAction,
  SetModalStatusAction,
  SetSearchCategoriesAction,
  SetSightsListAction,
  SetUserPositionAction,
  Status,
  User,
};
