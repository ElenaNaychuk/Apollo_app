import {gql, useMutation, useQuery} from '@apollo/client';

// export const GET_ALL_WORKSPACE = gql`
//     query findAllWorkspace{
//       allWorkspaces:findAllWorkspace {
//         name,
//         id
//       }
//     }
// `;
const  ALL_POSTS = gql`
        query allPosts {
            posts: allPosts {
                title
                user_id
                id
            }
        }`

export const useLoadAllPosts = () => {
    const { loading, error, data } = useQuery(gql`
        query allPosts {
            posts: allPosts {
                title
                user_id
                id
            }
        }`
    );
    return { loading, error, data };
}

export const useRemovePost = () => {
    const REMOVE_POST = gql`
        mutation removePost($id: ID!) {
            removePost(id:$id) {
                title
                user_id
                id
            }
        }
    `;

    const [removePost, {error: removePostError}] = useMutation(REMOVE_POST, {
        update(cache, { data: {removePost}}) {
            cache.modify({
                fields: {
                    allPosts( currentPosts = []) {
                        return currentPosts.filter(
                            post => post.__ref !== `Post:${removePost.id}`
                        )
                    }
                }
            })
        }
    });
    return [removePost, removePostError];
}

export const useAddPostToDB = () => {
    const ADD_POST = gql`
        mutation createPost($title: String!, $user_id: ID!, $views:Int!) {
          createPost(title: $title, user_id:$user_id, views: $views) {
            title
            user_id
            id
          }
        }
    `;

    const [addPostToBD, {error: postError}] = useMutation(ADD_POST, {
        update(cache, {data: { createPost }}) {
            // const {posts} = cache.readQuery({query: ALL_POSTS});
            // cache.writeQuery({
            //     query: ALL_POSTS,
            //     data: {
            //         posts: [...createPost, posts]
            //     },
            // })
            cache.modify({
                fields: {
                    posts(currentPosts = []) {
                        console.log(currentPosts)
                        console.log(createPost)
                        const newPostRef = cache.writeFragment({
                            data: createPost,
                            fragment: gql`
                                fragment NewPost on Post {
                                  title
                                  user_id
                                  id
                                }
                              `
                        });
                        return [...currentPosts, newPostRef];
                    }
                }
            })
        }
    });
    return [addPostToBD, postError];
}