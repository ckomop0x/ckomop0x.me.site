import { FC, forwardRef, PropsWithChildren } from 'react';

import { ButtonWrapper } from '@/components/ui/LegacyButton/styles';

export interface ButtonProps {
  onClick?(): void;
}

const LegacyButton: FC<PropsWithChildren<ButtonProps>> = forwardRef(
  (props, ref) => {
    const { onClick, children, ...rest } = props;

    return (
      <ButtonWrapper onClick={onClick} {...rest}>
        {children}
      </ButtonWrapper>
    );
  },
);

export default LegacyButton;
