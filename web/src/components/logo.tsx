import { LOGO } from "../constants/assets"

const Logo = () => {
  return (
    <img
      src={LOGO.lotaria}
      alt="logotipo da lotaria nacional"
      className="w-[150px] object-contain"
    />
  )
}

export default Logo
