/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_topics {
  __typename: "Topic";
  name: string;
}

export interface Posts_posts_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
  profileImageUrl: string;
}

export interface Posts_posts {
  __typename: "Post";
  id: string;
  title: string;
  thumbnailImageUrl: string | null;
  description: string;
  likeCount: number;
  createdAt: any;
  topics: Posts_posts_topics[];
  contributorUser: Posts_posts_contributorUser;
}

export interface Posts {
  posts: Posts_posts[];
}

export interface PostsVariables {
  skip?: number | null;
  take?: number | null;
}
