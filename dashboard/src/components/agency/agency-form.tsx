import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, FormEvent, useState } from "react"

type KeyProps = "name" | "phone" | "latitude" | "longitude" | "location_text"

type CreateAgencyDTO = {
  name: string
  phone: number
  latitude: number
  longitude: number
  location_text: string
}

const AgencyForm = () => {
  const [data, setData] = useState<CreateAgencyDTO>({
    name: "",
    phone: 0,
    latitude: 0,
    longitude: 0,
    location_text: "",
  })

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: KeyProps
  ) => {
    const value = e.target.value
    setData({
      ...data,
      [key]: value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Nome da agência</Label>
          <Input
            type="text"
            placeholder="Kinaxixi"
            onChange={(e) => handleInputChange(e, "name")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Telefone</Label>
          <Input
            type="text"
            placeholder="(+244) 999 999 999"
            onChange={(e) => handleInputChange(e, "phone")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Localização</Label>
          <Input
            type="text"
            placeholder="Cruzeiro, rua do Timor"
            onChange={(e) => handleInputChange(e, "location_text")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="">Coordenadas</Label>
          <Input
            type="text"
            placeholder="-8.83833 - 13.2344 8° "
            onChange={(e) => handleInputChange(e, "latitude")}
          />
        </div>
      </div>
      <Button className="w-full bg-RED-200" type="submit">
        Salvar
      </Button>
    </form>
  )
}

export default AgencyForm
