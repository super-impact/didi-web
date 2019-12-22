import { ApolloProvider } from '@apollo/react-hooks';
import UserSession from 'containers/UserSession';
import { RootContextProvider } from 'Context/rootContext';
import { client } from 'graphql/apolloClient';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from './pages/Routes';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <RootContextProvider
        value={{
          userSession: null,
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

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }
`;
