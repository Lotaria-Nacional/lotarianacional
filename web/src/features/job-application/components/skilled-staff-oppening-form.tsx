import {
  skilledStaffSchema,
  SkilledStaffSchemaDTO,
} from "../validations/skilled-staff.schema";
import { Form } from "./form";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import { inputVariants } from "./form/input.cva";
import uploadIcon from "/src/assets/icons/upload.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/button/button";
import { useSendJobApplication } from "../hooks/use-send-job-application";

type Props = {
  className?: string;
};

export default function JobApplicationForm({ className }: Props) {
  const { isPending } = useSendJobApplication();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SkilledStaffSchemaDTO>({
    resolver: zodResolver(skilledStaffSchema),
  });

  const handleOnSubmit = async (data: SkilledStaffSchemaDTO) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className={cn(
        "w-full h-full border rounded-lg p-4 gap-4 flex flex-col",
        className
      )}
    >
      <h2 className="text-[14px]">
        Preencha os campos abaixo para candidatar-se
      </h2>
      <hr className="w-full bg-zinc-400" />

      <Form.Row>
        <Form.Wrapper inputLabel="Nome">
          <input
            placeholder="João"
            {...register("firstName")}
            className={inputVariants({ intent: "primary" })}
          />
          <Form.Error error={errors.firstName?.message} />
        </Form.Wrapper>

        <Form.Wrapper inputLabel="Sobrenome">
          <input
            placeholder="António"
            {...register("lastName")}
            className={inputVariants({ intent: "primary" })}
          />
          <Form.Error error={errors.lastName?.message} />
        </Form.Wrapper>
      </Form.Row>

      <Form.Row>
        <Form.Wrapper inputLabel="Email">
          <input
            {...register("email")}
            placeholder="joaoantonio@exemplo.com"
            className={inputVariants({ intent: "primary" })}
          />
          <Form.Error error={errors.email?.message} />
        </Form.Wrapper>

        <Form.Wrapper inputLabel="Nº de Telefone">
          <input
            {...register("phone")}
            placeholder="(+244 941999999))"
            className={inputVariants({ intent: "primary" })}
          />
          <Form.Error error={errors.phone?.message} />
        </Form.Wrapper>
      </Form.Row>

      <Form.Row>
        <Form.InputFile
          htmlFor="cv"
          icon={uploadIcon}
          {...register("curriculum")}
        />
      </Form.Row>

      <Button
        type="submit"
        intent={"primary"}
        className="w-full"
        disabled={isPending}
      >
        {isPending ? <PulseLoader size={6} color="#FFF" /> : "Candidatar-se"}
      </Button>
    </form>
  );
}
