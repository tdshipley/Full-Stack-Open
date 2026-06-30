import Part from './Part'

const Content = (props) => {
    return (
        <>
            {
                props.course.parts.map((part) => (
                    <Part key={part.id} part={part} />
                ))
            }
        </>
    )
}

export default Content
