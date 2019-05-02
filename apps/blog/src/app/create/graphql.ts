import gql from 'graphql-tag';

import { Post } from '../types';

export { ACCOUNT_QUERY } from '../account/graphql';

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

export const EDIT_POST_MUTATION = gql`
  mutation editPost(
    $id: ID!
    $content: String!
    $keywords: [String!]
    $title: String!
  ) {
    updatePost(content: $content, keywords: $keywords, title: $title, id: $id) {
      id
    }
  }
`;

export interface EditPostMutationResponse {
  loading: boolean;
  updatePost: Post;
}

export const POST_QUERY = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      keywords
      content
      title
    }
  }
`;

export interface PostQueryResponse {
  loading: boolean;
  Post: Post;
}
