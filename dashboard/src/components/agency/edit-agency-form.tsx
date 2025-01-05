import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { updateAgency } from "@/api/agency.api"
import { useAgencyById } from "@/hooks/useAgencyById"
import { FormEvent, useEffect, useState } from "react"
import { CHAR_REGEX, NUMBER_REGEX } from "@/constants/regex"
import EditAgencyFormSkeleton from "../skeletons/edit-agency-form-skeleton"
import { SERVER_CONNECTION_ERROR, TRY_LATER_ERROR } from "@/constants/error"

const EditAgencyForm = () => {
  const { id } = useParams()
  const { agency, isLoading } = useAgencyById(id!)
  const [isUpdating, setIsUpdating] = useState(false)

  if (!id) {
    window.history.back()
    return
  }

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [locationText, setLocationText] = useState("")

  useEffect(() => {
    if (agency) {
      setName(agency.name || "")
      setPhone(agency.phone ? agency.phone.toString() : "")
      setLocationText(agency.location_text || "")
      setLatitude(agency.latitude ? agency.latitude.toString() : "")
      setLongitude(agency.longitude ? agency.longitude.toString() : "")
    }
  }, [agency])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    try {
      const data = {
        name,
        phone: parseInt(phone),
        location_text: locationText,
        latitude: Number(latitude),
        longitude: Number(longitude),
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

  if (isLoading) return <EditAgencyFormSkeleton />

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
              placeholder="-13.83833"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button disabled={isUpdating} className="w-full bg-RED-200" type="submit">
        {isUpdating ? "Atualizando..." : "Atualizar"}
      </Button>
    </form>
  )
}

export default EditAgencyForm
