import CourseCard from '../componentes/CourseCard'
import { useLoaderData, Navigate } from 'react-router-dom' // 💡 Importar useLoaderData

const Courses = () => {
  const { courses, authError } = useLoaderData()

  if (authError) {
    return <Navigate to='/login' replace />
  }

  if (!courses || courses.length === 0) {
    return <h2>No se encontraron cursos o no está autorizado.</h2>
  }

  return (
    <div>
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </div>
  )
}

export default Courses
