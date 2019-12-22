import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { getAccessToken } from 'utils/authTokenStore';

const { REACT_APP_GRAPHQL_API_URL } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_API_URL
});

const authLink = setContext((_, { headers }) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    return {
      headers: {
        ...headers,
        "access-token": accessToken
      }
    };
  }

  return {
    headers
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
