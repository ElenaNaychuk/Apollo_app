import {Link} from "react-router-dom";

export function getCourseItems(courseData, courseId) {
    const panelStyle = {
        marginBottom: 24,
        background: '#fff',
        borderRadius: '10px',
        border: '1px solid rgb(234 93 128)',
    };
    const items = [];
    const uniqueBlocks = new Set(courseData.map(lesson => lesson.block));
    uniqueBlocks.forEach(block => {
        const lessons = courseData.filter(lesson => lesson.block === block);
        items.push({
            key: block,
            label: block,
            style: panelStyle,
            children: lessons.map(lesson => {
                return (
                    <Link
                        to={`/${courseId}/${lesson.id}`}
                        className='home-accordion-link'
                    >
                        {lesson.title}
                    </Link>

                )
            })
        })
    })
    return items;
}