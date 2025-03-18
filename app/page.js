'use client'
import { useEffect, useState } from 'react'
import CourseCard from './componentes/CourseCard'
import Header from './componentes/Header'
import axios from 'axios'

const BASE_BACKEND_URL = !!process.env.VERCEL_ENV
  ? process.env.NEXT_PUBLIC_BACKEND_URL
  : 'http://localhost:5000'

export default function Page() {
  const [courses, setCourses] = useState([])
  console.log({ BASE_BACKEND_URL, env: process.env.VERCEL_ENV })

  async function fetchData() {
    const res = await axios.get(`${BASE_BACKEND_URL}`)
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
