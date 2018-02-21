const messages = [];

const resolvers = {
  Query: {
    getMessages(parentValue, params) {
      return messages;
    }
  },
  Mutation: {
    addMessage(parentValue, { message }) {
      messages.push({ message });
      return messages;
    }
  }
};

module.exports = resolvers;
