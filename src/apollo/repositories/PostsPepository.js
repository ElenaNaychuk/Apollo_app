import { gql, useMutation, useQuery } from '@apollo/client';

const ALL_POSTS = gql`
        query allPosts {
            posts: allPosts {
                title
                user_id
                id
            }
        }`;

const REMOVE_POST = gql`
        mutation removePost($id: ID!) {
            removePost(id:$id) {
                title
                user_id
                id
            }
        }
    `;

const ADD_POST = gql`
        mutation createPost($title: String!, $user_id: ID!, $views:Int!) {
          newPost:createPost(title: $title, user_id:$user_id, views: $views) {
            title
            user_id
            id
          }
        }
    `;

const UPDATE_POST = gql`
        mutation updatePost($id: ID!, $title: String) {
            updatePost(id: $id, title:$title) {
                id
                title
            }
        }
    `;

export const useLoadAllPosts = () => {
    const { loading, error, data } = useQuery(ALL_POSTS);
    return { loading, error, data };
}

export const useRemovePost = () => {
    const [removePost, { error: removePostError }] = useMutation(REMOVE_POST, {
        update(cache, { data: { removePost } }) {
            cache.modify({
                fields: {
                    allPosts(currentPosts = []) {
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
    const [addPostToDB, { error: postError }] = useMutation(ADD_POST, {
        update(cache, { data: { newPost } }) {
            const { posts } = cache.readQuery({ query: ALL_POSTS });
            cache.writeQuery({
                query: ALL_POSTS,
                data: {
                    posts: [newPost, ...posts]
                },
            })
        }
    });
    return [addPostToDB, postError];
}

export const useUpdatePost = () => {
    const [updatePost, { error: updateError }] = useMutation(UPDATE_POST);
    return [updatePost, updateError];
}