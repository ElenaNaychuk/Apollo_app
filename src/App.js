import {Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.scss';
import HomePage from "./pages/HomePage/HomePage";
import TaskListPage from "./pages/TaskListPage/TaskListPage";

function App() {
  return (
    <div className="app">
        <Header />
        <div  className="content">
            <Routes>
                <Route path="/:courseId" element={<HomePage />} />
                <Route path="/:courseId/:id" element={<TaskListPage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
