import React, { FunctionComponent, PropsWithChildren } from 'react';

type ButtonProps = {
  onClick: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
