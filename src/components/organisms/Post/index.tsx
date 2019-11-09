import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import Thumbnail from '../../atoms/Thumbnail';
import Body2 from '../../atoms/Typography/Body2';
import Caption1 from '../../atoms/Typography/Caption1';
import { PostSummaryFields } from './__generated__/PostSummaryFields';

export const PostFragments = {
  fields: gql`
    fragment PostSummaryFields on Post {
      id
      title
      thumbnailImageUrl
      description
    }
  `
};

type Props = {
  post: PostSummaryFields;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <ThumbnailWrapper>
        <Thumbnail
          imageURL={post.thumbnailImageUrl}
          width="80px"
          height="80px"
        />
      </ThumbnailWrapper>
      <DescriptionLayout>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
      </DescriptionLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: #f9f9f9;
  }
`;

const ThumbnailWrapper = styled.div`
  margin-right: 10px;
`;

const DescriptionLayout = styled.div`
  flex: 1;
`;

const Description = styled(Caption1)`
  color: #6f6f6f;
`;

const Title = styled(Body2)`
  font-weight: bold;
`;

export default React.memo(Post);
