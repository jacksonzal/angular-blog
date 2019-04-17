import gql from 'graphql-tag';

import { Post } from '../types';

export const POST_QUERY = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      keywords
      description
      url
      postedBy {
        id
        name
        email
      }
      updatedAt
    }
  }
`;

export interface PostQueryResponse {
  loading: boolean;
  Post: Post;
}
