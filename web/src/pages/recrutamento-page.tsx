import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { IRecruitment } from "@/interfaces"
import { IMAGES } from "../constants/assets"
import Container from "../components/common/container"
import { useRecruitmentSubmit } from "@/hooks/api/index"
import { regexIBAN, regexPhoneNumber } from "@/utils/regex"
import Button from "@/components/ui/button/button"
import InputContainer from "@/components/ui/form/input-container"

const RecrutamentoPage = () => {
  const { submit, isLoading } = useRecruitmentSubmit()
  const [recruitment, setRecruitment] = useState<IRecruitment>({
    firstName: "",
    lastName: "",
    IBAN: "",
    phone: "",
    gender: "",
    BI: null,
    photo: null,
    curriculum: null,
    residenceProof: null,
  })

  const resetInputFields = () => {
    setRecruitment({
      firstName: "",
      lastName: "",
      IBAN: "",
      phone: "",
      gender: "",
      BI: null,
      photo: null,
      curriculum: null,
      residenceProof: null,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await submit(recruitment, e)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        if (!error.response) {
          return toast.error("Erro ao submeter candidatura.Tente mais tarde.")
        }
        return toast.error(error.response.data)
      }
      return toast.error("Erro interno no servidor.")
    } finally {
      resetInputFields()
    }
  }

  return (
    <Container className="lg:gap-16 gap-6 grid grid-cols-1 lg:grid-cols-2 py-12">
      <h1 className="text-start block lg:hidden text-[26px] font-bold">
        Recrutamento de parceiros
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-zinc-100 rounded-xl space-y-6 p-7 h-full"
      >
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full">
          <InputContainer labelName="Nome">
            <input
              type="text"
              placeholder="Nome"
              value={recruitment.firstName}
              onChange={(e) =>
                setRecruitment({ ...recruitment, firstName: e.target.value })
              }
              className="p-2 rounded-lg border outline-none"
            />
          </InputContainer>

          <InputContainer labelName="Sobrenome">
            <input
              type="text"
              placeholder="Sobrenome"
              value={recruitment.lastName}
              onChange={(e) =>
                setRecruitment({ ...recruitment, lastName: e.target.value })
              }
              className="p-2 rounded-lg border outline-none"
            />
          </InputContainer>
        </div>

        <InputContainer labelName="Telefone">
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
              value={recruitment.phone}
              placeholder="Número de Telefone"
              className="p-2 outline-none w-full"
              onChange={(e) =>
                setRecruitment({
                  ...recruitment,
                  phone: regexPhoneNumber(e.target.value),
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer labelName="Gênero">
          <fieldset className="flex items-center gap-3">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Masculino"
                className="p-2 rounded-lg border outline-none"
                onChange={(e) =>
                  setRecruitment({ ...recruitment, gender: e.target.value })
                }
              />
              <span>Masculino</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Feminino"
                className="p-2 rounded-lg border outline-none"
                onChange={(e) =>
                  setRecruitment({ ...recruitment, gender: e.target.value })
                }
              />
              <span>Feminino</span>
            </label>
          </fieldset>
        </InputContainer>

        <InputContainer labelName="Cópia do B.I">
          <input
            type="file"
            accept="image/*"
            className="p-2 rounded-lg border outline-none"
            onChange={(e) =>
              setRecruitment({ ...recruitment, BI: e.target.files?.item(0) })
            }
          />
          <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
        </InputContainer>

        <InputContainer labelName="Fotos tipo passe">
          <input
            type="file"
            accept="image/*"
            className="p-2 rounded-lg border outline-none"
            onChange={(e) =>
              setRecruitment({ ...recruitment, photo: e.target.files?.item(0) })
            }
          />
          <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
        </InputContainer>

        <InputContainer labelName="Curriculum vitae">
          <input
            type="file"
            className="p-2 rounded-lg border outline-none"
            onChange={(e) =>
              setRecruitment({
                ...recruitment,
                curriculum: e.target.files?.item(0),
              })
            }
          />
          <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
        </InputContainer>

        <InputContainer labelName="Comprovativo de residência">
          <input
            type="file"
            className="p-2 rounded-lg border outline-none"
            onChange={(e) =>
              setRecruitment({
                ...recruitment,
                residenceProof: e.target.files?.item(0),
              })
            }
          />
          <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
        </InputContainer>

        <InputContainer labelName="IBAN">
          <div className="flex p-2 rounded-lg border items-center gap-1 bg-white w-full">
            AO06
            <input
              type="text"
              inputMode="numeric"
              value={recruitment.IBAN}
              className="outline-none w-full"
              onChange={(e) =>
                setRecruitment({
                  ...recruitment,
                  IBAN: regexIBAN(e.target.value),
                })
              }
            />
          </div>
        </InputContainer>

        <Button
          variant="red"
          disabled={isLoading}
          className="w-full justify-center"
        >
          {isLoading ? "Submetendo..." : "Submeter candidatura"}
        </Button>
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
