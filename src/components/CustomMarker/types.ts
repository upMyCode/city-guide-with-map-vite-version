import type { LatLngTuple } from 'leaflet';

import type {
  Features,
  InitialMarker,
} from '@/components/LocationMarkers/types';

interface CustomMarkerProps {
  icon: string | undefined;
  position: LatLngTuple;
  info: string;
  elem: Features | InitialMarker;
}

export default CustomMarkerProps;
