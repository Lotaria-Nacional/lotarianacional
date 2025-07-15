import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { departments } from "@/app/constants/departments";
import { Input } from "@/shared/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/lottary-button";
import { useCreateJobOppening } from "../hooks/use-create-job-oppening";
import { toast } from "sonner";
import {
  addQualifiedOppeningSchema,
  AddQualifiedOppeningType,
} from "../validation/add-qualified-oppening.schema";

export default function AddQualifiedOppeningForm() {
  const jobOppeningHook = useCreateJobOppening();

  const form = useForm<AddQualifiedOppeningType>({
    resolver: zodResolver(addQualifiedOppeningSchema),
  });

  const onSubmit = async (data: AddQualifiedOppeningType) => {
    try {
      const d =
        typeof data.requirements === "string" &&
        (data.requirements.split(";").map((val) => val.trim()) as string[]);

      const response = await jobOppeningHook.mutateAsync({
        ...data,
        requirements: d as string[],
      });
      toast.success(response.message);
      console.log(response);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
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
              <Select onValueChange={(value) => field.onChange(value)}>
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
          className=" h-20 border-[#8E8E8E]"
        />
      </div>
      <Button
        disabled={jobOppeningHook.isPending}
        variant="red"
        className="w-full"
      >
        {jobOppeningHook.isPending ? "Adicionando..." : "Adicionar vaga"}
      </Button>
    </form>
  );
}
