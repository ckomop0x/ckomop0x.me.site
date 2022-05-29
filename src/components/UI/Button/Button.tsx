import styled from '@emotion/styled';
import React, { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props, ref) => {
  const { onClick, children, ...rest } = props;

  return (
    <ButtonWrapper onClick={onClick} ref={ref} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export const ButtonWrapper = styled.button`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  padding: 10px 20px;
`;

export default Button;
