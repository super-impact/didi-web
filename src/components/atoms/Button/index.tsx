import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
  SMALL = "small",
  LARGE = "large"
}

export enum ButtonTextColor {
  BLACK = "#272726",
  WHITE = "#FFFFFF"
}

export enum ButtonBackgroundColor {
  WHITE = "#FFFFFF",
  GREEN = "#4c9968"
}

export enum ButtonBorderColor {
  GRAY = "#c4c4c4",
  GREEN = "#4c9968"
}

interface Props {
  text: string;
  color: ButtonTextColor;
  backgroundColor: ButtonBackgroundColor;
  borderColor: ButtonBorderColor;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  text,
  color,
  backgroundColor,
  borderColor,
  onClick,
  ...restProps
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  color: string;
  backgroundColor: string;
  borderColor: string;
}>`
  height: 30px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 3px;
  outline: none;
  padding: 0 16px;
  cursor: pointer;
  font-weight: bold;
`;

export default React.memo(Button);
