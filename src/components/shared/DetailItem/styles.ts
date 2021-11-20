import styled from 'styled-components';

import { themePalette } from 'styles/colors';

export const DetailItemWrapper = styled.div<{ image: string | null }>`
  background-image: url(${({ image }) => image && `${image}?tr=h-960`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  padding: 40px 0;
  min-height: calc(100vh - 130px);

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
  }

  @media (min-width: 1200px) {
    background-image: url(${({ image }) => image && `${image}?tr=w-2000`});
  }
`;

export const Title = styled.div`
  padding: 40px 0 40px;
  background-color: #292929;
`;

export const Content = styled.div`
  max-width: 100%;
  min-height: 100%;
  padding: 20px;
  background-color: rgba(252, 251, 248, 0.95);

  @media (min-width: 800px) {
    margin: 0 auto;
    max-width: 800px;
    padding: 24px 40px;
    box-shadow: 0 3px 4px 3px #00000022;
  }

  h1,
  h2,
  h3,
  h4,
  h6 {
    color: ${themePalette.primaryTitle};
    text-align: center;
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

    @media (min-width: 800px) {
      text-align: justify;
    }

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  cite {
    display: inline-block;
    margin: 0 0 20px;
    color: ${themePalette.primaryText};
  }

  .poetry-item__date {
    text-align: center;
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

interface IPoetryItemImage {
  className: string;
  image: string;
}

export const PoetryItemImage = styled.div<IPoetryItemImage>`
  background-image: url(${({ image }) => image && `${image}?tr=h-960`});
  background-size: cover;
  background-repeat: no-repeat;
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

  @media (min-width: 700px) {
    background-image: url(${({ image }) => image && `${image}?tr=w-900`});
    height: 320px;
  }

  @media (min-width: 1200px) {
    background-image: url(${({ image }) => image && `${image}?tr=w-2000`});
    height: 480px;
  }
`;
