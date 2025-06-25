import { Link } from "react-router-dom";
import { LOGO } from "@/app/constants/assets";
import Container from "../common/container/container";
import SocialMediaLinks from "../common/social-media-links";
import { FOOTER_NAVIGATION } from "@/app/router/navigation";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col">
      {/** TOP FOOTER */}
      <section className="w-full py-8 lg:py-0 lg:h-[300px] flex items-center bg-LT_GRAY-200 text-LT_WHITE">
        <Container className="items-start gap-10 flex flex-wrap lg:grid grid-cols-3 lg:gap-4 place-items-center">
          <div className="flex w-full h-full flex-col justify-between">
            <div className="flex flex-col gap gap-4">
              <h1 className="text-xl capitalize font-bold">
                Informações Gerais
              </h1>
              <p>
                Prepare-se para sonhar alto! Com a Lotaria Nacional, você tem a
                chance de transformar seu destino. É fácil participar: escolha
                seus números, faça sua aposta e espere pelo sorteio!
              </p>
            </div>
            <img
              src={LOGO.lotaria}
              alt="logotipo da lotaria nacional"
              className="w-[150px] object-contain hidden lg:block"
            />
          </div>

          <div className="flex flex-col h-full w-fit gap-4">
            <h1 className="text-xl capitalize font-bold">Links Adicionais</h1>
            <ul className="flex flex-col gap-2">
              {FOOTER_NAVIGATION.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    reloadDocument
                    className="capitalize hover:text-LT_RED-100 duration-200 ease-in-out transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full h-full justify-between flex-col gap-4">
            <h1 className="text-xl capitalize font-bold">Contactos</h1>
            <div className="flex flex-col gap-2">
              <div className="lg:hidden block">
                <SocialMediaLinks />
              </div>
              <span>Tel: + 244 923 190 007</span>
              <span>geral@lotarianacional.co.ao</span>
              <span>Rainha Ginga Nº 79</span>
              {/* <span>Talatona - Luanda</span> */}
            </div>
            <div className="flex items-center justify-end w-full gap-4">
              <img
                src={LOGO.lotaria}
                alt="logotipo da lotaria nacional"
                className="w-[150px] object-contain lg:hidden block"
              />
              <div className="flex items-center justify-end w-full gap-4">
                <img
                  alt=""
                  src={LOGO.adultOnly}
                  className="w-[50px] object-cover"
                />
                <img src={LOGO.isj} alt="" className="w-[70px] object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/** BOTTOM FOOTER */}
      <section className="w-full bg-LT_GRAY-300">
        <Container className="py-6 justify-center">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} Lotaria Nacional. Todos os direitos
            reservados.
          </p>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
