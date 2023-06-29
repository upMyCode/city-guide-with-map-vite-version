import type { LatLngTuple } from 'leaflet';
import type { Features } from '@/components/LocationMarkers/types';
interface CustomMarkerProps {
  icon: string | undefined;
  position: LatLngTuple;
  info: string;
  elem: Features;
}

export default CustomMarkerProps;
