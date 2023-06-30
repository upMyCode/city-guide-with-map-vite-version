interface Geometry {
  type: string;
  coordinates: Array<number>;
}

interface Properties {
  dist: number;
  kinds: string;
  name: string;
  osm: string;
  rate: number;
  xid: string;
}
interface Features {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

interface Locations {
  type: string;
  features: Array<Features>;
}

interface LocationsAPI {
  data: Locations;
}

interface InitialMarker {
  type: string;
  id: string;
  properties: {
    name: string;
    kinds: string;
  };
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
}

export type { Features, Geometry, InitialMarker, Locations, LocationsAPI };
