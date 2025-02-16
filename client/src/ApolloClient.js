import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", // ✅ Ensure this is correct
  cache: new InMemoryCache(),
});

export default client;
export { ApolloProvider };
