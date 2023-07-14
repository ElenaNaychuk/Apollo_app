import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4007',
    cache: new InMemoryCache(),

});
export default client;

// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
//
// const httpLink = createHttpLink({
//     uri: 'http://localhost:8083/graphql',
// });
//
// const authLink = setContext((_, { headers }) => {
//     const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQb3BvdiIsImlhdCI6MTY4OTI0ODUxOSwiZXhwIjoxNjkxOTI2OTE5fQ.a5xT0a2_lNRsOxtxz9zGX3CoSbbG2EYe34rNgnwOcaE';
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : "",
//         }
//     }
// });
//
// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });
// export default client;
