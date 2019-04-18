import gql from 'graphql-tag';

import { Post } from '../types';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost(
    $content: String!
    $keywords: [String!]
    $title: String!
    $postedById: ID
  ) {
    createPost(
      content: $content
      keywords: $keywords
      title: $title
      postedById: $postedById
    ) {
      id
    }
  }
`;

export interface CreatePostMutationResponse {
  loading: boolean;
  createPost: Post;
}
