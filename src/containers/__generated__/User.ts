/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_likePosts_topics {
  __typename: "Topic";
  name: string;
}

export interface User_user_likePosts_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
  profileImageUrl: string;
}

export interface User_user_likePosts {
  __typename: "Post";
  id: string;
  title: string;
  thumbnailImageUrl: string | null;
  description: string;
  likeCount: number;
  createdAt: any;
  topics: User_user_likePosts_topics[];
  contributorUser: User_user_likePosts_contributorUser;
}

export interface User_user {
  __typename: "User";
  id: string;
  email: string;
  profileImageUrl: string;
  displayName: string;
  createdAt: any;
  likeCount: number;
  likePosts: User_user_likePosts[];
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
}
