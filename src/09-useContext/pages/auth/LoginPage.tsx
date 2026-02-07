import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const {login} = useContext(UserContext)
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()
  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //evitar la propagación del formulario
      event.preventDefault()

      const isLoggedIn = login(+userId)

      if (!isLoggedIn) {
        toast.error('Usuario no encontrado')
        return false
      }

      toast.success('Usuario logueado correctamente')
      navigate('/profile')

      console.log(isLoggedIn)
  }
  return (
    <div className="bg-gradient flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-thin text-white">Iniciar sesión</h1>
        <hr />
        <form onSubmit={handleLoginSubmit} className="w-full max-w-md">
            <Input 
              type="number" 
              value={userId}  
              onChange={(event) => setUserId(event.target.value)} 
              placeholder="ID del usuario" 
            />

            <Button type="submit" className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Iniciar sesión</Button>
        </form>

        <div className="flex gap-2 justify-center mt-4">
          <Link to="/about">
              <Button variant="ghost" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Volver</Button>
          </Link>
        </div>
    </div>
  )
}
