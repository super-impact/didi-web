import React from 'react';
import styled from 'styled-components';

import Caption2 from '../Typography/Caption2';

interface StyledProps {
  backgroundColor?: string;
}

export interface LabelProps extends StyledProps {
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, backgroundColor, className }) => {
  return (
    <Container className={className} backgroundColor={backgroundColor}>
      <Caption2 color="#6f6f6f">{text}</Caption2>
    </Container>
  );
};

export default Label;

const Container = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid #e8e8e8;
  outline: none;
  color: #6f6f6f;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#f8f8f8"};
`;
