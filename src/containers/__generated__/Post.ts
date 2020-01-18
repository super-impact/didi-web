/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Post
// ====================================================

export interface Post_post_topics {
  __typename: "Topic";
  name: string;
}

export interface Post_post_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
}

export interface Post_post {
  __typename: "Post";
  title: string;
  description: string;
  topics: Post_post_topics[];
  thumbnailImageUrl: string | null;
  createdAt: any;
  contentMakerEmail: string | null;
  contributorUser: Post_post_contributorUser;
  likeCount: number;
  contentLink: string;
}

export interface Post {
  post: Post_post;
}

export interface PostVariables {
  id: string;
}
