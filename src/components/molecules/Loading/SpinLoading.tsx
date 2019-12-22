import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

interface Props {
  fullSizeMode?: boolean;
}

const SpinLoading: React.FC<Props> = props => {
  const { fullSizeMode } = props;

  return (
    <Container fullSizeMode={fullSizeMode}>
      <ReactLoading type="spin" color="#4c9968" width="64px" height="64px" />
    </Container>
  );
};

export default React.memo(SpinLoading);

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: ${({ fullSizeMode }) => {
    if (fullSizeMode) {
      return "100vh";
    }

    return "calc(100vh - 57px)";
  }};
`;
