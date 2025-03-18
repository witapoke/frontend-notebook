'use client'
import { useEffect, useState } from 'react'
import CourseCard from './componentes/CourseCard'
import Header from './componentes/Header'
import axios from 'axios'

const BASE_BACKEND_URL = !!process.env.NEXT_PUBLIC_VERCEL_ENV
  ? process.env.NEXT_PUBLIC_BACKEND_URL
  : 'http://localhost:5000'

export default function Page() {
  const [courses, setCourses] = useState([])

  async function fetchData() {
    const res = await axios.get(`https://backend-notebook.vercel.app/courses`)
    setCourses(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='flex flex-col'>
      <Header />
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </div>
  )
}
