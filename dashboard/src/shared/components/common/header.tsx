import { IMAGE } from "@/assets";
import { useAuth } from "@/app/context/auth-context";

type Props = {};

export default function Header({}: Props) {
  const { user } = useAuth();
  return (
    <header className="w-full lg:pl-[248px] fixed z-10 flex items-center left-0 right-0 top-0 bg-LT-RED-100 lg:bg-white border-b border-LT-GRAY-100 h-[70px]">
      <section className="main w-full flex items-center justify-between">
        <div className="items-center gap-4 self-center hidden lg:flex mx-auto">
          <img
            alt="logotipo"
            src={IMAGE.loto590Red}
            className="size-[100px] object-contain "
          />
        </div>

        <img
          alt="logotipo"
          src={IMAGE.loto590White}
          className="size-[90px] object-contain lg:hidden block"
        />

        <div className="flex items-center gap-2 ">
          <span className="text-white lg:text-black">{user?.name}</span>
          <div className="p-2 rounded-full bg-white border">
            <img
              src={IMAGE.USER}
              className="size-[14px] md:size-[24px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </header>
  );
}
