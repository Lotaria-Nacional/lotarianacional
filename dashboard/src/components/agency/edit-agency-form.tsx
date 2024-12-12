import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent, useEffect, useState } from "react"
import { updateAgency, getAgencyById } from "@/api/agency.api"
import { CHAR_REGEX, COORD_REGEX, NUMBER_REGEX } from "@/constants/regex"

import { useParams } from "react-router-dom"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

const EditAgencyForm = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [coordinates, setCoordinates] = useState("")
  const [locationText, setLocationText] = useState("")

  if (!id) {
    window.history.back()
    return
  }
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const data = await getAgencyById(id!)
      setName(data.name)
      setPhone(data.phone.toString())
      const coords = `${data.latitude},${data.latitude}`
      setCoordinates(coords)
      setLocationText(data.location_text)
      setIsLoading(false)
    }
    fetch()
  }, [id])
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      const [latitude, longitude] = coordinates.split(",")

      const data = {
        name,
        phone: parseInt(phone),
        location_text: locationText,
        latitude: parseInt(latitude),
        longitude: parseInt(longitude),
      }
      console.log(data)
      const response = await updateAgency(id!, data)
      toast.success(response.message)
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
      if (isAxiosError(error) && error.response) {
        toast.error(TRY_LATER_ERROR)
      }
      toast.error(SERVER_CONNECTION_ERROR)
    } finally {
      setIsUpdating(false)
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
            onChange={(e) => setName(e.target.value)}
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
      <Button disabled={isUpdating} className="w-full bg-RED-200" type="submit">
        {isUpdating ? "Atualizando..." : "Atualizar"}
      </Button>
    </form>
  )
}

export default EditAgencyForm
