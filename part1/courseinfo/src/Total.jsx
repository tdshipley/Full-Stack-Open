const Total = (props) => {

    const count = props.course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises, 0
    )

    return (
        <>
            <p>Number of exercises {count}</p>
        </>
    )
}

export default Total