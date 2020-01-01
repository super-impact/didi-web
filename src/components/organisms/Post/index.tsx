import Body1 from 'components/atoms/Typography/Body1';
import Caption1 from 'components/atoms/Typography/Caption1';
import gql from 'graphql-tag';
import moment from 'moment';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
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
const Post: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <ProfileContainer>
        <ProfileImage imageURL={post.contributorUser.profileImageUrl} />
        <ProfileName>{post.contributorUser.displayName}</ProfileName>
      </ProfileContainer>
      <StyledLink to={`/posts/${post.id}`}>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
      </StyledLink>
      <BottomContainer>
        {post.topics.length > 0 && <TopicList topics={post.topics} />}
        <Header>
          <SharedDate>
            {moment(post.createdAt).format("YYYY-MM-DD HH:mm")}
          </SharedDate>
          <LikeContainer>
            <StyledLikeIcon color="#17487f" size={16} />
            <LikeText>좋아요 ({post.likeCount})</LikeText>
          </LikeContainer>
        </Header>
      </BottomContainer>
    </Layout>
  );
};

export default React.memo(Post);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 4px #eee;
  border-radius: 8px;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Title = styled(Body1)`
  font-size: 18px;
  font-weight: bold;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 6px;
`;

const Description = styled(Caption1)`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BottomContainer = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

const ProfileName = styled(Caption1)`
  color: #707070;
  margin-left: 8px;
  line-height: 28px;
`;

const SharedDate = styled(Caption1)`
  display: flex;
  justify-content: flex-start;
  color: #707070;
`;

const StyledLikeIcon = styled(AiOutlineLike)`
  margin-right: 4px;
`;

const LikeText = styled(Caption1)`
  color: #17487f;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
`;
