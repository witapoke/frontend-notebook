import { useEffect, useState } from 'react'
import '../estilos/selectedCourse.css'

const SelectedCourse = () => {
  const [course, setCourse] = useState({})

  useEffect(() => {
    const getCourseFromStorage = () => {
      const courseFromStorage = JSON.parse(localStorage.getItem('course'))
      setCourse(courseFromStorage)
    }

    getCourseFromStorage()
  }, [])

  console.log(course)

  return (
    <div className='selectedCourseContainer'>
      <div className='courseCardContainer'>
        <div className='descriptionCourse'>
          <img src={course.thumbnail} className='courseCardImg' />
          <h1 className='courseCardTitle'>{course.title}</h1>
        </div>
        <p className='courseCardDescription'>{course.description}</p>
      </div>
    </div>
  )
}

export default SelectedCourse
