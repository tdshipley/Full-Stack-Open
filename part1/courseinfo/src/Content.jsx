const Content = (props) => {
    return (
        <>
            {
                props.courses.map((course) => (
                    <p key={course.id}>{course.partname} {course.exercises}</p>
                ))
            }
        </>
    )
}

export default Content
