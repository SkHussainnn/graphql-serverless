import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from './schema';
import { getUser } from './queries/getUser';
import { createUser } from './mutations/createUser';

const resolvers = {
  Query: {
    user: getUser,
  },
  Mutation: {
    createUser,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const handler = server.createHandler();
