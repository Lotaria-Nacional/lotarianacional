import bcrypt from "bcrypt"
import { IHashService } from "../../../Domain/Services/IHashService"

export class BcryptHashService implements IHashService {
  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash)
  }
  async hash(password: string): Promise<string> {
    return bcrypt.hashSync(password, 10)
  }
}
