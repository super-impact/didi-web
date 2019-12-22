import { gql } from 'apollo-boost';

export const UserSessionFragment = gql`
  fragment UserSessionFragmentFields on User {
    id
    email
    displayName
    createdAt
  }
`;
