import { Request, Response } from "express"

export class LogoutController {
  async handle(req: Request, res: Response) {
    if (!req.cookies.accessToken) {
      return res.status(400).json({ message: "Nenhum usuário autenticado." })
    }
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE === "production",
    })
    return res.status(200).json({ message: "Logout feito com sucesso." })
  }
}
