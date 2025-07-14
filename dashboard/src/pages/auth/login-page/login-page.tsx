import { Navigate } from "react-router-dom";
import { useAuth } from "@/app/context/auth-context";
import LoginForm from "@/features/auth/components/login-form";

export default function LoginPage() {
  const { token } = useAuth();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="w-full h-screen flex items-center justify-center bg-LT-RED-200 main">
      <LoginForm />
    </main>
  );
}
