import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from './pages/Routes';

const client = new ApolloClient({ uri: "http://localhost:8001/graphql" });

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes />
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
    background-color: #f3f3f3;
  }
`;
