import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { useContext } from "react"

export const ProfilePage = () => {
  const {user, logout} = useContext(UserContext)
  return (
    <div className="bg-gradient flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-thin text-white">Perfil del usuario</h1>
        <hr />

        <pre className="my-4 overflow-x-auto w-[70%]">
            { JSON.stringify({user}, null, 2) }
        </pre>

        <Button variant="ghost" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={logout}>Volver</Button>
    </div>
  )
}
