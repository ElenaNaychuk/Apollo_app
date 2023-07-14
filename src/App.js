import './App.css';
import {useGetAllPosts} from './apollo/services/PostsService'

function App() {

    const {loading, error, data} = useGetAllPosts();
    console.log(data)

    if(error) return <p>Error...</p>
    if(loading) return null;

    return (
        <div className="App">
            <p>Hello</p>
            {data.posts.map(post =>
                <p>{post.title}</p>
            )}
        </div>
    );
}

export default App;
