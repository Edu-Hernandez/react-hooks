import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {
  const {isAuthenticated, logout} = use(UserContext)
  return (
    <div className="bg-gradient flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-thin text-white">AboutPage</h1>
        <hr />

        <div className="flex gap-2">

            {/* perfil de usuario si tiene sesion activa */}
            {
              isAuthenticated && (
                <Link to="/profile">
                  <Button variant="ghost" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Perfil</Button>
                </Link>
              )
            }

            {/* loggin loggout */}
            {
              isAuthenticated ? (
                <Button variant="destructive" className="mt-4" onClick={logout}>
                  Salir
                </Button>
              ):(
                <Link to="/auth">
                  <Button variant="ghost" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Auth</Button>
                </Link>
              )
            }
        </div>
    </div>
  )
}
