// src/components/Button/Button.tsx

import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <button onClick={onClick}>
        {text}
    </button>
  );
};

export default Button;