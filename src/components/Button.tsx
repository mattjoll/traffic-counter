import React, { FunctionComponent, PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className="border-blue-400 hover:border-blue-500 border-2 hover:bg-gray-50 font-semibold py-2 px-4 rounded w-24"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
