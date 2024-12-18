import { isAxiosError } from "axios"
import { IAgency } from "@/interfaces"
import { toast } from "react-toastify"
import { FormEvent, useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { createAgency } from "@/api/agency.api"
import { Button } from "@/components/ui/button"
import { CHAR_REGEX, NUMBER_REGEX } from "@/constants/regex"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

type CreateAgencyDTO = Omit<IAgency, "id" | "createdAt">

const AgencyForm = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [locationText, setLocationText] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const data: CreateAgencyDTO = {
      name,
      phone: parseInt(phone),
      location_text: locationText,
      latitude: parseInt(latitude),
      longitude: parseInt(longitude),
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-4">
        {/** Name */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Nome da agência</Label>
          <Input
            type="text"
            value={name}
            placeholder="Kinaxixi"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/** Telefone */}
        <div className="flex flex-col gap-2">
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
        {/** Localização */}
        <div className="flex flex-col gap-2 col-span-2">
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
        {/** Latitude & Longitude */}
        <div className="flex items-center gap-2 col-span-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="">Latitude</Label>
            <Input
              type="text"
              value={latitude}
              placeholder="8.83833"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="">Longitude</Label>
            <Input
              type="text"
              value={longitude}
              placeholder="13.2344 8"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button disabled={isLoading} className="w-full bg-RED-200" type="submit">
        {isLoading ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  )
}

export default AgencyForm
