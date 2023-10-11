import "./TestPage.scss";
import {useParams} from "react-router-dom";
import Header from "../../components/Header/Header";
import TestBody from "../../components/TestBody/TestBody";
import TestHearts from "../../components/TestHearts/TestHearts";

const TestPage = () => {
    const {id = 'week-1'} = useParams();

    return (
        <div className='container'>
            <Header/>
            <TestHearts/>
            <TestBody/>
        </div>
    )

}
export default TestPage;