import Body2 from 'components/atoms/Typography/Body2';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const FieldWithTitle: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <Title>{props.title}</Title>
      {props.children}
    </div>
  );
};

export default React.memo(FieldWithTitle);

const Title = styled(Body2)`
  margin-bottom: 4px;
`;
