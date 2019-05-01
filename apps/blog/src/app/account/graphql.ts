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

export interface AccountQueryResponse {
  loading: boolean;
  User: User;
}
