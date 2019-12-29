import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { unionBy } from 'lodash';
import React, { useCallback, useState } from 'react';

import PostListSkeleton from '../components/molecules/PostListSkeleton';
import { PostFragments } from '../components/organisms/Post';
import PostList from '../components/organisms/PostList';
import { Posts, PostsVariables } from './__generated__/Posts';

export const FETCH_POST_LENGTH = 30;

const GET_POSTS = gql`
  query Posts($skip: Int, $take: Int) {
    posts(skip: $skip, take: $take) {
      ...PostSummaryFields
    }
  }
  ${PostFragments.fields}
`;

const PostContainer: React.FC = () => {
  const [fetchedPostLength, setFetchedPostLength] = useState(FETCH_POST_LENGTH);
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery<Posts, PostsVariables>(
    GET_POSTS,
    {
      variables: { skip: 0, take: FETCH_POST_LENGTH }
    }
  );

  const loadMore = useCallback(() => {
    fetchMore({
      variables: {
        skip: data ? data.posts.length : 0,
        take: FETCH_POST_LENGTH
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult.posts.length === 0) {
          setHasMore(false);
          return prev;
        }

        setFetchedPostLength(fetchedPostLength + fetchMoreResult.posts.length);

        return {
          ...prev,
          posts: unionBy(prev.posts, fetchMoreResult.posts, "id")
        };
      }
    });
  }, [data, fetchedPostLength, fetchMore]);

  if (loading) {
    return <PostListSkeleton title="공유된 콘텐츠" postCount={10} />;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data || !data.posts) {
    return <div>no-data</div>;
  }

  return (
    <PostList
      title="공유된 콘텐츠"
      posts={data.posts}
      loadMore={loadMore}
      hasMore={data.posts.length < FETCH_POST_LENGTH ? false : hasMore}
      fetchedPostLength={fetchedPostLength}
    />
  );
};

export default PostContainer;
