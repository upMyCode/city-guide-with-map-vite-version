import React, { useEffect, useState } from 'react';
import { Circle, useMapEvents } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

import getSightsDataNearby from '@/api';
import { chooseUserSights, getAllSights, getCategory } from '@/helpers';
import usePosition from '@/hooks/usePosition';
import type { TypeRootState } from '@/store';
import { setSightsListAction } from '@/store/action';

import CustomMarker from '../CustomMarker';
import type { Features, InitialMarker } from './types';

function LocationMarkers() {
  const { coords } = usePosition();
  const initialMarker = {
    type: 'features',
    id: '33565635',
    properties: { name: 'I m here', kinds: 'user' },
    geometry: { type: 'geometry', coordinates: [coords[1], coords[0]] },
  };

  const dispatch = useDispatch();
  const category = useSelector(
    (state: TypeRootState) => state.setSearchCategoriesReducer.category,
  );
  const radius = useSelector(
    (state: TypeRootState) => state.setDistanceRadiusReducer.radius,
  );
  const [markers, setMarkers] = useState<Array<Features | InitialMarker>>([]);

  useEffect(() => {
    try {
      const handleGetSight = async () => {
        const searchRadius = radius.toString();

        const sightsList = await getSightsDataNearby(coords, searchRadius);

        if (sightsList && typeof sightsList !== 'string') {
          const sortedSights = getAllSights(sightsList);

          if (sortedSights.length !== 0 && sortedSights) {
            const sights = chooseUserSights(sortedSights, category);
            setMarkers([initialMarker, ...sights]);
            dispatch(setSightsListAction([...sights]));
          } else {
            setMarkers([initialMarker]);
            dispatch(setSightsListAction([]));
          }
        } else if (sightsList) {
          setMarkers([initialMarker]);
          dispatch(setSightsListAction([]));
        }
      };

      void handleGetSight();
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }, [coords, radius, category]);

  const map = useMapEvents({
    click: () => map.locate(),
  });

  return (
    <div>
      {markers.map((elem: Features | InitialMarker) => {
        const { coordinates } = elem.geometry;

        if (coordinates) {
          const categoryMarker = getCategory(elem);

          return (
            <div key={elem.id}>
              {radius > 10 && categoryMarker === 'user' && (
                <Circle
                  center={[coordinates[1], coordinates[0]]}
                  radius={radius}
                  pathOptions={{ color: 'rgba(94, 123, 199, 0.4' }}
                >
                  <Circle
                    center={[coordinates[1], coordinates[0]]}
                    radius={radius / 10}
                    pathOptions={{ color: 'rgba(94, 123, 199, 0.8)' }}
                  />
                </Circle>
              )}
              <CustomMarker
                key={elem.id}
                icon={categoryMarker}
                position={[coordinates[1], coordinates[0]]}
                info={elem.properties.name}
                elem={elem}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default LocationMarkers;
