import Header from '../componentes/Header'
import CourseCard from '../componentes/CourseCard'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout
