import { isAxiosError } from "axios"
import { IAgency } from "@/interfaces"
import { toast } from "react-toastify"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { createAgency } from "@/api/agency.api"
import { Button } from "@/components/ui/button"
import { ChangeEvent, FormEvent, useState } from "react"
import { CHAR_REGEX, NUMBER_REGEX } from "@/constants/regex"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

type CreateAgencyDTO = Omit<IAgency, "id" | "createdAt">

const AgencyForm = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [phone, setPhone] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latAndLong, setLatAndLong] = useState("")
  const [locationText, setLocationText] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const handleLatAndLong = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const [lat, long] = value.split(",")
    setLatitude(lat)
    setLongitude(long)
    setLatAndLong(value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data: CreateAgencyDTO = {
      name,
      type,
      phone: parseInt(phone),
      location_text: locationText,
      latitude: Number(latitude),
      longitude: Number(longitude),
    }
    try {
      const response = await createAgency(data)
      console.log(response.message)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        return toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && !error.response) {
        return toast.error(TRY_LATER_ERROR)
      }
      return toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-10">
      <div className="flex flex-col gap-4">
        {/** Name */}
        <section className="flex items-center gap-2">
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="">Nome da agência</Label>
            <Input
              type="text"
              value={name}
              placeholder="Kinaxixi"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/** Telefone */}
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="">Telefone</Label>
            <Input
              type="text"
              value={phone}
              inputMode="numeric"
              placeholder="(+244) 999 999 999"
              onChange={(e) => {
                const value = e.target.value
                if (NUMBER_REGEX.test(value)) {
                  setPhone(value)
                }
              }}
            />
          </div>
        </section>
        {/** Localização */}

        <section className="flex items-center gap-2 w-full">
          <div className="flex flex-col gap-2 flex-[3]">
            <Label htmlFor="">Localização</Label>
            <Input
              type="text"
              value={locationText}
              placeholder="Cruzeiro, rua do Timor"
              onChange={(e) => {
                const value = e.target.value
                if (CHAR_REGEX.test(value)) {
                }
                setLocationText(value)
              }}
            />
          </div>

          <label className="flex flex-col gap-2 flex-1">
            Tipo de agência
            <select
              onChange={(e) => setType(e.target.value)}
              className="py-2 rounded-md border mb-2"
            >
              <option selected disabled>
                Escolher
              </option>
              <option value="lotaria-nacional">Lotaria Nacional</option>
              <option value="elephant-bet">Elephant Bet</option>
              <option value="arreiou">Arreiou</option>
            </select>
          </label>
        </section>

        {/** Latitude & Longitude */}
        <div className="flex flex-col col-span-4 gap-2">
          <Label htmlFor="">Latitude e Longitude</Label>
          <Input
            type="text"
            className="w-full"
            value={latAndLong}
            placeholder="Cole aqui as coordenadas"
            onChange={handleLatAndLong}
          />
        </div>
      </div>

      <Button disabled={isLoading} className="w-full bg-RED-200" type="submit">
        {isLoading ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  )
}

export default AgencyForm
