import Container from "./container"
import { ICONS } from "../../constants/assets"

const TopHeader = () => {
  return (
    <section className="w-full bg-[#961912] h-[40px] hidden lg:flex items-center">
      <Container className="flex-row justify-between text-sm text-white">
        <div className="flex items-center gap-2">
          <img
            src={ICONS.phone}
            alt="ícone de telefone"
            className="size-7 object-contain"
          />
          <a href="tel:+244923190007">+244 923 190 007</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="uppercase">siga-nos</span>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/lotaria-nacional/posts/?feedView=all"
            >
              <img
                src={ICONS.linkedin}
                alt="ícone do linkedin"
                className="size-7 object-contain"
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/lotarianacional/">
              <img
                src={ICONS.facebook}
                alt="ícone do facebook"
                className="size-7 object-contain"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/lotarianacionalangola/?utm_source=ig_web_button_share_sheet"
            >
              <img
                src={ICONS.instagram}
                alt="ícone do instagram"
                className="size-7 object-contain"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TopHeader
