import '../estilos/selectedCourse.css'
import { useLoaderData } from 'react-router-dom'

const SelectedCourse = () => {
  const { course } = useLoaderData()

  return (
    <div className='selectedCourseContainer'>
      <div className='courseCardContainer'>
        <div className='descriptionCourse'>
          <img src={course?.thumbnail} className='courseCardImg' />
          <h1 className='courseCardTitle'>{course?.title}</h1>
        </div>
        <p className='courseCardDescription'>{course?.description}</p>
      </div>
    </div>
  )
}

export default SelectedCourse
