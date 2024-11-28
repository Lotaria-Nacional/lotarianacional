import { IMAGES } from "../constants/assets"
import Container from "../components/container"

const RecrutamentoPage = () => {
  return (
    <Container className="gap-16 grid grid-cols-1 lg:grid-cols-2 py-12">
      <section className="w-full lg:hidden block h-[400px] relative">
        <img
          src={IMAGES.recrutamento}
          alt="imagem de recrutamento"
          className="absolute h-full w-full rounded-xl object-contain"
        />
      </section>

      <form className="w-full bg-zinc-100 rounded-xl space-y-6 p-7 h-full">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-semibold">
              Nome*
            </label>
            <input className="p-2 rounded-lg border outline-none" type="text" />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-semibold">
              Sobrenome*
            </label>
            <input className="p-2 rounded-lg border outline-none" type="text" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-semibold">
            Telefone*
          </label>
          <input className="p-2 rounded-lg border outline-none" type="tel" />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-semibold">
            Gênero*
          </label>

          <div className="flex items-center gap-3">
            <label htmlFor="" className="flex items-center gap-1">
              <input
                className="p-2 rounded-lg border outline-none"
                name="gender"
                type="radio"
              />
              <span>Masculino</span>
            </label>

            <label htmlFor="" className="flex items-center gap-1">
              <input
                className="p-2 rounded-lg border outline-none"
                name="gender"
                type="radio"
              />
              <span>Feminino</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className="font-semibold">
            Cópia do B.I
          </label>
          <input
            className="p-2 rounded-lg border outline-none"
            type="file"
            accept=".pdf"
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className="font-semibold">
            Fotos tipo passe
          </label>
          <input
            className="p-2 rounded-lg border outline-none"
            type="file"
            accept=".pdf"
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className="font-semibold">
            Comprovativo de residência
          </label>
          <input
            className="p-2 rounded-lg border outline-none"
            type="file"
            accept=".pdf"
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="" className="font-semibold">
            Comprovativo de residência
          </label>
          <input
            className="p-2 rounded-lg border outline-none"
            type="text"
            placeholder="AOA0"
            defaultValue={"AO06"}
          />
        </div>
      </form>

      <section className="w-full hidden lg:block lg:h-full relative">
        <img
          src={IMAGES.recrutamento}
          alt="imagem de recrutamento"
          className="absolute h-full w-full rounded-xl object-cover"
        />
      </section>
    </Container>
  )
}

export default RecrutamentoPage
