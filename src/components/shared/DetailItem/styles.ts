import styled from 'styled-components';

import { TitleBlock } from 'styles/Typography';
import { themePalette } from 'styles/colors';

export const Title = styled.div`
  padding: 50px 0 50px;
  background-color: #292929;
`;

export const StyledTitleBlock = styled(TitleBlock)`
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: -40px auto 40px;
  padding: 20px;
  background-color: #fcfbf8;
  box-shadow: 0 2px 2px #0000001c;

  h1,
  h2,
  h3,
  h4,
  h6 {
    color: ${themePalette.primaryTitle};
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    padding: 32px 0 20px;
    font-size: 26px;
    font-weight: 700;
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 20px;
    color: ${themePalette.primaryText};
  }

  cite {
    display: inline-block;
    margin: 0 0 20px;
    color: ${themePalette.primaryText};
  }

  .poetry-item__date {
    font-size: 14px;
    margin-bottom: 20px;
  }

  ul {
    margin: 0 0 20px;

    li {
      position: relative;
      color: ${themePalette.primaryText};
      list-style: none;
      margin-bottom: 20px;

      &::before {
        content: '';
        position: absolute;
        left: -20px;
        width: 4px;
        top: 0;
        border-left: 4px solid ${themePalette.listBorder};
        height: 100%;
      }
    }
  }
`;

export const PoetryItemWrapper = styled.div``;

interface IPoetryItemImage {
  className: string;
  image: string;
}

export const PoetryItemImage = styled.div<IPoetryItemImage>`
  background-image: url(${({ image }) => image && `${image}?tr=h-960`});
  background-size: cover;
  background-repeat: no-repeat;
  height: 240px;
  background-position: center;
  position: relative;
  /* background-attachment: fixed; */

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000014;
  }

  @media (min-width: 700px) {
    background-image: url(${({ image }) => image && `${image}?tr=w-900`});
    height: 320px;
  }

  @media (min-width: 1200px) {
    background-image: url(${({ image }) => image && `${image}?tr=w-2000`});
    height: 480px;
  }
`;
