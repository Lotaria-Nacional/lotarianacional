import { Button } from "@/shared/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { Edit2 } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { PartnerJobOppening } from "../@types"
import { Input } from "@/shared/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import { departments } from "@/app/constants/departments"
import { Textarea } from "@/shared/components/ui/textarea"
import {
  UpdatePartnerOppeningDTO,
  updatePartnerOppeningSchema,
} from "../validation/update-partner-oppening.schema"
import { useUpdatePartnerJobOppening } from "../hooks/partner/use-update-partner-job-oppening"

type Props = {
  job: PartnerJobOppening
}

export default function UpdatePartnerOppening({ job }: Props) {
  const updateHook = useUpdatePartnerJobOppening()

  const form = useForm<UpdatePartnerOppeningDTO>({
    resolver: zodResolver(updatePartnerOppeningSchema),
    defaultValues: {
      type: job.type,
      location: job.location,
      id: job.id,
      quantity: job.quantity.toString(),
      requirements: job.requirements.join(", "),
      title: job.title,
    },
  })

  const onSubmit = async (data: UpdatePartnerOppeningDTO) => {
    const { requirements, ...rest } = data
    const normalizedRequirements: string[] = Array.isArray(requirements)
      ? requirements
      : requirements
          ?.split(",")
          .map((item) => item.trim())
          .filter((item) => item.length > 0) || []

    const payload = {
      ...rest,
      requirements: normalizedRequirements,
    }
    await updateHook.mutateAsync(payload)
    console.log(payload)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar vaga</DialogTitle>
          <DialogDescription>Editar os campos</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <fieldset className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label>Titulo</label>
              <Input
                placeholder="Digite a função"
                {...form.register("title")}
                className="w-full border-[#8E8E8E]"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Tipo</label>
              <Controller
                name="type"
                control={form.control}
                render={({ field }) => (
                  <Select
                    defaultValue={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full border-[#8E8E8E]">
                      <SelectValue placeholder="Selecione o departamento" />
                      <SelectContent>
                        {departments.map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                )}
              />
            </div>
          </fieldset>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="quantidade">Quantidade</label>
            <Input
              type="number"
              inputMode="numeric"
              {...form.register("quantity")}
              placeholder="Escolha a quantidade"
              className="w-full border-[#8E8E8E]"
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
          <Button
            variant="destructive"
            disabled={updateHook.isPending}
            className="w-full"
          >
            {updateHook.isPending ? "Atualizando..." : "Atualizar vaga"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
