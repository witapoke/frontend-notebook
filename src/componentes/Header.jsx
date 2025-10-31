import { useContext } from 'react'
import '../estilos/Header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const { state, dispatch } = useContext(AuthContext)

  const handleLogin = () => {
    window.location.assign('http://localhost:5000/auth/google')
  }

  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <header className='headerMainContainer'>
      <Link to='/' className='linksito'>
        <h1 className='headerTitle'>WebCourses 🧠</h1>
      </Link>

      {state.isAuthenticated ? (
        <button className='loginBtn' onClick={handleLogOut}>
          Cerrar sesión
        </button>
      ) : (
        <button className='loginBtn' onClick={handleLogin}>
          Iniciar sesión
        </button>
      )}
    </header>
  )
}

export default Header
