const { ApolloServer } = require("apollo-server");

const { typeDefs, mocks } = require("./schema");
const resolvers = require("./resolver");
const NoteAPI = require("./datasources/noteapi");

const server = new ApolloServer({
  typeDefs,
  mocks:mocks
//   resolvers: resolvers,
//   dataSources: () => ({ noteapi: new NoteAPI() }),
});

server.listen().then(() => {
  console.log(
    "server is running on port 4000. Query at : https://studio.apollographql.com/dev"
  );
});
