import { ICONS } from "@/app/constants/assets";

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <span className="uppercase hidden lg:block">siga-nos</span>
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
        <a target="_blank" href="https://www.tiktok.com/@lotarianacional">
          <img
            src={ICONS.tiktokGray}
            alt="ícone do instagram"
            className="size-7 object-contain"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
