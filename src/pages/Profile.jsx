import { useSearchParams } from 'react-router-dom'

const Profile = () => {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('login_info')
  const login_info = JSON.parse(search)
  console.log(login_info.jwt)
  console.log(login_info.user)

  search.replace('/profile')
  console.log()
  return <div>ProfilePage</div>
}

export default Profile
