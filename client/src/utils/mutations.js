import { gql } from '@apollo/client';


export const ADD_SCHEDULE = gql`
  mutation addSchedule($name: String!, $time: String!, $kind: String!, $physician: ID!) {
    addSchedule(name: $name, time: $time, kind: $kind, physician: $physician) {
        name
    }
  }
`;
