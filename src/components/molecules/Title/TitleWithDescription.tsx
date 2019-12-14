import React from 'react';
import styled from 'styled-components';

interface Props {
  titleText: string;
  descriptionText: string;
}

const TitleWithDescription: React.FC<Props> = props => {
  const { titleText, descriptionText } = props;

  return (
    <Container>
      <Title>{titleText}</Title>
      <Description>{descriptionText}</Description>
    </Container>
  );
};

export default React.memo(TitleWithDescription);

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: lighter;
  margin: 0;
`;
