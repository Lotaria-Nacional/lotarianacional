import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/shared/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import {
  UpdateQualifiedOppeningDTO,
  updateQualifiedOppeningSchema,
} from "../validation/update-qualified-oppening.schema";
import { JobOppening } from "../@types";
import { Edit2 } from "lucide-react";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/components/ui/button";
import { departments } from "@/app/constants/departments";
import { Textarea } from "@/shared/components/ui/textarea";
import { useUpdateJobOppening } from "../hooks/use-update-job-oppening";

type Props = {
  job: JobOppening;
};

export default function UpdateQualifiendOppening({ job }: Props) {
  const updateHook = useUpdateJobOppening();

  const form = useForm<UpdateQualifiedOppeningDTO>({
    resolver: zodResolver(updateQualifiedOppeningSchema),
    defaultValues: {
      department: job.department.toLowerCase(),
      id: job.id,
      quantity: job.quantity.toString(),
      requirements: job.requirements.join("; "),
      title: job.title,
    },
  });

  const onSubmit = async (data: UpdateQualifiedOppeningDTO) => {
    const { requirements, ...rest } = data;
    const normalizedRequirements: string[] = Array.isArray(requirements)
      ? requirements
      : requirements
          ?.split(";")
          .map((item) => item.trim())
          .filter((item) => item.length > 0) || [];

    const payload = {
      ...rest,
      requirements: normalizedRequirements,
    };
    await updateHook.mutateAsync(payload);
  };

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
              <label>Função</label>
              <Input
                placeholder="Digite a função"
                {...form.register("title")}
                className="w-full border-[#8E8E8E]"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="">Departamento</label>
              <Controller
                name="department"
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
              placeholder="Separe os requisitos por ponto e vírgula (;)"
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
  );
}
