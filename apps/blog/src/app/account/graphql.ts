import gql from 'graphql-tag';

import { User } from '../types';

export const ACCOUNT_QUERY = gql`
  query account($id: ID!) {
    User(id: $id) {
      id
      name
      createdAt
      posts {
        id
        title
        updatedAt
      }
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export interface AccountQueryResponse {
  loading: boolean;
  User: User;
}
