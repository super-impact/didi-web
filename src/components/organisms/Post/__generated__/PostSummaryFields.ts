/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostSummaryFields
// ====================================================

export interface PostSummaryFields_topics {
  __typename: "Topic";
  name: string;
}

export interface PostSummaryFields_contributorUser {
  __typename: "ContributorUser";
  id: string;
  email: string;
  displayName: string;
  profileImageUrl: string;
}

export interface PostSummaryFields {
  __typename: "Post";
  id: string;
  title: string;
  thumbnailImageUrl: string | null;
  description: string;
  likeCount: number;
  createdAt: any;
  topics: PostSummaryFields_topics[];
  contributorUser: PostSummaryFields_contributorUser;
}
