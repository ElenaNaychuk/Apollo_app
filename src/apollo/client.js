import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import token from './token';

const httpLink = new HttpLink({
    uri: 'http://localhost:8083/graphql',
    // fetchOptions: {
    //     mode: 'no-cors',
    // },
    headers: {
        Authorization: `Bearer ${token}`,
    },
    // credentials: 'include',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
export default client;