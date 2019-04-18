import gql from 'graphql-tag';

import { User } from '../types';

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }

    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export interface CreateUserMutationResponse {
  loading: boolean;
  createUser: User;
  authenticateUser: {
    token: string;
    id: string;
  };
}

export const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export interface SigninUserMutationResponse {
  loading: boolean;
  authenticateUser: {
    token: string;
    id: string;
  };
}
