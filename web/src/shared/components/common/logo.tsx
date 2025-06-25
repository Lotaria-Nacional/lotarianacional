import { LOGO } from "@/app/constants/assets";

const Logo = () => {
  return (
    <img
      src={LOGO.lotaria}
      alt="logotipo da lotaria nacional"
      className="md:w-[150px] w-[100px] object-contain"
    />
  );
};

export default Logo;
