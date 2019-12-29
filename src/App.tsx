import { ApolloProvider } from '@apollo/react-hooks';
import UserSession from 'containers/UserSession';
import { RootContextProvider } from 'context/rootContext';
import { client } from 'graphql/apolloClient';
import { UserSessionFragmentFields } from 'graphql/fragments/__generated__/UserSessionFragmentFields';
import React, { useState } from 'react';
import GlobalStyle from 'styles/globalStyles';

import Routes from './pages/Routes';

const App: React.FC = () => {
  const [
    userSession,
    setUserSession
  ] = useState<UserSessionFragmentFields | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [isSessionLoading, setIsSessionLoading] = useState<boolean>(true);

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RootContextProvider
        value={{
          userSession,
          authorized,
          isSessionLoading,
          setUserSession,
          setAuthorized,
          setIsSessionLoading
        }}
      >
        <UserSession>
          <Routes />
        </UserSession>
      </RootContextProvider>
    </ApolloProvider>
  );
};

export default App;
