import styled, { css } from 'styled-components';
import { IMAGES_ENDPOINT, SMALL_PREVIEW_IMAGE } from '../../config';
import { TitleStyled } from '@styles/TitleStyled';

export const ItemWrapper = styled.article``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.$MD}px) {
    flex-direction: row;
  }
`;

export const ItemImage = styled.div<{
  background: string;
}>`
  opacity: 1;
  background-color: white;
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-basis: 100%;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 300px;

  ${({ background }) =>
    background &&
    `
      background-size: cover;
      background-image: url("${`${IMAGES_ENDPOINT}/${SMALL_PREVIEW_IMAGE}/${background}
    `}");

    ${TitleStyled}, ${ItemDateStyled} {
      color: white;
      position: relative;
      z-index: 1;
      margin: 0;
    }

    ${TitleStyled} {
      margin: 0 0 16px;
      border-bottom: 1px solid #eaf20d;
      padding-bottom: 16px;
    }

    &:before {
      transition: background-image 3s;
      content: '';
      left: 0;
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(#09045d00 40%, #000 100%);
    }
  `}

   @media (min-width: ${({ theme }) => theme.$MD}px) {
    flex-direction: row;
  }

  &:hover {
    cursor: pointer;
    &:before {
      transition: background-color ease 0.2s;
      position: absolute;
      content: "";
      background-color: rgba(0,0,0,0.5);
    }
  }

  @keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}
`;

export const ItemDateStyled = styled.p`
  color: #747474;
  padding: 0 16px;
  font-size: 12px;
`;

export const ItemContent = styled.div`
  position: relative;
  /* padding-right: 20px; */
  /* padding-left: 20px; */
  /* -webkit-box-flex: 0; */
  /* -ms-flex: 0 0 50%; */
  /* flex: 0 0 50%; */
  /* padding: 32px 0; */
  border: 1px solid #a5a5a552;
  /* box-shadow: 0px 7px 13px 0px #000; */
  /* border-radius: 16px; */
  /* FONT-WEIGHT: 100; */
  padding: 0;
  /* background: #353535; */
  margin: 16px;
`;

export const ItemTitle = styled.h3`
  font-size: 21px;
  padding: 16px 16px 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
`;

export const TextStyled = styled.div`
  line-height: 1.5;
  padding: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #777;
  font-size: 16px;
`;
