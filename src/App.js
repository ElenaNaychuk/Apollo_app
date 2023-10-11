import './App.scss';
import {Route, Routes} from "react-router-dom";
import TestPage from "./test/pages/TestPage/TestPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<TestPage />} />
        </Routes>
    </div>
  );
}

export default App;
