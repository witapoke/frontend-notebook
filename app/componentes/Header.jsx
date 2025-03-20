import { useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {
  const router = useRouter()

  const GoBack = () => {
    router.back()
    localStorage.clear()
  }

  const handleLogin = () => {
    window.location="http://localhost:5000/auth/google"
  }

  return (
    <header className='bg-blue-950 py-4 px-4 font-serif font-bold flex justify-between w-full'>
      <h1 className='text-white text-4xl' onClick={() => GoBack()}>
        WebCourse App 🧠
      </h1>
      <button
        className='text-white cursor-pointer bg-gray-400 px-2 rounded-xl'
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
    </header>
  )
}
