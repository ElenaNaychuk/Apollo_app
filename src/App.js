import './App.css';
import {formatDate, useAddPostService, useGetAllPosts, useRemovePostService} from './apollo/services/PostsService'
import {useState} from "react";

function App() {
    const [post, setPostValue] = useState({});

    const {loading, error, posts} = useGetAllPosts();
    const [removePost, removePostError] = useRemovePostService();
    const [addPostToDB, postError] = useAddPostService();

    const addPost = () => {
        addPostToDB({
              variables: {
                  title: post.title,
                  user_id: Math.round(Math.random()*1000),
                  views: 1
              },
          });
        setPostValue({title :''});
    }

    const deletePost = (id) => {
        removePost({
            variables: {id}
        })
    }

    if(error || removePostError || postError) return <p>Error...</p>
    if(loading) return null;
    return (
        <div className="App">
            <p>Hello</p>
            <div>
                <input
                    value={post.title}
                    onChange={(e) => setPostValue({ title: e.target.value })}
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
