import './App.css';
import { useQuery } from '@apollo/client';
import {GET_ALL_WORKSPACE} from "./apollo/controllers/workspace";

function App() {

    const { loading, error, data } = useQuery(GET_ALL_WORKSPACE);
    console.log(data)

    if(error) return <p>Error...</p>

    return (
        <div className="App">
          <p>Hello</p>
        </div>
    );
}

export default App;
