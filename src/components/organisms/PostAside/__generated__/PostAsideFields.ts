/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostAsideFields
// ====================================================

export interface PostAsideFields_contributorUser {
  __typename: "User";
  id: string;
  email: string;
  displayName: string;
}

export interface PostAsideFields {
  __typename: "Post";
  contentMakerEmail: string;
  contributorUser: PostAsideFields_contributorUser;
}
