import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { RootContext } from 'Context/rootContext';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import { UserSessionFragment } from 'graphql/fragments/UserSessionFragment';
import { useCallback, useContext } from 'react';
import { getAccessToken } from 'utils/authTokenStore';

import { MyUser } from './__generated__/MyUser';

const GET_MY_USER = gql`
  query MyUser {
    myUser {
      ...UserSessionFragmentFields
    }
  }
  ${UserSessionFragment}
`;

export function useUserSessionContainer() {
  const rootContext = useContext(RootContext);
  const { loading, error, data } = useQuery<MyUser>(GET_MY_USER);

  const setUserSession = useCallback(
    (userSession: UserSessionFragmentFields) => {
      rootContext.userSession = userSession;
    },
    [rootContext]
  );

  const setUserSessionLoading = useCallback(
    (loading: boolean) => {
      rootContext.isSessionLoading = loading;
    },
    [rootContext.isSessionLoading]
  );

  const isLoading = !getAccessToken() && loading;

  return {
    loading: isLoading,
    error,
    data,
    setUserSession,
    setUserSessionLoading
  };
}
