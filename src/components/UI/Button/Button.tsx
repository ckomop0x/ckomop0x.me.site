import styled from '@emotion/styled';
import React, { FC } from 'react';
import {
  Button as ThemeUiButton,
  ButtonProps as ThemeUiButtonProps,
} from 'theme-ui';

export type ButtonProps = ThemeUiButtonProps;

const Button: FC<ButtonProps> = ({ onClick, children, ...props }) => (
  <ButtonWrapper onClick={onClick} {...props}>
    {children}
  </ButtonWrapper>
);

export const ButtonWrapper = styled(ThemeUiButton)`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  padding: 10px 20px;
`;

export default Button;
