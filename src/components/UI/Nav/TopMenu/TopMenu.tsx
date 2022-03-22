import { FC } from 'react';
import styled from '@emotion/styled';

import MenuItem from 'components/UI/Nav/MenuItem';

const TopMenu: FC = () => (
  <TopMenuWrapper>
    <MenuItem linkSrc="/blog/">Блог</MenuItem>
    <MenuItem linkSrc="/poetry/">Стихи</MenuItem>
  </TopMenuWrapper>
);

const TopMenuWrapper = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;

export default TopMenu;
