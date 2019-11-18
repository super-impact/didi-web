import { gql } from 'apollo-boost';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';

import { BreakPoints } from '../../../utils';
import Button, { ButtonBackgroundColor, ButtonBorderColor, ButtonTextColor } from '../../atoms/Button';
import Line from '../../atoms/Line';
import Body2 from '../../atoms/Typography/Body2';
import Caption1 from '../../atoms/Typography/Caption1';
import { PostContentFields } from './__generated__/PostContentFields';

export const PostContentFragments = {
  fields: gql`
    fragment PostContentFields on Post {
      contentLink
      contentMakerEmail
      thumbnailImageUrl
      description
      contributorUser {
        id
        email
        displayName
      }
      createdAt
    }
  `
};

interface Props {
  post: PostContentFields;
}

const PostContent: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <ContentLayout>
        <PostImage src={post.thumbnailImageUrl} />
        <Body2>{post.description}</Body2>
        <Body2>공유날짜: {post.createdAt}</Body2>
      </ContentLayout>
      <Aside>
        <ContentLink target="_blank" href={post.contentLink}>
          <Caption1 color="#2b2b2b" fontWeight="bold">
            콘텐츠 보러가기
          </Caption1>
          <MdKeyboardArrowRight size={20} color="#2b2b2b" />
        </ContentLink>
        <Line />
        <StyledButton
          text={
            <Caption1 fontWeight="bold" color="white">
              좋아요
            </Caption1>
          }
          onClick={() => alert("share button clicked")}
          color={ButtonTextColor.WHITE}
          backgroundColor={ButtonBackgroundColor.GREEN}
          borderColor={ButtonBorderColor.GREEN}
          fill
        />
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
      </Aside>
    </Layout>
  );
};

export default React.memo(PostContent);

const Layout = styled.div`
  display: flex;
  ${BreakPoints.media.tablet`
    flex-direction: column;
  `}
`;

const ContentLayout = styled.main`
  width: 680px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 20px;

  ${BreakPoints.media.tablet`
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  `}
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Aside = styled.aside`
  width: 340px;
  margin-left: 20px;
  ${BreakPoints.media.tablet`
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  `}
`;

const StyledButton = styled(Button)`
  padding: 8px 16px;
  background-color: #ffa932;
  border: 1px solid #ffa932;
`;

const ContentLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #e8e8e8;
  padding: 12px;
  border-radius: 3px;
  text-decoration: none;
  line-height: 24px;
`;

const ContentUserSummaryProfile = styled.div`
  margin-top: 12px;
  border: 1px solid #e8e8e8;
  padding: 12px;
  border-radius: 3px;
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
