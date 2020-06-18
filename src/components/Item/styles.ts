import styled, { css } from 'styled-components';
import { IMAGES_ENDPOINT, SMALL_PREVIEW_IMAGE } from '../../config';
import { TitleStyled } from '@styles/TitleStyled';
import { Link } from 'gatsby';

export const ItemWrapper = styled.article``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.$MD}px) {
    flex-direction: row;
  }
`;

export const ItemImage = styled.div`
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

  ${({ background }: { background: string }) =>
    background &&
    css`
      background-size: cover;
      background-image: url("${`${IMAGES_ENDPOINT}/${SMALL_PREVIEW_IMAGE}/${background}`}");

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
  font-size: 12px;
`;

export const ItemContent = styled.div`
  position: relative;
  padding: 0;
  margin: 16px 0;
`;

export const ItemTitle = styled.h3`
  font-size: 21px;
  padding: 16px 0 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
`;

export const TextStyled = styled.div`
  line-height: 1.5;
  padding: 16px 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  color: #777;
  font-size: 16px;
`;

export const LinkStyled = styled(Link)`
  color: #777;
`;
