import { FC, forwardRef, PropsWithChildren } from 'react';

import { ButtonWrapper } from 'components/ui/Button/styles';

export interface ButtonProps {
  onClick?(): void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = forwardRef((props, ref) => {
  const { onClick, children, ...rest } = props;

  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      {children}
    </ButtonWrapper>
  );
});

export default Button;
