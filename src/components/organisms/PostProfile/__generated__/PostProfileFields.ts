/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostProfileFields
// ====================================================

export interface PostProfileFields_topics {
  __typename: "Topic";
  name: string;
}

export interface PostProfileFields {
  __typename: "Post";
  title: string;
  thumbnailImageUrl: string;
  description: string;
  topics: PostProfileFields_topics[];
}
