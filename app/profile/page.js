'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Profile() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const search = searchParams.get('jwt')

  useEffect(() => {
    const token = search
    if (search) {
      localStorage.setItem('JsonWebToken', token)
    }
  }, [search])

  return <div>Profile </div>
}
