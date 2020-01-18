/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LikePostFields
// ====================================================

export interface LikePostFields_likePosts_topics {
  __typename: "Topic";
  name: string;
}

export interface LikePostFields_likePosts_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
  profileImageUrl: string;
}

export interface LikePostFields_likePosts {
  __typename: "Post";
  id: string;
  title: string;
  thumbnailImageUrl: string | null;
  description: string;
  likeCount: number;
  createdAt: any;
  topics: LikePostFields_likePosts_topics[];
  contributorUser: LikePostFields_likePosts_contributorUser;
}

export interface LikePostFields {
  __typename: "User";
  likeCount: number;
  likePosts: LikePostFields_likePosts[];
}
