import CourseCard from "../componentes/CourseCard"

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </div>
  )
}

export default Courses
