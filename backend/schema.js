const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Message {
    payload: String
  }

  type Query {
    getMessages: [Message]
  }

  type Mutation {
    addMessage(payload: String!): [Message]
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
