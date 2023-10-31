import {Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.scss';
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="app">
        <Header />
        <div  className="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
