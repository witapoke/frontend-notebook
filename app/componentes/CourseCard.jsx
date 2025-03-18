import { useRouter } from 'next/navigation'

export default function CourseCard({ course }) {
  const { description, price, title, videos, _id, thumbnail } = course

  const router = useRouter()

  const handleClick = () => {
    router.push(`/courses/${_id}`)
    localStorage.setItem('course', JSON.stringify(course))
  }

  return (
    <div
      onClick={handleClick}
      className='bg-blue-950 my-5 ml-2 p-4 w-200 h-auto border-4 border-black flex gap-3'
    >
      <div>
        <img src={thumbnail} alt='Foto sacada de la base de datos' />
      </div>
      <div className='flex flex-col items-center'>
        <h3 className='text-white'>{title}</h3>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  )
}
