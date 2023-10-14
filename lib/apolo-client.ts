import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext((_request, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem("token"),
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default client;


/*


import { ApolloClient, from, createHttpLink } from "@apollo/client";
import cache from "./cache";
import { environment } from "config";
import errorLink from "./errorLink";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/client";

const httpLink = createHttpLink({
	uri: environment.grapqlServerURL,
	credentials: "include",
});

const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
	const session = await getSession();
	const modifiedHeader = {
		headers: {
			...headers,
			authorization: session?.accessToken
				? `Bearer ${session.accessToken}`
				: "",
		},
	};
	return modifiedHeader;
});

const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache,
});

export default client;

*/