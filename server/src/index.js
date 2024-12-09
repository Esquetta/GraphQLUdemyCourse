const {ApolloServer} = require('apollo-server');

const { typeDefs, mocks } = require("./schema");

const  server=new ApolloServer({
    typeDefs,
    mocks:mocks
});


server.listen().then(()=>{
    console.log('server is running on port 4000. Query at : https://studio.apollographql.com/dev');
});