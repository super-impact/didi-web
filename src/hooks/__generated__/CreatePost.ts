/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreatePostTopicInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreatePost
// ====================================================

export interface CreatePost_createPost {
  __typename: "Post";
  id: string;
}

export interface CreatePost {
  createPost: CreatePost_createPost;
}

export interface CreatePostVariables {
  title: string;
  description: string;
  contentLink: string;
  thumbnailImageUrl: string;
  contentMakerEmail: string;
  topics: CreatePostTopicInput[];
}
