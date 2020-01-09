import Caption2 from 'components/atoms/Typography/Caption2';
import React from 'react';
import { MdErrorOutline } from 'react-icons/md';
import styled from 'styled-components';

interface Props {
  className?: string;
  message: string;
}

const ErrorMessage: React.FC<Props> = props => {
  return (
    <Container className={props.className}>
      <MdErrorOutline size={14} color="#e32249" />
      <Message color="#e32249">{props.message}</Message>
    </Container>
  );
};

export default React.memo(ErrorMessage);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Message = styled(Caption2)`
  margin-left: 4px;
`;
