import {useParams} from "react-router-dom";
import {Collapse} from 'antd';
import {frontendTasks} from "../../frontendData.js";
import {backendTasks} from "../../backendData.js";
import {getCourseItems} from "./getCourseItems";
import "./HomePage.scss";

const HomePage = () => {
    const {courseId} = useParams();

    const getItems = () => {
        if (courseId === 'frontend') {
            return getCourseItems(frontendTasks, courseId);
        }
        if (courseId === 'backend') {
            return getCourseItems(backendTasks, courseId);
        }
    }

    return (
        <main className='home-container'>
            <h2 className='home-title'>Приветствуем тебя на "название"!</h2>
            <div className='home-citation-container'>
                <p className='home-citation'>&laquo;Идите уверенно в направлении своей мечты. Живите той жизнью, которую
                    вы себе представляли.&raquo;</p>
                <p className='home-author'>&mdash; Генри Дэвид Торо</p>
            </div>
            <Collapse
                className='home-accordion'
                accordion={true}
                bordered={false}
                items={getItems()}
            />
        </main>
    )
}
export default HomePage;