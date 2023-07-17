import './App.css';
import {formatDate, useAddPostService, useGetAllPosts, useRemovePostService} from './apollo/services/PostsService'
import {useState} from "react";

function App() {
    const [post, setPostValue] = useState({});
    console.log(post)

    const {loading, error, posts} = useGetAllPosts();
    const [removePost, removePostError] = useRemovePostService();
    const [addPostToDB, postError] = useAddPostService();
    console.log(posts)

    const addPost = () => {
        addPostToDB({
              variables: {
                  title: post.title,
                  user_id: post.id,
                  views: post.views
              },
          });
        setPostValue({});
    }

    const deletePost = (id) => {
        removePost({
            variables: {id}
        })
    }

    const handlePost = (e) => {
        setPostValue({
            title: e.target.value,
            id: Math.round(Math.random()*1000),
            currentDate: formatDate(new Date()),
            views: 1
        })
    }

    if(error || removePostError) return <p>Error...</p>
    if(loading) return null;
    return (
        <div className="App">
            <p>Hello</p>
            <div>
                <input
                    value={post.title}
                    onChange={(e) => handlePost(e)}
                />
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
            {posts.map(post =>
                <div>
                    <p>{post.title}</p>
                    <p>{post.currentDate}</p>
                    <button onClick={()=> deletePost(+post.id)}>
                        Delete
                    </button>
                </div>

            )}
        </div>
    );
}

export default App;
