/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts {
  __typename: "Post";
  id: string;
  title: string;
  thumbnailImageUrl: string;
  description: string;
  likeCount: number;
}

export interface Posts {
  posts: Posts_posts[];
}

export interface PostsVariables {
  skip?: number | null;
  take?: number | null;
}
