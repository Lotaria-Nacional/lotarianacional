import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form"
import {
  skilledStaffSchema,
  SkilledStaffSchemaDTO,
} from "../validations/skilled-staff.schema"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { PulseLoader } from "react-spinners"
import { Input } from "@/shared/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "@/shared/components/ui/button/button"
import { useSendApplicationSkilledStaff } from "../hooks/use-send-application-skilled-staff"

type Props = {
  className?: string
  title: string
  department: string
}

export default function SkilledStaffOppeningForm({
  className,
  title,
  department,
}: Props) {
  const { isPending, mutateAsync } = useSendApplicationSkilledStaff()

  const form = useForm<SkilledStaffSchemaDTO>({
    resolver: zodResolver(skilledStaffSchema),
  })

  const handleOnSubmit = async (data: SkilledStaffSchemaDTO) => {
    try {
      const formData = new FormData()
      formData.append("firstName", data.firstName)
      formData.append("lastName", data.lastName)
      formData.append("phone", data.phone)
      formData.append("email", data.email)
      formData.append("cv", data.curriculum)
      formData.append("title", title)
      formData.append("department", department)

      const response = await mutateAsync(formData)
      toast.success(response.message)
    } catch (error) {
      console.error(error)
      toast.error("Erro ao submeter a candidatura, tente novamente mais tarde.")
    }
  }

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

        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currículum Vitae</FormLabel>
              <FormControl>
                <div className="flex w-full flex-col gap-2">
                  <label
                    htmlFor="curriculum"
                    className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-LT_RED-300 h-[120px] rounded-[8px]"
                  >
                    <img
                      className="size-10"
                      alt="upload icone"
                      src="/src/assets/icons/upload.svg"
                    />
                    <p className="text-sm text-zinc-400">
                      Clique para carregar o documento
                    </p>
                  </label>
                  <Input
                    type="file"
                    id="curriculum"
                    ref={field.ref}
                    className="hidden"
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
  )
}

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {children}
    </fieldset>
  )
}
