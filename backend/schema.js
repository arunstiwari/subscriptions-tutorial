const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Message {
    message: String
  }

  type Query {
    getMessages: [Message]
  }

  type Mutation {
    addMessage(message: String!): [Message]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
