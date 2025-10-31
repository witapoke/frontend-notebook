import axios from 'axios'

export const CoursesLoader = async (jwt) => {
  if (!jwt) {
    return { courses: [], authError: true }
  }

  try {
    const req = await axios({
      method: 'GET',
      url: 'http://localhost:5000/courses',
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    })

    return { courses: req.data, authError: false }
  } catch (error) {
    console.error('Error al cargar los cursos en el loader:', error)

    throw new Error('Error al conectar con la API para cargar cursos.')
  }
}

export const Loader2 = async (jwt, params) => {
  const courseId = params.params.selectedCourse

  if (!jwt) {
    // Retornamos un error de autenticación si no hay token
    return { course: null, authError: true }
  }

  if (!courseId) console.log('no hay course id')

  try {
    const req = await axios({
      method: 'GET',
      url: `http://localhost:5000/courses/${courseId}`,
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    })
    return { course: req.data.data, error: false }
  } catch (error) {
    console.error('Error al cargar el curso en el loader:', error)

    throw new Error('Error al conectar con la API para cargar cursos.')
  }
} //ESTA LA HICE YO PERO A GEMINI NO LE GUSTA MUCHO

export const CourseByIdLoader = (jwt) => async (params) => {
  const courseId = params.params.selectedCourse

  if (!jwt) {
    return { course: null, authError: true }
  }

  if (!courseId) console.log('no hay course id')

  try {
    const req = await axios({
      method: 'GET',
      url: `http://localhost:5000/courses/${courseId}`,
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    })
    return { course: req.data.data, error: false }
  } catch (error) {
    console.error('Error al cargar el curso en el loader:', error)

    throw new Error('Error al conectar con la API para cargar cursos.')
  }
} //SOLUCION ANIDADA POR SI QUIERO PROTEGER LAS RUTAS DE UN CURSO UNICO, ESTA LA HIZO GEMINI

export const LoaderById = async ({ params }) => {
  const courseId = params.selectedCourse

  if (!courseId) console.log('no hay course id')

  try {
    const req = await axios({
      method: 'GET',
      url: `http://localhost:5000/courses/${courseId}`
    })
    return { course: req.data.data, error: false }
  } catch (error) {
    console.error('Error al cargar el curso en el loader:', error)

    throw new Error('Error al conectar con la API para cargar cursos.')
  }
}
