import React from 'react';
import Course from "./components/course";


 

const App =()=>{
  const courses = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Understanding Babel',
        exercises: 12,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: 'Backend application development',
    parts: [
      {
        name: 'Fundamentals of Node.js',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using JSON to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'Setting up a server',
        exercises: 14,
        id: 3
      },
      {
        name: 'Understanding MongoDB',
        exercises: 12,
        id: 4
      }
    ]
  }
  ]




  return (
   <div>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
    )
}

export default App