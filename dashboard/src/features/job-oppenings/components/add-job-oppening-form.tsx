import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import {
  addJobOppeningSchema,
  AddJobOppeningType,
} from "../validation/add-job-oppening.schema";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/shared/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/lottary-button";

export default function AddQualifiedOppeningForm() {
  const form = useForm<AddJobOppeningType>({
    resolver: zodResolver(addJobOppeningSchema),
  });

  const onSubmit = async (data: AddJobOppeningType) => {
    console.log(data);
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
            placeholder="Função"
            {...form.register("function")}
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
      </fieldset>

      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="quantidade">Quantidade</label>
        <Input
          placeholder="Quantidade"
          {...form.register("quantity")}
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
      <Button variant="red" className="w-full">
        Adicionar vaga
      </Button>
    </form>
  );
}
