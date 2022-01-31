const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Physician {
    _id: ID
    name: String
    email: String
  }

  type Schedule {
    _id: ID
    name: String
    time: String
    kind: String
    physician: Physician
  }
  
  type Query {
    physicians: [Physician]
    schedules(physician: ID!): [Schedule]    
  }
`;

module.exports = typeDefs;