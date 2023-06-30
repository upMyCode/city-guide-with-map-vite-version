import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TypeRootState } from '@/store';
import { setFavouritesAction } from '@/store/action';

import { Content, FavouritesButton, Text, Wrapper } from './styled';
import type MarkerCardProps from './types';

function MarkerCard({ elem, info, icon }: MarkerCardProps) {
  const dispatch = useDispatch();
  const sights = useSelector(
    (state: TypeRootState) => state.setFavouritesReducer.favourites,
  );
  const [isFavourites, setFavourites] = useState<boolean>(false);

  const handleFavourites = () => {
    setFavourites((prev) => !prev);
  };

  const handlePropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (isFavourites) {
      dispatch(setFavouritesAction([...sights, elem]));
    } else {
      const updatedSight = sights.filter((item) => item.id !== elem.id);

      dispatch(setFavouritesAction([...updatedSight]));
    }
  }, [isFavourites]);

  return (
    <Wrapper onClick={handlePropagation}>
      {icon !== 'user' ? (
        <Content>
          <Text>{info}</Text>
          {!isFavourites ? (
            <FavouritesButton onClick={handleFavourites}>
              <FavoriteBorderRoundedIcon
                style={{ width: '20px', height: '20px' }}
              />
            </FavouritesButton>
          ) : (
            <FavouritesButton onClick={handleFavourites}>
              <FavoriteRoundedIcon
                style={{ width: '20px', height: '20px', color: 'red' }}
              />
            </FavouritesButton>
          )}
        </Content>
      ) : (
        <Content>
          <Text>{info}</Text>
        </Content>
      )}
    </Wrapper>
  );
}

export default MarkerCard;
