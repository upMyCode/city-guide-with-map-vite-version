import type {
  Features,
  InitialMarker,
} from '@/components/LocationMarkers/types';

interface MarkerCardProps {
  elem: Features | InitialMarker;
  info: string;
  icon: string | undefined;
}

export default MarkerCardProps;
