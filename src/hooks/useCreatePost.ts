import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { CreatePost, CreatePostVariables } from './__generated__/CreatePost';

const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $description: String!
    $contentLink: String!
    $thumbnailImageUrl: String!
    $contentMakerEmail: String!
    $topics: [CreatePostTopicInput!]!
  ) {
    createPost(
      input: {
        title: $title
        description: $description
        contentLink: $contentLink
        thumbnailImageUrl: $thumbnailImageUrl
        contentMakerEmail: $contentMakerEmail
        topics: $topics
      }
    ) {
      id
    }
  }
`;

export function useCreatePost() {
  const [createPost, response] = useMutation<CreatePost, CreatePostVariables>(
    CREATE_POST
  );

  return {
    createPost,
    createPostResponse: response
  };
}
