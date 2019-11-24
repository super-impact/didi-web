import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

import { PostAsideFragments } from '../components/organisms/PostAside';
import { PostBottomFixFragments } from '../components/organisms/PostBottomFix';
import { PostContentFragments } from '../components/organisms/PostContent';
import { PostProfileFragments } from '../components/organisms/PostProfile';
import { Post, PostVariables } from './__generated__/Post';

const GET_POST = gql`
  query Post($id: String!) {
    post(id: $id) {
      ...PostProfileFields
      ...PostContentFields
      ...PostAsideFields
      ...PostBottomFixFields
    }
  }
  ${PostProfileFragments.fields}
  ${PostContentFragments.fields}
  ${PostAsideFragments.fields}
  ${PostBottomFixFragments.fields}
`;

export function usePostDetail() {
  const { postId } = useParams();

  const { loading, error, data } = useQuery<Post, PostVariables>(GET_POST, {
    variables: { id: postId! }
  });

  return {
    loading,
    error,
    data
  };
}
