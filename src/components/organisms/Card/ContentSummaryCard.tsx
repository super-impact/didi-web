import { gql } from 'apollo-boost';
import Body2 from 'components/atoms/Typography/Body2';
import moment from 'moment';
import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { TopicFragments, TopicList } from '../List';
import { PostSummaryFields } from './__generated__/PostSummaryFields';

export const PostFragments = {
  fields: gql`
    fragment PostSummaryFields on Post {
      id
      title
      thumbnailImageUrl
      description
      likeCount
      createdAt
      topics {
        ...TopicFields
      }
      contributorUser {
        id
        email
        displayName
        profileImageUrl
      }
    }
    ${TopicFragments.fields}
  `
};

type Props = {
  post: PostSummaryFields;
};

const ContentSummaryCard: React.FC<Props> = React.memo(props => {
  const { post } = props;

  return (
    <Container>
      <ProfileContainer>
        <ProfileImage imageURL={post.contributorUser.profileImageUrl} />
        <ProfileName>{post.contributorUser.displayName}</ProfileName>
      </ProfileContainer>
      <StyledLink to={`/posts/${post.id}`}>
        <ContentSection>
          <ThumbnailImage src={post.thumbnailImageUrl || ""} />
          <DescriptionSection>
            <div>
              <Title>{post.title}</Title>
              <Content>{post.description}</Content>
            </div>
            {post.topics.length > 0 && (
              <DescriptionBottomContainer>
                <TopicList topics={post.topics} />
              </DescriptionBottomContainer>
            )}
          </DescriptionSection>
        </ContentSection>
      </StyledLink>
      <BottomSection>
        <SharedDate>{moment(post.createdAt).format("YYYY-MM-DD")}</SharedDate>
        <ActionSection>
          <MdFavoriteBorder size={22} />
        </ActionSection>
      </BottomSection>
    </Container>
  );
});

export default React.memo(ContentSummaryCard);

const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  box-shadow: 0px 0px 4px #eee;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ProfileImage = styled.div<{ imageURL: string }>`
  border-radius: 100%;
  background-image: url(${props => props.imageURL});
  background-size: cover;
  width: 28px;
  height: 28px;
  box-shadow: 0 0 4px #eee;
`;

const ProfileName = styled(Body2)`
  color: #707070;
  margin-left: 8px;
  line-height: 28px;
`;

const ContentSection = styled.div`
  display: flex;
  width: 100%;
`;

const ThumbnailImage = styled.img`
  max-width: 124px;
  width: 100%;
  object-fit: cover;
  margin-right: 12px;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescriptionBottomContainer = styled.div`
  margin-top: 12px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
  font-size: 20px;

  word-break: keep-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Content = styled.span`
  font-size: 16px;
  word-break: keep-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;

const SharedDate = styled(Body2)`
  color: #707070;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  margin-bottom: 12px;
`;
