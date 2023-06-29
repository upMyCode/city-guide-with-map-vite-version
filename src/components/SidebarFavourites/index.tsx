import React from 'react';
import { useSelector } from 'react-redux';

import type { TypeRootState } from '@/store';

import type { Features } from '../LocationMarkers/types';
import {
  Content,
  SightItem,
  SightsContainer,
  SightsInfo,
  SightsList,
  Wrapper,
} from './styled';

function SidebarFavourites() {
  const favourites = useSelector(
    (state: TypeRootState) => state.setFavouritesReducer.favourites,
  );

  return (
    <Wrapper>
      <Content>
        <SightsContainer>
          <SightsInfo>Избранные :</SightsInfo>
          <SightsList>
            {favourites.map((sight: Features) => (
              <SightItem key={sight.id}>{sight.properties.name}</SightItem>
            ))}
          </SightsList>
        </SightsContainer>
      </Content>
    </Wrapper>
  );
}

export default SidebarFavourites;
