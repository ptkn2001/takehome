const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Physician {
    _id: ID
    name: String!
    email: String!
  }

  type Schedule {
    _id: ID
    name: String!
    time: String!
    kind: String!
    physician: ID!
  }
  
  type Query {
    physicians: [Physician]
    schedules(physician: ID!): [Schedule]    
  }

  type Mutation {
    addSchedule(
      name: String!
      time: String!
      kind: String!
      physician: ID!
    ): Schedule
    updateSchedule(
      scheduleId: ID!
      name: String
      time: String
      kind: String
      physician: ID
    ): Schedule
    removeSchedule(
      scheduleId :ID!
    ): Schedule
  }
`;

module.exports = typeDefs;