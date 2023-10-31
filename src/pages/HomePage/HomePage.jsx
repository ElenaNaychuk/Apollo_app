import { Select } from 'antd';
import "./HomePage.scss";

const HomePage = () => {

    const options = [];
    for (let i = 1; i <= 30; i++) {
        options.push({
            value: i,
            label: i,
        });
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <main className='home-container'>
            <h2 className='home-title'>Приветствуем тебя на "название"!</h2>
            <div className='home-citation-container'>
                <p className='home-citation'>&laquo;Идите уверенно в направлении своей мечты. Живите той жизнью, которую
                    вы себе представляли.&raquo;</p>
                <p className='home-author'>&mdash; Генри Дэвид Торо</p>
            </div>
            <Select
                className='home-select'
                onChange={handleChange}
                options={options}
                defaultValue="Выберите неделю"
                bordered={false}
            />
        </main>
    )
}
export default HomePage;