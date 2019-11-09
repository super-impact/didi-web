import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

import { PostFragments } from '../components/organisms/Post';
import PostList from '../components/organisms/PostList';
import { Posts, PostsVariables } from './__generated__/Posts';

const GET_POSTS = gql`
  query Posts($skip: Int, $take: Int) {
    posts(skip: $skip, take: $take) {
      ...PostSummaryFields
    }
  }
  ${PostFragments.fields}
`;

const PostContainer: React.FC = () => {
  const { loading, error, data } = useQuery<Posts, PostsVariables>(GET_POSTS, {
    variables: { skip: 0, take: 10 }
  });

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data || !data.posts) {
    return <div>no-data</div>;
  }

  return <PostList posts={data.posts} />;
};

export default PostContainer;
