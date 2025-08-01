import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/shared/components/ui/form";
import {
  resellerSchema,
  ResellerSchemaDTO,
} from "../../validations/reseller.schema";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import FileUploadField from "../form/file-upload";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/button/button";
import { useSendApplicationReseller } from "../../hooks/use-send-application-reseller";

type Props = {
  className?: string;
  location: string;
};

export default function ResellerOppeningForm({ location, className }: Props) {
  const { isPending, mutateAsync } = useSendApplicationReseller();

  const form = useForm<ResellerSchemaDTO>({
    resolver: zodResolver(resellerSchema),
  });

  const handleOnSubmit = async (data: ResellerSchemaDTO) => {
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("location", location);
      formData.append("bi", data.bi);
      if (data.proofOfAddress) {
        formData.append("proofOfAddress", data.proofOfAddress);
      }

      const response = await mutateAsync(formData);
      toast.success(response.message);
    } catch (error) {
      console.error(error);
      toast.error(
        "Erro ao submeter a candidatura, tente novamente mais tarde."
      );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className={cn(
          "flex flex-col gap-8 border border-zinc-200 p-4 rounded-[8px]",
          className
        )}
      >
        <h2 className="border-b border-b-zinc-200 pb-3 text-sm font-semibold">
          Preencha os campos para candidadar-se
        </h2>
        <FormWrapper>
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
        </FormWrapper>
        <FormWrapper>
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
        </FormWrapper>

        <FormWrapper className="grid grid-cols-1 w-full lg:grid-cols-2 place-items-end">
          <FormField
            control={form.control}
            name="bi"
            render={({ field }) => (
              <FileUploadField
                field={field}
                name="bi"
                label="Bilhete de identidade"
              />
            )}
          />

          <FormField
            control={form.control}
            name="proofOfAddress"
            render={({ field }) => (
              <FileUploadField
                field={field}
                name="proofOfAddress"
                label="Comprovativo de residência"
              />
            )}
          />
        </FormWrapper>

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

const FormWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <fieldset
      className={cn("w-full grid grid-cols-1 lg:grid-cols-2 gap-8", className)}
    >
      {children}
    </fieldset>
  );
};
