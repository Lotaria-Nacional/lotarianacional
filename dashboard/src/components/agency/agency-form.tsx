import { toast } from "react-toastify"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { createAgency } from "@/api/agency.api"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import { CHAR_REGEX, COORD_REGEX, NUMBER_REGEX } from "@/constants/regex"
import { IAgency } from "@/interfaces"

type CreateAgencyDTO = Omit<IAgency, "id" | "createdAt">

const AgencyForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [coordinates, setCoordinates] = useState("")
  const [locationText, setLocationText] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const [latitude, longitude] = coordinates.split(",")

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
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Nome da agência</Label>
          <Input
            type="text"
            value={name}
            placeholder="Kinaxixi"
            onChange={(e) => {
              const value = e.target.value
              if (CHAR_REGEX.test(value)) {
                setName(value)
              }
            }}
          />
        </div>
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
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Coordenadas</Label>
          <Input
            type="text"
            value={coordinates}
            placeholder="-8.83833 - 13.2344 8°"
            onChange={(e) => {
              const value = e.target.value
              if (COORD_REGEX.test(value)) {
                setCoordinates(e.target.value)
              }
            }}
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
