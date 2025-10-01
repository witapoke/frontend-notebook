import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import SelectedCourse from './pages/SelectedCourse'
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CourseCard from './componentes/CourseCard'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getData = async () => {
      const req = await axios.get('http://localhost:5000/courses')
      setCourses(req.data)
    }

    getData()
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout courses={courses} />}>
        <Route index element={<Courses courses={courses} />}></Route>
        <Route
          path='/courses/:selectedCourse'
          element={<SelectedCourse />}
        ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Route>
    )
  )

  return (
    <div className='appContainer'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
