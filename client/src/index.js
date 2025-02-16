import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import App from "./App";
import client, { ApolloProvider } from "./ApolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
