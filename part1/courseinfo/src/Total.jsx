const Total = ({course}) => {

    const count = course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises, 0
    )

    return (
        <>
            <p>Number of exercises {count}</p>
        </>
    )
}

export default Total