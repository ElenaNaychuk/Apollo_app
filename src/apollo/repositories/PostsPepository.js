import {gql, useQuery} from '@apollo/client';

// export const GET_ALL_WORKSPACE = gql`
//     query findAllWorkspace{
//       allWorkspaces:findAllWorkspace {
//         name,
//         id
//       }
//     }
// `;
//
// export const GET_ALL_USERS = gql`
//     query allUsers {
//       users :allUsers {
//         name
//
//     }
// }
// `;

export const useLoadAllPosts = () => {
    const { loading, error, data } = useQuery(gql`
        query allPosts {
            posts :allPosts {
                title
                user_id
                id
            }
        }`
    );
    return { loading, error, data };
}