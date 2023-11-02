import {Link, useParams} from "react-router-dom";
import {frontendTasks} from "../../frontendData.js";
import {backendTasks} from "../../backendData.js";
import "./TaskListPage.scss";
import {getCourseItems} from "../HomePage/getCourseItems";

const TaskListPage = () => {
    const {courseId, id} = useParams();

    const getTasks = () => {
        if (courseId === 'frontend') {
            const lesson = frontendTasks.find(lesson => lesson.id === id);
            return lesson.tasks;
        }
    }

    return (
        <main className='taskList-container'>
            <h3 className='taskList-title'>Знакомство с JavaScript</h3>
            <p className='taskList-text'>Привет! Ты уже прошла большой и интересный путь и умеешь создавать красивые
                веб-страницы. И они
                классные, но в них как будто не хватало жизни! Поэтому сейчас мы начинаем знакомиться с модулем
                JavaScript, чтобы понять как сделать наши сайты интерактивными.
            </p>
            <p className='taskList-text'>Ниже есть список заданий для закрепления материала (их не нужно отправлять на
                проверку Коту).</p>
            <div className='taskList-note'>Примечание: если ты столкнулась с какими-то трудностями, обязательно сообщи
                об этом администраторам школы.
            </div>
            {getTasks().map(task =>
                <Link to={`/${courseId}/${id}/task-${task.id}`} className='taskList-wrapper' key={task.id}>{task.title}</Link>
            )}
        </main>
    )
}
export default TaskListPage;