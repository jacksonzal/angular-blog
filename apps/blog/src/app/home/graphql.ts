import gql from 'graphql-tag';

import { Post } from '../types';

export const ALL_POSTS_QUERY = gql`
  {
    allPosts(orderBy: updatedAt_DESC) {
      id
      title
      keywords
    }
  }
`;

export interface AllPostsQueryResponse {
  loading: boolean;
  allPosts: Post[];
}
