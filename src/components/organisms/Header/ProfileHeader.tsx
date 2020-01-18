import { gql } from 'apollo-boost';
import Body2 from 'components/atoms/Typography/Body2';
import Heading2 from 'components/atoms/Typography/Heading2';
import React from 'react';
import styled from 'styled-components';
import { BreakPoints } from 'utils';

import { ProfileHeaderFields } from './__generated__/ProfileHeaderFields';

export const ProfileHeaderFragments = {
  fields: gql`
    fragment ProfileHeaderFields on User {
      id
      email
      profileImageUrl
      displayName
      createdAt
    }
  `
};

interface Props {
  className?: string;
  user: ProfileHeaderFields;
}

export const ProfileHeader: React.FC<Props> = React.memo(props => {
  const { user } = props;

  return (
    <Container>
      <ProfimeImage src={user.profileImageUrl} />
      <ProfileContent>
        <ProfileName fontWeight="bold">{user.displayName}</ProfileName>
        <ProfileEmail>{user.email}</ProfileEmail>
      </ProfileContent>
    </Container>
  );
});

const Container = styled.div`
  padding: 30px;
  border-radius: 3px;
  background-color: #272727;
  display: flex;
  justiy-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfimeImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  background-color: white;
  border-radius: 100%;
  box-shadow: 1px
  margin-right: 0;

  ${BreakPoints.media.mobile`
    width: 82px;
    height: 82px;
  `}
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;

const ProfileName = styled(Heading2)`
  color: white;
  margin-bottom: 4px;

  ${BreakPoints.media.mobile`
    font-size: 17px;
  `}
`;

const ProfileEmail = styled(Body2)`
  color: white;
  ${BreakPoints.media.mobile`
    font-size: 14px;
  `}
`;
