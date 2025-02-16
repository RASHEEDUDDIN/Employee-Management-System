require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const cors = require('cors');

const app = express();

// Middleware
const corsOptions = {
    origin: "http://localhost:3000", 
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to Database
connectDB();

// Start Apollo Server
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer();
