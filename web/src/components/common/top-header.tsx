import Container from "./container"
import { ICONS } from "../../constants/assets"

const TopHeader = () => {
  return (
    <section className="w-full bg-LT_RED-200 h-[40px] hidden lg:flex items-center">
      <Container className="flex-row justify-between text-sm text-white">
        <div className="flex items-center gap-2">
          <img
            src={ICONS.phone}
            alt="ícone de telefone"
            className="size-7 object-contain"
          />
          <span>+244 224 884 009 / 920 000 000</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="uppercase">siga-nos</span>
          <div className="flex items-center gap-4">
            <img
              src={ICONS.linkedin}
              alt="ícone do linkedin"
              className="size-7 object-contain"
            />
            <img
              src={ICONS.facebook}
              alt="ícone do facebook"
              className="size-7 object-contain"
            />
            <img
              src={ICONS.instagram}
              alt="ícone do instagram"
              className="size-7 object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopHeader
