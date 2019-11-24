import { gql } from 'apollo-boost';
import Caption1 from 'components/atoms/Typography/Caption1';
import Heading2 from 'components/atoms/Typography/Heading2';
import React from 'react';
import styled from 'styled-components';

import { TopicFragments, TopicList } from '../List';
import { PostProfileFields } from './__generated__/PostProfileFields';

export const PostProfileFragments = {
  fields: gql`
    fragment PostProfileFields on Post {
      title
      description
      topics {
        ...TopicFields
      }
    }
    ${TopicFragments.fields}
  `
};

interface Props {
  post: PostProfileFields;
}

const PostProfile: React.FC<Props> = ({ post }) => {
  return (
    <Container>
      <div>
        <Title fontWeight="bold">{post.title}</Title>
        <Caption1 color="#6f6f6f">{post.description}</Caption1>
      </div>
      {post.topics.length > 0 && (
        <TopicWrapper>
          <TopicList topics={post.topics} />
        </TopicWrapper>
      )}
    </Container>
  );
};

export default React.memo(PostProfile);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Heading2)`
  margin-bottom: 4px;
`;

const TopicWrapper = styled.div`
  margin-top: 12px;
`;
