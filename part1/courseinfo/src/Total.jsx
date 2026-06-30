const Total = (props) => {

    const count = props.courses.reduce(
        (accumulator, course) => accumulator + course.exercises, 0
    )

    return (
        <>
            <p>Number of exercises {count}</p>
        </>
    )
}

export default Total