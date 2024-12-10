import jwt, { JwtPayload } from "jsonwebtoken"
import { ITokenService } from "../../../domain/services/token.service.interface"

export class JwtTokenService implements ITokenService {
  private secret = process.env.JWT_SECRET || "default_secret"

  generateToken(payload: JwtPayload): string {
    return jwt.sign(payload, this.secret, { expiresIn: "7d" })
  }
  verifyToken(token: string): JwtPayload | null {
    try {
      return jwt.verify(token, this.secret) as JwtPayload
    } catch (error) {
      return null
    }
  }
}
