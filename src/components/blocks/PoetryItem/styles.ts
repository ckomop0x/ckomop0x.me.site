import styled from 'styled-components';
import { themePalette } from '@styles/colors';
import { TitleBlock } from '@styles/Typography';

export const Title = styled.div`
  padding: 50px 0 50px;
  background-color: #292929;
`;

export const StyledTitleBlock = styled(TitleBlock)`
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 500px;
  margin: -40px auto;
  background-color: #f0ebde;
  padding: 20px;
  box-shadow: 0 2px 4px #0000001c;

  h2 {
    color: ${themePalette.primaryTitle};
    padding: 0px 0 20px;
    font-size: 26px;
    font-weight: 700;
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 20px;
    color: ${themePalette.primaryTitle};
  }
`;

export const PoetryItemWrapper = styled.div`
  .poetry-item__image {
    background-size: cover;
    background-repeat: no-repeat;
    height: 480px;
    background-position: center;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #00000014;
    }
  }
`;
