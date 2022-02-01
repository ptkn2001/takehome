import { gql } from '@apollo/client';

export const QUERY_PHYSICIAN = gql`
  query physicians {
    physicians {
     _id
     name
     email
     }
  }
`;
             
export const QUERY_SCHEDULE = gql`
  query schedules($physician: ID!) {
    schedules (physician: $physician) {
     _id
     name
     time
     kind
    }
  }
`;
