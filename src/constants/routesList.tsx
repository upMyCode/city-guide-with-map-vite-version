import HomePage from '@/pages/HomePage';
import SearchPage from '@/pages/SearchPage';
import FavouritesPage from '@/pages/FavouritesPage';

import PATHS from './paths/paths';
import type RoutesList from './types';

const { HOME, SEARCH, FAVOURITES } = PATHS;

const ROUTES_LIST: RoutesList = [
  {
    path: HOME,
    element: <HomePage />,
  },
  {
    path: SEARCH,
    element: <SearchPage />,
  },
  {
    path: FAVOURITES,
    element: <FavouritesPage />,
  },
];

export default ROUTES_LIST;
