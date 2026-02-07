import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

interface UserContextProps {
    authStatus: AuthStatus;
    user?: User | null;
    isAuthenticated: boolean;
    login: (userId: number) => boolean;
    logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps)

//es un provider que nos permite proporcionar el estado de usuario a los componentes hijos
export const UserContextProvider = ({ children}: PropsWithChildren) => {
    const [auth, setAuth] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)

    const handleLogin = (userId: number) => {

        const user = users.find(user => user.id === userId)

        if (!user) {
            console.log('Usuario no encontrado', userId)
            setUser(null)
            setAuth('not-authenticated')
            return false
        }
        setUser(user)
        setAuth('authenticated')
        localStorage.setItem('userId', userId.toString())
        return true
    }

    const handleLogout = () => {
        setUser(null)
        setAuth('not-authenticated')
        localStorage.removeItem('userId')
    }

    useEffect(()=> {
      const loggedUserId = localStorage.getItem('userId')
      if(loggedUserId){
        handleLogin(+loggedUserId)
        return
      }

      handleLogout()
    },[])

  return <UserContext value={{
    authStatus: auth,
    isAuthenticated: auth === 'authenticated',
    user: user,
    login: handleLogin,
    logout: handleLogout,
  }}>
    {children}
  </UserContext>
}
