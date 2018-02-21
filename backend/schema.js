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

  type Subscription {
    newMessageAdded: Message
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
