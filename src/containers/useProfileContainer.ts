import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { ProfileHeaderFragments } from 'components/organisms/Header/ProfileHeader';
import { LikePostFragments } from 'components/organisms/PostList/LikePostList';
import { useParams } from 'react-router-dom';

import { User, UserVariables } from './__generated__/User';

const GET_USER_PROFILE = gql`
  query User($id: String!) {
    user(id: $id) {
      ...ProfileHeaderFields
      ...LikePostFields
    }
  }

  ${ProfileHeaderFragments.fields}
  ${LikePostFragments.fields}
`;

export function useProfileContainer() {
  const { userId } = useParams();

  const { loading, error, data } = useQuery<User, UserVariables>(
    GET_USER_PROFILE,
    {
      variables: {
        id: userId || ""
      }
    }
  );

  return {
    loading,
    error,
    data
  };
}
