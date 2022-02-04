import React from 'react';
import styled from 'styled-components';

import MenuItem from 'components/UI/Nav/MenuItem';

export default function TopMenu() {
  return (
    <TopMenuWrapper>
      <MenuItem title="Блог" linkSrc="/blog/" />
      <MenuItem title="Стихи" linkSrc="/poetry/" />
    </TopMenuWrapper>
  );
}

const TopMenuWrapper = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;
