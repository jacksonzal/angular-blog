import { Link } from './types';
import gql from 'graphql-tag';

export const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export interface AllLinkQueryResponse {
  allLinks: Link[];
  loading: boolean;
}
