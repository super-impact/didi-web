import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { RootContext } from 'context/rootContext';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import { UserSessionFragment } from 'graphql/fragments/UserSessionFragment';
import { useCallback, useContext } from 'react';

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

  const [getMyUser, { loading, error, data }] = useLazyQuery<MyUser>(
    GET_MY_USER
  );

  const setUserSession = useCallback(
    (userSession: UserSessionFragmentFields) => {
      rootContext.setAuthorized(true);
      rootContext.setUserSession(userSession);
    },
    [rootContext]
  );

  return {
    loading,
    error,
    data,
    getMyUser,
    setUserSession,
    setIsSessionLoading: rootContext.setIsSessionLoading
  };
}
