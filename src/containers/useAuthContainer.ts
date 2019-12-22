import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { UserSessionFragment } from 'graphql/fragments/UserSessionFragment';

import { StartSocialAuth, StartSocialAuthVariables } from './__generated__/startSocialAuth';

const START_SOCIAL_AUTH = gql`
  mutation StartSocialAuth($provider: String!, $oAuthCode: String!) {
    startSocialAuth(input: { provider: $provider, oAuthCode: $oAuthCode }) {
      user {
        ...UserSessionFragmentFields
      }
      accessToken
      refreshToken
    }
  }
  ${UserSessionFragment}
`;

export function useAuthContainer() {
  const [startSocialAuth, { data, error, loading }] = useMutation<
    StartSocialAuth,
    StartSocialAuthVariables
  >(START_SOCIAL_AUTH);

  return {
    startSocialAuth,
    data,
    error,
    loading
  };
}
