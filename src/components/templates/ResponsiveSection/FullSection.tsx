import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

interface Props {
  children: React.ReactNode;
}

const FullSection: React.FC<Props> = props => {
  return <Container>{props.children}</Container>;
};

export default React.memo(FullSection);

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;

  ${BreakPoints.media.tablet`
    padding: 0 20px;
    flex-direction: column;
  `};
`;
