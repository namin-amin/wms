import "reflect-metadata";
import { generateSchema } from './generateSchema';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';


async function startApolloServer() {

    const schema = await generateSchema();
    const app = express();
    const server = new ApolloServer({
        schema
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(5000, () => {
        console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
    });

}

startApolloServer();