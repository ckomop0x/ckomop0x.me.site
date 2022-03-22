import { css } from "@emotion/react";
import styled  from '@emotion/styled';

export const FeaturedPostWrapper = styled.section`
  min-height: 100vh;

  .wrapper {
    background-color: #f5f5f5;
    background-size: cover;
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
    background &&
    css`
      .item-image {
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        background-size: cover;
        background-position: center;
        background-image: url(${background}?tr=w-1080);
      }
    `}
`;

export const LinkStyled = styled.a`
  background-color: hsl(211, 100%, 40%);
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 40px;
  box-shadow: 40px 10px 0 #b3710037, -40px -10px 0 #ffa20050, 0 0 10px #0000002e;
  transition: all 0.5s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: #0056b3;
    color: #f5f5f5;
    box-shadow: 30px 10px 0 #b37100, -30px -10px 0 #ffa200, 0 0 10px #0000004e;
  }
`;
