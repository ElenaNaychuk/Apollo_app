import emptyCircle from "../../assets/images/empty-circle.svg";
import fullCircle from "../../assets/images/full-circle.svg";
import oval from "../../assets/images/oval.svg";
import vector from "../../assets/images/Vector.svg";
import greenMessageIcon from "../../assets/images/green-message-icon.svg";
import redMessageIcon from "../../assets/images/red-message-icon.svg";

import "./TestBody.scss";

const TestBody = () => {
    const isCorrectAnswer = false;
    const comment = true;

    return (
        <div className='test-body-container'>
            <div className='test-body-wrapper'>
                <div className='test-body-title'>Как с помощью плагина Emmet можно быстро создавать основную HTML документа</div>
                <div className='test-body-questions-container'>
                    <div className='test-body-question'>
                        <img src={emptyCircle} alt='circle'/>
                        <p className='test-body-question-text'>Ввести !!! и нажать Tab</p>
                    </div>
                    <div className='test-body-question'>
                        <img src={fullCircle} alt='circle'/>
                        <p className='test-body-question-text'>Ввести !!! и нажать Tab</p>
                    </div>
                    <div className='test-body-question'>
                        <img src={emptyCircle} alt='circle'/>
                        <p className='test-body-question-text'>Ввести !!! и нажать Tab</p>
                    </div>
                    <div className='test-body-question'>
                        <img src={emptyCircle} alt='circle'/>
                        <p className='test-body-question-text'>Ввести !!! и нажать Tab</p>
                    </div>
                    <div className='test-body-question'>
                        <img src={emptyCircle} alt='circle'/>
                        <p className='test-body-question-text'>Ввести !!! и нажать Tab</p>
                    </div>
                </div>
                {isCorrectAnswer && comment &&
                    (<div className='test-body-message'>
                        <img src={greenMessageIcon} alt=''/>
                        <p className='test-body-text-message'>
                            Это сокращение создаст необходимые теги html, head и body. Так же работает !+ Enter
                        </p>
                    </div>)
                }
                {!isCorrectAnswer && comment &&
                    (<div className='test-body-message'>
                        <img src={redMessageIcon} alt=''/>
                        <p className='test-body-text-message'>
                            Это сокращение создаст необходимые теги html, head и body. Так же работает !+ Enter
                        </p>
                    </div>)
                }

                <button className='test-body-button'>
                    <img src={vector} alt='vector'/>
                    Ответить
                    <img src={oval} alt='oval'/>
                </button>
            </div>
        </div>
    )
}
export default TestBody;