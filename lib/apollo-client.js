import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql.api.rye.com/v1/query",
});

// Middleware for adding headers
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: "Basic UllFLWJjZWI0NTg3MWRkODRlNTM5NDVhOg==",
      "Rye-Shopper-IP": "197.211.58.104",
    },
  });

  return forward(operation);
});

// Combine the authLink and httpLink
const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
