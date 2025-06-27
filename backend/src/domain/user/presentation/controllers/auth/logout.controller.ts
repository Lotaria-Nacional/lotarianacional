import { HttpRequest, HttpResponse, IController } from "@/core/infrastucture/http/controller"

export class LogoutController implements IController {
  
  async handle(req: HttpRequest, res:HttpResponse):Promise<HttpResponse> {
    if (!req.cookies.accessToken) {
      return { statusCode:400,body:{ message: "Nenhum usuário autenticado." } }
    }
    if(res.clearCookie){
        res.clearCookie("accessToken", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      })
    }

    return { statusCode:200, body:{ message: "Logout feito com sucesso." } }
  }
}
