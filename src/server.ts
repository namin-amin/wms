import { options } from './db/dboptions';
import "reflect-metadata";
import { generateSchema } from './generateSchema';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';


async function startApolloServer() {

    //create database connection
    await createConnection(options);
    //get schema from typegraphql
    const schema = await generateSchema();
    const app = express();
    //add CORS
    app.use(cors());
    //create graphql server
    const server = new ApolloServer({
        schema
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(5000, "0.0.0.0", () => {
        console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
    });

}

startApolloServer();