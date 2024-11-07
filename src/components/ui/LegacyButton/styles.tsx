import React, { forwardRef, ForwardedRef, PropsWithChildren } from 'react';

type ButtonWrapperProps = PropsWithChildren;

export const ButtonWrapper = forwardRef(
  ({ children }: ButtonWrapperProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button
      ref={ref}
      className="
        transition-shadow
        duration-300
        ease-in-out
        shadow
        shadow-[0_2px_3px_#0000001c]
        border-0
        px-5
        py-2.5
        bg-[#80312c]
        text-white
      "
    >
      {children}
    </button>
  ),
);
ButtonWrapper.displayName = 'ButtonWrapper';
