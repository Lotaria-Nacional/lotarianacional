import Ui from "../components/ui"
import { IMAGES } from "../constants/assets"
import { ChangeEvent, useState } from "react"
import Container from "../components/common/container"

const RecrutamentoPage = () => {
  const [value, setValue] = useState("")
  const [phone, setPhone] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "") // Remove qualquer caractere não numérico
    const formattedValue =
      input
        .slice(0, 21) // Limita a entrada a 21 caracteres
        .match(/.{1,4}/g) // Divide os números em grupos de até 4
        ?.join(".") || "" // Adiciona os pontos entre os grupos

    setValue(formattedValue)
  }

  const handlePhoneNumber = (value: ChangeEvent<HTMLInputElement>) => {
    // Remove tudo que não for número
    const onlyNumbers = value.target.value.replace(/\D/g, "")
    // Limita o input a 9 dígitos
    const limitedNumbers = onlyNumbers.slice(0, 9)
    // Aplica o formato de separar por "-"
    const newPhone = limitedNumbers.replace(
      /(\d{1,3})(?=(\d{3})+(?!\d))/g,
      "$1-"
    )
    setPhone(newPhone)
  }

  return (
    <Container className="lg:gap-16 gap-6 grid grid-cols-1 lg:grid-cols-2 py-12">
      <h1 className="text-start block lg:hidden text-[26px] font-bold">
        Recrutamento de parceiros
      </h1>
      <form className="w-full bg-zinc-100 rounded-xl space-y-6 p-7 h-full">
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-semibold">
              Nome*
            </label>
            <input
              className="p-2 rounded-lg border outline-none"
              type="text"
              placeholder="Nome"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-semibold">
              Sobrenome*
            </label>
            <input
              className="p-2 rounded-lg border outline-none"
              type="text"
              placeholder="Sobrenome"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="" className="font-semibold">
            Telefone*
          </label>
          <div className=" w-full rounded-lg border flex items-center gap-1 bg-white">
            <div className="flex px-2 gap-1 h-[40px] items-center justify-center bg-LT_GRAY-100/40">
              <img
                src="/icons/angola.png"
                className="size-6 object-contain"
                alt=""
              />
              <span>+244</span>
            </div>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneNumber}
              className="p-2 outline-none w-full"
              placeholder="Número de Telefone"
            />
          </div>
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
            Curriculum vitae
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
            IBAN
          </label>
          <div className="flex p-2 rounded-lg border items-center gap-1 bg-white w-full">
            AO06
            <input
              type="text"
              value={value}
              inputMode="numeric"
              onChange={handleChange}
              className=" outline-none w-full"
            />
          </div>
        </div>

        <Ui.Button btn="red" className="w-full justify-center">
          Submeter candidatura
        </Ui.Button>
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
