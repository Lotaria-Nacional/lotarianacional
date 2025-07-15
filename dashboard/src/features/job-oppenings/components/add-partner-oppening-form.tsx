import {
  AddPartnerOppeningDTO,
  addPartnerOppeningSchema,
} from "../validation/add-partner-oppening.schema"
import { Input } from "@/shared/components/ui/input"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "@/shared/components/ui/lottary-button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import { Textarea } from "@/shared/components/ui/textarea"
import { jobLocations } from "../constants/job-locations"
import { useCreatedPartnerJobOppening } from "../hooks/partner/use-create-partner-job-oppening"

export default function AddPartnerOppeningForm() {
  const createHook = useCreatedPartnerJobOppening()

  const form = useForm<AddPartnerOppeningDTO>({
    resolver: zodResolver(addPartnerOppeningSchema),
  })

  const onSubmit = async (data: AddPartnerOppeningDTO) => {
    const req =
      typeof data.requirements === "string"
        ? data.requirements.split(",").map((val) => val.trim())
        : ""

    const payload = {
      ...data,
      title: "Revendedor",
      requirements: req,
    }
    await createHook.mutateAsync(payload)
    console.log(data)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <fieldset className="flex gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="">Tipo de parceiro</label>
          <Controller
            name="type"
            control={form.control}
            render={({ field }) => (
              <Select onValueChange={(value) => field.onChange(value)}>
                <SelectTrigger className="w-full border-[#8E8E8E]">
                  <SelectValue placeholder="Departamento" />
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Quantidade</label>
          <Input
            type="number"
            inputMode="numeric"
            placeholder="Quantidade"
            {...form.register("quantity")}
            className="w-full border-[#8E8E8E]"
          />
        </div>
      </fieldset>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">Localização</label>
        <Controller
          name="location"
          control={form.control}
          render={({ field }) => (
            <Select onValueChange={(value) => field.onChange(value)}>
              <SelectTrigger className="w-full border-[#8E8E8E]">
                <SelectValue placeholder="Localização" />
                <SelectContent>
                  {jobLocations.map((item, index) => (
                    <SelectItem key={index} value={item.value}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectTrigger>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="requisitos">Requisitos</label>
        <Textarea
          placeholder="Requisitos"
          {...form.register("requirements")}
          className=" h-4 border-[#8E8E8E]"
        />
      </div>
      <Button variant="red" className="w-full">
        Adicionar vaga
      </Button>
    </form>
  )
}
