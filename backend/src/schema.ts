import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(name: String!): User
  }
`;
