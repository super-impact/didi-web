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
  __typename: "User";
  id: string;
  email: string;
  displayName: string;
}

export interface Post_post {
  __typename: "Post";
  title: string;
  thumbnailImageUrl: string;
  description: string;
  topics: Post_post_topics[];
  contentLink: string;
  contentMakerEmail: string;
  contributorUser: Post_post_contributorUser;
  createdAt: any;
}

export interface Post {
  post: Post_post;
}

export interface PostVariables {
  id: string;
}
