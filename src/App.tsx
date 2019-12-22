import { ApolloProvider } from '@apollo/react-hooks';
import UserSession from 'containers/UserSession';
import { RootContextProvider } from 'Context/rootContext';
import { client } from 'graphql/apolloClient';
import React from 'react';
import GlobalStyle from 'styles/globalStyles';

import Routes from './pages/Routes';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RootContextProvider
        value={{
          userSession: null,
          authorized: false,
          isSessionLoading: true
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
