/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostAsideFields
// ====================================================

export interface PostAsideFields_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
}

export interface PostAsideFields {
  __typename: "Post";
  contentMakerEmail: string | null;
  contributorUser: PostAsideFields_contributorUser;
}
