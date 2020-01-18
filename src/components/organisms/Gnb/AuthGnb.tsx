import Caption1 from 'components/atoms/Typography/Caption1';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import UserProfile from '../Profile/UserProfile';

interface Props {
  userSession: UserSessionFragmentFields;
}

const AuthGnb: React.FC<Props> = props => {
  return (
    <Container>
      <StyledLink to="/share">
        <Item>공유하기</Item>
      </StyledLink>
      <StyledLink to="/me/bookmark">
        <Item>내 북마크</Item>
      </StyledLink>
      <StyledLink to={`/profile/${props.userSession.id}`}>
        <UserProfile userSession={props.userSession} />
      </StyledLink>
    </Container>
  );
};

export default React.memo(AuthGnb);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Item = styled(Caption1)`
  font-size: 14px;
  margin-right: 12px;
  color: #272727;
  cursor: pointer;
`;
