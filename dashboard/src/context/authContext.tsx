import Cookies from "js-cookie"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { loginUser, UserResponse } from "@/api/auth.api"
import React, { createContext, useContext, useState } from "react"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

type AuthContextType = {
  logout: () => void
  isLoading: boolean
  user: UserResponse | undefined
  token: string | undefined
  login: (email: string, password: string) => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<UserResponse | undefined>>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type Props = {
  children: React.ReactNode
}

const AuthContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState<UserResponse | undefined>(() => {
    const loggedUser = localStorage.getItem("user")
    return loggedUser ? JSON.parse(loggedUser) : undefined
  })

  const [token, setToken] = useState<string | undefined>(() => {
    const accessToken = Cookies.get("accessToken")
    return accessToken ? accessToken : undefined
  })

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await loginUser(email, password)
      setUser(response.user)
      setToken(response.token)
      localStorage.setItem("user", JSON.stringify(response.user))
      Cookies.set("accessToken", response.token, { expiresIn: "7d" })

      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          toast.error(TRY_LATER_ERROR)
          return
        }
        toast.error(error.response.data.message)
        return
      }
      toast.error(SERVER_CONNECTION_ERROR)
      return
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setIsLoading(true)
    setUser(undefined)
    localStorage.removeItem("user")
    Cookies.remove("accessToken")
    toast.success("Você saiu da conta com sucesso.")
    setIsLoading(false)
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        logout,
        login,
        setUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("No Auth Context Available")
  }
  return context
}

export default AuthContextProvider
