import { IMAGE } from "@/assets";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { EyeOffIcon, Eye } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import Button from "@/components/ui/lottary-button";

export default function LoginForm() {
  const { login, isLoading } = useAuth();
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);

  const hangleTogglePasswordInputVisibility = () => {
    setIsPasswordInputVisible((prev) => !prev);
  };

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(credentials.email, credentials.password);
  };

  return (
    <section className="flex bg-white rounded-card md:p-20 p-8 items-center justify-center flex-col md:gap-10 gap-2 md:size-[550px] h-auto w-full">
      <img
        src={IMAGE.RED_LOGO}
        alt="Logotipo"
        className="md:size-[170px] w-[130px] h-[100px] object-contain"
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            placeholder="exemplo@lotarianacional.co.ao"
            className="px-4 py-2 rounded-lg border border-LT-GRAY-200 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password">Palavra-passe</label>
            <div className="px-4 py-2 rounded-lg border border-LT-GRAY-200 w-full flex items-center justify-between">
              <input
                id="password"
                placeholder="***********"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="outline-none w-full"
                type={isPasswordInputVisible ? "text" : "password"}
              />
              <button
                type="button"
                onClick={hangleTogglePasswordInputVisibility}
                className="text-LT-GRAY-200 pl-2 cursor-pointer"
              >
                {isPasswordInputVisible ? <EyeOffIcon /> : <Eye />}
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between text-[12px]">
            <label
              htmlFor="remember-me"
              className="flex items-center gap-1 text-LT-GRAY-200"
            >
              <span>Lembrar de mim</span>
              <input type="checkbox" id="remember-me" />
            </label>

            <Link
              to={"auth/recuperar-palavra-passe"}
              className="text-blue-600 underline hidden"
            >
              Esqueci a minha palavra-passe
            </Link>
          </div>
        </div>
        <Button disabled={isLoading} type="submit" className="mt-4 w-full">
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </section>
  );
}
