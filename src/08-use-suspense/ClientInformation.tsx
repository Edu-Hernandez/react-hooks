import { use, type Usable } from 'react'
import { type User } from './api/get-user.actions'

interface Props {
    getUsers: Usable<User>
}

export const ClientInformation = ({getUsers}: Props) => {


    const user = use(getUsers)
    // useEffect(() => {
    //    getUser(id).then(console.log)
    // }, [id])
  return (
    <div className="bg-gradient flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-thin text-white">{user.name} - #{user.id}</h2>
        
        <p className='text-xl font-bold text-white'>{user.location}</p>
        <p className='text-xl font-bold text-white'>{user.role}</p>
    </div>
  )
}
