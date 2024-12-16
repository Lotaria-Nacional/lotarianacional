import jwt from "jsonwebtoken"
import { RequestHandler } from "express"

const authenticateMiddleware: RequestHandler = (req, res, next) => {
  const accessToken = req.cookies.accessToken as string | undefined

  if (!accessToken) {
    throw new Error("Não autorizado.")
  }
  jwt.verify(accessToken, process.env.JWT_SECRET as string)
  next()
}

export { authenticateMiddleware }
