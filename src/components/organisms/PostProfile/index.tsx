import { gql } from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';

import Thumbnail from '../../atoms/Thumbnail';
import Caption1 from '../../atoms/Typography/Caption1';
import Heading2 from '../../atoms/Typography/Heading2';
import { PostProfileFields } from './__generated__/PostProfileFields';

export const PostProfileFragments = {
  fields: gql`
    fragment PostProfileFields on Post {
      title
      thumbnailImageUrl
      description
      topics {
        name
      }
    }
  `
};

interface Props {
  post: PostProfileFields;
}

const PostProfile: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <ThumbnailWrapper>
        <Thumbnail
          imageURL={post.thumbnailImageUrl}
          width="80px"
          height="80px"
        />
      </ThumbnailWrapper>
      <ProfileInformation>
        <Heading2 fontWeight="bold">{post.title}</Heading2>
        <Description>{post.description}</Description>
        <TopicsContainer>
          {post.topics.map(topic => {
            return <Topic>{topic.name}</Topic>;
          })}
        </TopicsContainer>
      </ProfileInformation>
    </Container>
  );
};

export default React.memo(PostProfile);

const Container = styled.div`
  display: flex;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: none;
`;

const ProfileInformation = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Description = styled(Caption1)`
  color: #6f6f6f;
`;

const TopicsContainer = styled.div`
  display: flex;
`;

const Topic = styled.button`
  width: 70px;
  height: 24px;
  border: 1px solid #e8e8e8;
  background-color: #f8f8f8;
  margin-right: 12px;
  outline: none;
  cursor: pointer;
  color: #6f6f6f;
  :hover {
    background-color: #ebebeb;
  }
  :last-child {
    margin-right: 0;
  }
`;
