import gql from 'graphql-tag';

import { Post, Comment } from '../types';

export const POST_QUERY = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      keywords
      content
      updatedAt
      postedBy {
        id
        name
        email
      }
      comments {
        id
        content
        createdAt
        postedBy {
          id
          name
        }
      }
    }
  }
`;

export interface PostQueryResponse {
  loading: boolean;
  Post: Post;
}

export const COMMENT_MUTATION = gql`
  mutation createComment(
    $content: String!
    $commentedOnId: ID!
    $postedById: ID!
  ) {
    createComment(
      content: $content
      commentedOnId: $commentedOnId
      postedById: $postedById
    ) {
      id
    }
  }
`;

export interface CommentMutationResponse {
  loading: boolean;
  createComment: Comment;
}
