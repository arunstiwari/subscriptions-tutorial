const messages = [];

const resolvers = {
  Query: {
    getMessages(parentValue, params) {
      return messages;
    }
  },
  Mutation: {
    addMessage(parentValue, { payload }) {
      messages.push({ payload });
      return messages;
    }
  }
};

module.exports = resolvers;
