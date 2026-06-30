import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = 'Half Stack application development'

  const courses = [
    {id: 1, partname: 'Fundamentals of React', exercises: 10},
    {id: 2, partname: 'Using props to pass data', exercises: 7},
    {id: 3, partname: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  )
}

export default App