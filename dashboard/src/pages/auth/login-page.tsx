import { Navigate } from "react-router-dom"
import { useAuth } from "@/context/authContext"
import LoginForm from "@/components/auth/login-form"

const LoginPage = () => {
  const { token } = useAuth()

  if (token) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="bg-RED-200 h-screen flex items-center justify-center px-3 md:px-16">
      <LoginForm />
    </main>
  )
}

export default LoginPage
