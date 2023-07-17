import {useLoadAllPosts, useRemovePost, useAddPostToDB} from "../repositories/PostsPepository";

export const useGetAllPosts = () => {
    const {loading, error, data} = useLoadAllPosts();

    const posts = data?.posts.map(post => ({
        ...post,
        currentDate: formatDate(new Date()),
        isRead: false,

    }));

    return {loading, error, posts};
};

export const useRemovePostService = () => {
    const [removePost, removePostError] = useRemovePost();
    return [removePost, removePostError];
}

export const useAddPostService = () => {
    const [addPostToDB, postError] = useAddPostToDB();
    return [addPostToDB, postError];

}


function formatDateTimeNum(num){
   return  num < 10 ? `0${num}` : num;
}
export function formatDate(date) {
    const d = date.getDate();
    const day = formatDateTimeNum(d);
    const m = date.getMonth() + 1;
    const month =formatDateTimeNum(m);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};