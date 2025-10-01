import '../estilos/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const handleLogin = () => {
    window.location = 'http://localhost:5000/auth/google'
  }

  return (
    <Link to='/' onClick={() => localStorage.clear()} className='linksito'>
      <header className='headerMainContainer'>
        <h1 className='headerTitle'>WebCourses 🧠</h1>
        <button className='loginBtn' onClick={() => handleLogin()}>
          Iniciar sesión
        </button>
      </header>
    </Link>
  )
}

export default Header
