import styled from '@emotion/styled';
import { FC, ForwardedRef, forwardRef, ReactNode } from 'react';

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode | string;
}

const Button: FC<ButtonProps> = forwardRef((props, ref) => {
  const { onClick, children, ...rest } = props;

  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      {children}
    </ButtonWrapper>
  );
});

export const ButtonWrapper = styled.button<{
  ref?: ForwardedRef<unknown>;
}>`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  padding: 10px 20px;
`;

export default Button;
