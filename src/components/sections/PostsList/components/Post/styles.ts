import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.$SM}px) {
    flex-direction: row;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .item-image {
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    max-width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 2%;
  }

  ${({ background }: { background?: string }) =>
    background
      ? css`
          .item-image--blurred {
            filter: blur(10px);
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            background-size: cover;
            background-position: center;
            background-image: url(${background}?tr=w-480);
          }
        `
      : ''}
`;

export const ItemDateStyled = styled.p`
  color: #747474;
  text-align: center;
  font-size: 12px;
`;

export const ItemContent = styled.div`
  position: relative;
  padding: 0;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

export const ItemTitle = styled.h3`
  font-size: 34px;
  text-align: center;
  padding: 32px 0 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
`;

export const TextStyled = styled.div`
  text-align: center;
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

export const ItemWrapper = styled.article<{
  featured?: boolean | null;
}>``;
