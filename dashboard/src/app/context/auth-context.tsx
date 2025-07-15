import Cookies from "js-cookie"
import { isAxiosError } from "axios"
import { toast } from "sonner"
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
import { AuthUserEntityResponse, loginUser } from "@/features/auth/api"

type AuthContextType = {
  logout: () => void
  isLoading: boolean
  user: AuthUserEntityResponse | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<AuthUserEntityResponse | null>>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type Props = PropsWithChildren

const AuthContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [user, setUser] = useState<AuthUserEntityResponse | null>(() => {
    const loggedUser = localStorage.getItem("user")
    return loggedUser ? JSON.parse(loggedUser) : null
  })

  const [token, setToken] = useState<string | null>(() => {
    const accessToken = Cookies.get("accessToken")
    return accessToken ? accessToken : null
  })

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await loginUser(email, password)
      console.log(response)
      setUser(response.user)
      setToken(response.token)
      localStorage.setItem("user", JSON.stringify(response.user))
      Cookies.set("accessToken", response.token, { expiresIn: "7d" })

      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          toast.error("Ocorreu um erro. Tente novamente mais tarde")
          return
        }
        toast.error(error.response.data.message)
        return
      }
      toast.error("Erro interno no servidor.")
      return
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setIsLoading(true)
    setUser(null)
    setToken(null)
    localStorage.removeItem("user")
    Cookies.remove("accessToken")
    toast.success("Você saiu da conta com sucesso.")
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{ token, user, isLoading, login, logout, setUser }}
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
