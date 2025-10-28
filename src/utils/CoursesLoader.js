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

    console.log(req)

    return { courses: req.data, authError: false }
  } catch (error) {
    console.error('Error al cargar los cursos en el loader:', error)

    throw new Error('Error al conectar con la API para cargar cursos.')
  }
}
