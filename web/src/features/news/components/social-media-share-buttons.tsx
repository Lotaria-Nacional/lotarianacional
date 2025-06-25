import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { SiFacebook, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";

export default function SocialMediaShareButtons() {
  const pathname = window.location.href;

  return (
    <div className="flex items-center gap-2">
      <FacebookShareButton url={pathname}>
        <SiFacebook className="size-5" />
      </FacebookShareButton>

      <TwitterShareButton url={pathname}>
        <SiX className="size-5" />
      </TwitterShareButton>

      <LinkedinShareButton
        url={pathname}
        source={pathname}
        title="Notícia - Lotaria Nacional"
      >
        <SiLinkedin className="size-5" />
      </LinkedinShareButton>

      <WhatsappShareButton url={pathname}>
        <SiWhatsapp className="size-5" />
      </WhatsappShareButton>
    </div>
  );
}
