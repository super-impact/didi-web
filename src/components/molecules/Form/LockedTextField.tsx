import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  className?: string;
}

const LockedTextField: React.FC<Props> = props => {
  return <Container className={props.className}>{props.value}</Container>;
};

export default React.memo(LockedTextField);

const Container = styled.div`
  width: 100%;
  padding: 14px;
  border-radius: 3px;
  font-size: 14px;
  outline: none;
  border: 1px solid #f9f9f9;
  background: #f9f9f9;
  color: #6f6f6f;
  cursor: not-allowed;
`;
