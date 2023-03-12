import { FC } from 'react';

import MenuItem from 'components/UI/Nav/MenuItem';
import { TopMenuWrapper } from 'components/UI/Nav/TopMenu/styles';

const TopMenu: FC = () => (
  <TopMenuWrapper>
    <MenuItem linkSrc="/blog/">Блог</MenuItem>
    <MenuItem linkSrc="/poetry/">Стихи</MenuItem>
  </TopMenuWrapper>
);

export default TopMenu;
