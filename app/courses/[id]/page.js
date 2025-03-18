'use client'
import { useEffect, useState } from 'react'
import CourseCard from '../../componentes/CourseCard'
import Header from '../../componentes/Header'

export default function Course({ params }) {
  const [courseID, setCourseID] = useState('')
  const [localStorageCourse, setLocalStorageCourse] = useState([])

  async function getParams() {
    const parameters = await params
    const { id } = parameters
    setCourseID(id)
  }

  useEffect(() => {
    getParams()
    const courseFromStorage = JSON.parse(localStorage.getItem('course'))
    setLocalStorageCourse(courseFromStorage)
  }, [])

  return (
    <>
      <Header />
      <CourseCard course={localStorageCourse} />
    </>
  )
}
