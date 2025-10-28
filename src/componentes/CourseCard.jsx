import { Link, Router } from 'react-router-dom'
import '../estilos/CourseCard.css'

const CourseCard = ({ course }) => {
  function handleClick() {
    localStorage.setItem('course', JSON.stringify(course))
  }

  return (
    <div className='courseCardContainer'>
      <div className='descriptionCourse'>
        <Link
          to={`/courses/${course._id}`}
          onClick={() => handleClick()}
          className='linksito'
        >
          <img src={course.thumbnail} className='courseCardImg' />
        </Link>
        <h1 className='courseCardTitle'>{course.title}</h1>
      </div>
      <p className='courseCardDescription'>{course.description}</p>
    </div>
  )
}

export default CourseCard
