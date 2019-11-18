/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostContentFields
// ====================================================

export interface PostContentFields_contributorUser {
  __typename: "User";
  id: string;
  email: string;
  displayName: string;
}

export interface PostContentFields {
  __typename: "Post";
  contentLink: string;
  contentMakerEmail: string;
  thumbnailImageUrl: string;
  description: string;
  contributorUser: PostContentFields_contributorUser;
  createdAt: any;
}
