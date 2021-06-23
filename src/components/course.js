const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const sumExercises = exercises.reduce((s, p) => s + p);
  return <p1>total of {sumExercises} exercises</p1>;
};

const Part = ({ part }) => {
  const { name, exercises } = part;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Course = ({ course }) => {
  const { parts } = course;
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Course;