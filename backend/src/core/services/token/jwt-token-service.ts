import jwt, { JwtPayload } from "jsonwebtoken"
import { ITokenService } from "@/core/contracts/token.interface"
import { env } from "@/main/config/env"

export class JwtTokenService implements ITokenService {
  private secret = env.JWT_SECRET || "default_secret"

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
