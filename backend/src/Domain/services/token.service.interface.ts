import { JwtPayload } from "jsonwebtoken"

export interface ITokenService {
  generateToken(payload: JwtPayload): string
  verifyToken(token: string): JwtPayload | null
}
