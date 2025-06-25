import {
  SendApplicationDTO,
  sendApplicationSchema,
} from "@/features/applications/validations/send-application.schema";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Form from "@/shared/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/shared/components/ui/button/button";
import { useRecruitmentSubmit } from "../hooks/useRecruitment";
import Container from "@/shared/components/common/container/container";

export const GENDER_ENUM = {
  MALE: "Masculino",
  FEMALE: "Feminino",
};

export default function ApplicationPage() {
  const { submit, isLoading } = useRecruitmentSubmit();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SendApplicationDTO>({
    resolver: zodResolver(sendApplicationSchema),
  });

  const onSubmit = async (data: SendApplicationDTO) => {
    try {
      await submit(data);
      toast.success("Candidatura foi enviada com sucesso");
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        toast.error(error.response?.data || "Erro ao submeter a candidatura");
      }
    } finally {
      reset();
    }
  };

  return (
    <Container className="flex items-center gap-4 flex-col justify-center h-full py-12">
      <header>
        <h1 className="font-bold text-lg md:text-2xl">
          Recrutamento de revendedores
        </h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-LT_GRAY-100/40 p-4 md:p-10 rounded-lg w-full md:w-[500px] lg:w-[800px] flex flex-col gap-8"
      >
        <Form.Field>
          <div className="flex flex-col">
            <Form.Input label="Nome">
              <input
                type="text"
                placeholder="João"
                {...register("firstName")}
                className="bg-inherit w-full outline-none h-full p-3 rounded-lg"
              />
            </Form.Input>
            {errors.firstName && (
              <Form.Error error={errors.firstName.message} />
            )}
          </div>

          <div className="flex flex-col">
            <Form.Input label="Sobrenome">
              <input
                type="text"
                placeholder="António"
                {...register("lastName")}
                className="bg-inherit w-full outline-none h-full p-3 rounded-lg"
              />
            </Form.Input>
            {errors.lastName && <Form.Error error={errors.lastName.message} />}
          </div>
        </Form.Field>

        <Form.Field>
          <div className="flex flex-col">
            <Form.Input label="Email">
              <input
                type="text"
                placeholder="exemplo@gmail.com"
                {...register("email")}
                className="bg-inherit w-full outline-none h-full p-3 rounded-lg"
              />
            </Form.Input>
            {errors.email && <Form.Error error={errors.email.message} />}
          </div>

          <div className="flex flex-col">
            <Form.Input label="Nº de telefone">
              <div className="h-full rounded-l-md flex items-center justify-center w-10 bg-LT_GRAY-100/70">
                <img
                  src="icons/angola.png"
                  className="h-full w-5 object-contain"
                />
              </div>
              <input
                type="text"
                {...register("phone")}
                placeholder="99999999"
                className="bg-inherit w-full h-full outline-none p-3 rounded-lg"
              />
            </Form.Input>
            {errors.phone && <Form.Error error={errors.phone.message} />}
          </div>
        </Form.Field>

        <div className="w-full flex flex-col gap-3">
          <Form.Field className="flex flex-col">
            <label className="font-semibold" htmlFor="">
              Gênero
            </label>
            <div className="flex items-center gap-4">
              <label htmlFor="male" className="gap-2 flex">
                <input
                  type="radio"
                  {...register("gender")}
                  value={GENDER_ENUM.MALE}
                />
                <span>Masculino</span>
              </label>

              <label htmlFor="male" className="gap-2 flex">
                <input
                  type="radio"
                  {...register("gender")}
                  value={GENDER_ENUM.FEMALE}
                />
                <span>Feminino</span>
              </label>
            </div>
          </Form.Field>
          {errors.gender && <Form.Error error={errors.gender.message} />}
        </div>

        <Form.Field>
          <div className="flex flex-col">
            <Form.Input
              label="Bilhete de identidade"
              className="border p-2 overflow-hidden"
            >
              <input type="file" {...register("BI")} />
            </Form.Input>
            {errors.BI && <Form.Error error={errors.BI.message} />}
          </div>

          <Form.Input
            label="Comprovativo de residência"
            className="border p-2 overflow-hidden"
          >
            <input type="file" {...register("residenceProof")} className="" />
          </Form.Input>
        </Form.Field>

        <Button
          type="submit"
          variant="red"
          disabled={isLoading}
          className={`w-full ${isLoading && "bg-opacity-90"}`}
        >
          {isLoading ? "Submetendo..." : "Submeter candidatura"}
        </Button>
      </form>
    </Container>
  );
}
