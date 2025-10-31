import { useContext, useMemo } from 'react'
import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import SelectedCourse from './pages/SelectedCourse'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { AuthContext } from './context/AuthContext'
import { CourseByIdLoader, CoursesLoader } from './utils/CoursesLoader'

const App = () => {
  const { state } = useContext(AuthContext)

  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route
            index
            element={<Courses />}
            loader={() => CoursesLoader(state.jwt)}
          ></Route>
          <Route
            path='/courses/:selectedCourse'
            element={<SelectedCourse />}
            loader={CourseByIdLoader(state.jwt)}
          ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      )
    )
  }, [state.jwt])

  return (
    <div className='appContainer'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
