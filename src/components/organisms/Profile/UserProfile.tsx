import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React from 'react';
import styled from 'styled-components';

interface Props {
  userSession: Pick<
    UserSessionFragmentFields,
    "id" | "profileImageUrl" | "displayName"
  >;
}

const UserProfile: React.FC<Props> = props => {
  const { userSession } = props;

  return (
    <Container>
      <ProfileImage imageURL={userSession.profileImageUrl} />
    </Container>
  );
};

export default React.memo(UserProfile);

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;

const ProfileImage = styled.div<{ imageURL: string }>`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-image: url(${props => props.imageURL});
  background-size: cover;
  border: 1px solid #eee;
`;
