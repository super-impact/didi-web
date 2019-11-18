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

interface OwnProps {
  text: React.ReactChild;
  onClick: () => void;
}

interface StyledProps {
  color: ButtonTextColor;
  backgroundColor: ButtonBackgroundColor;
  borderColor: ButtonBorderColor;
  fill?: boolean;
}

type Props = OwnProps & StyledProps;

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

const StyledButton = styled.button<StyledProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor};
  border-radius: 3px;
  outline: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  ${props => props.fill && "width: 100%;"}
`;

export default React.memo(Button);
