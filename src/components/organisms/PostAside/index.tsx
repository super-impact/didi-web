import { gql } from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';

import Body2 from '../../atoms/Typography/Body2';
import { PostAsideFields } from './__generated__/PostAsideFields';

export const PostAsideFragments = {
  fields: gql`
    fragment PostAsideFields on Post {
      contentMakerEmail
      contributorUser {
        id
        email
        displayName
      }
    }
  `
};

interface Props {
  post: PostAsideFields;
}

const PostAside: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <ContentUserSummaryProfile>
        <ContentUserSummaryProfileItem>
          <Title>공유자</Title>
          <ProfileContainer>
            <UserProfile />
            <MakerProfileContent>
              <Body2 color="#2b2b2b">{post.contributorUser.email}</Body2>
            </MakerProfileContent>
          </ProfileContainer>
        </ContentUserSummaryProfileItem>
        <ContentUserSummaryProfileItem>
          <Title>메이커</Title>
          <ProfileContainer>
            <UserProfile />
            <MakerProfileContent>
              <Body2 color="#2b2b2b">{post.contentMakerEmail}</Body2>
            </MakerProfileContent>
          </ProfileContainer>
        </ContentUserSummaryProfileItem>
      </ContentUserSummaryProfile>
    </Layout>
  );
};

export default React.memo(PostAside);

const Layout = styled.div`
  width: 100%;
`;

const ContentUserSummaryProfile = styled.div`
  padding: 12px;
  border-radius: 3px;
  box-shadow: rgba(41, 42, 43, 0.16) 0px 1px 3px -1px,
    rgba(0, 0, 0, 0.04) 0px 0px 1px 1px;
`;

const UserProfile = styled.div`
  border-radius: 100%;
  border: 1px solid #e8e8e8;
  background-color: #e8e8e8;
  width: 30px;
  height: 30px;
`;

const MakerProfileContent = styled.div`
  margin-left: 12px;
  flex: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Body2)`
  margin-bottom: 8px;
`;

const ContentUserSummaryProfileItem = styled.div`
  margin-bottom: 16px;

  :last-child {
    margin-bottom: 0;
  }
`;
