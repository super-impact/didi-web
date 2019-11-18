import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import PostContent, { PostContentFragments } from '../components/organisms/PostContent';
import PostProfile, { PostProfileFragments } from '../components/organisms/PostProfile';
import { Post, PostVariables } from './__generated__/Post';

const GET_POST = gql`
  query Post($id: String!) {
    post(id: $id) {
      ...PostProfileFields
      ...PostContentFields
    }
  }
  ${PostProfileFragments.fields}
  ${PostContentFragments.fields}
`;

const PostDetailContainer: React.FC = () => {
  const { postId } = useParams();

  const { loading, error, data } = useQuery<Post, PostVariables>(GET_POST, {
    variables: { id: postId! }
  });

  if (loading) {
    return <div>loading ...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data || !data.post) {
    return <div>no-data</div>;
  }

  return (
    <div>
      <PostProfileWrapper>
        <PostProfile post={data.post} />
      </PostProfileWrapper>
      <PostContent post={data.post} />
    </div>
  );
};

export default React.memo(PostDetailContainer);

const PostProfileWrapper = styled.div`
  margin-bottom: 24px;
`;
