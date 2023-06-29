import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 320px;
  height: 70px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 10px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const FavouritesButton = styled.button`
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export { Content, FavouritesButton, Text, Wrapper };
