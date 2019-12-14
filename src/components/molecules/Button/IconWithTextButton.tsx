import React from 'react';
import styled from 'styled-components';

interface Props {
  iconURL: string;
  text: string;
  onClick?: () => void;
}

const IconWithTextButton: React.FC<Props> = props => {
  const { iconURL, text, onClick } = props;

  return (
    <Container onClick={onClick}>
      <img src={iconURL} alt="icon" />
      <Text>{text}</Text>
    </Container>
  );
};

export default React.memo(IconWithTextButton);

const Container = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 14px 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: white;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  margin-left: 8px;
`;
