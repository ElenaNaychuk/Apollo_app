import {useLoadAllPosts} from "../repositories/PostsPepository";

export const useGetAllPosts = () => {
    const { loading, error, data } =  useLoadAllPosts();
    return { loading, error, data };
}