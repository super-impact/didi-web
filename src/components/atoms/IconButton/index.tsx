import React from 'react';
import styled from 'styled-components';

import Caption1 from '../Typography/Caption1';

interface OwnProps {
  icon: React.ReactChild;
  text: string;
  onClick: () => void;
}

interface StyledProps {
  width: string;
  height: string;
  backgroundColor: string;
  border: string;
}

type Props = OwnProps & StyledProps;

const IconButton: React.FC<Props> = ({ icon, text, onClick, ...restProps }) => {
  return (
    <StyledButton onClick={onClick} {...restProps}>
      <ContentLayout>
        {icon}
        <Caption1 fontWeight="bold">{text}</Caption1>
      </ContentLayout>
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  :hover {
    background-color: #f9f9f9;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default React.memo(IconButton);
