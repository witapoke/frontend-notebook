import { Link, Router } from 'react-router-dom'
import '../estilos/CourseCard.css'

const CourseCard = ({ course }) => {
  console.log(course)

  function handleClick() {
    localStorage.setItem('course', JSON.stringify(course))
  }

  return (
    <Link to={`/courses/${course._id}`} onClick={() => handleClick()} className='linksito'>
      <div className='courseCardContainer'>
        <div className='descriptionCourse'>
          <img src={course.thumbnail} className='courseCardImg' />
          <h1 className='courseCardTitle'>{course.title}</h1>
        </div>
        <p className='courseCardDescription'>{course.description}</p>
      </div>
    </Link>
  )
}

export default CourseCard
