import {
  skilledStaffSchema,
  SkilledStaffSchemaDTO,
} from "../validations/skilled-staff.schema";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/button/button";
import { useSendJobApplication } from "../hooks/use-send-job-application";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";

type Props = {
  className?: string;
};

export default function JobApplicationForm({ className }: Props) {
  const { isPending } = useSendJobApplication();

  const form = useForm<SkilledStaffSchemaDTO>({
    resolver: zodResolver(skilledStaffSchema),
  });

  const handleOnSubmit = async (data: SkilledStaffSchemaDTO) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-y-4"
      >
        <fieldset className="grid grid-cols-2 gap-x-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Nome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Sobrenome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="grid grid-cols-2 gap-x-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nº de Telefone</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="(+244 9414141)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <Button
          type="submit"
          intent={"primary"}
          className="w-full"
          disabled={isPending}
        >
          {isPending ? <PulseLoader size={6} color="#FFF" /> : "Candidatar-se"}
        </Button>
      </form>
    </Form>
  );
}
