import {
  SendApplicationDTO,
  sendApplicationSchema,
} from "@/schemas/send-application.schema";
import { useForm } from "react-hook-form";
import Form from "@/components/ui/form";
import Container from "../components/common/container";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/button/button";
import { useRecruitmentSubmit } from "@/hooks/api";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

export const GENDER_ENUM = {
  MALE: "Masculino",
  FEMALE: "Feminino",
};

const RecrutamentoPage = () => {
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
          className="w-full"
          disabled={isLoading}
        >
          Submeter candidatura
        </Button>
      </form>
    </Container>
  );
};

export default RecrutamentoPage;

// return (
//   <Container className="flex items-center gap-4 flex-col justify-center h-full py-12">
//     <h1 className="text-center block text-lg lg:text-[26px] font-bold">
//       Recrutamento de revendedores
//     </h1>

//     <form
//       onSubmit={handleSubmit}
//       className="w-full lg:w-[800px] bg-zinc-100 rounded-xl space-y-6 p-7 h-full"
//     >
//       <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full">
//         <InputContainer labelName="Nome">
//           <input
//             type="text"
//             placeholder="Nome"
//             value={recruitment.firstName}
//             onChange={(e) =>
//               setRecruitment({ ...recruitment, firstName: e.target.value })
//             }
//             className="p-2 rounded-lg border outline-none"
//           />
//         </InputContainer>

//         <InputContainer labelName="Sobrenome">
//           <input
//             type="text"
//             placeholder="Sobrenome"
//             value={recruitment.lastName}
//             onChange={(e) =>
//               setRecruitment({ ...recruitment, lastName: e.target.value })
//             }
//             className="p-2 rounded-lg border outline-none"
//           />
//         </InputContainer>
//       </div>
//       <div className="flex items-center flex-wrap lg:flex-nowrap gap-4 w-full">
//         <InputContainer labelName="Email">
//           <input
//             type="email"
//             value={recruitment.email}
//             placeholder="exemplo@gmail.com"
//             className="p-2 rounded-lg border outline-none"
//             onChange={(e) =>
//               setRecruitment({
//                 ...recruitment,
//                 email: e.target.value,
//               })
//             }
//           />
//         </InputContainer>

//         <InputContainer labelName="Telefone">
//           <div className=" w-full rounded-lg border flex items-center gap-1 bg-white">
//             <div className="flex px-2 gap-1 h-[40px] items-center justify-center bg-LT_GRAY-100/40">
//               <img
//                 src="/icons/angola.png"
//                 className="size-6 object-contain"
//                 alt=""
//               />
//             </div>

//             <input
//               type="text"
//               value={recruitment.phone}
//               placeholder="Número de Telefone"
//               className="p-2 outline-none w-full"
//               onChange={(e) =>
//                 setRecruitment({
//                   ...recruitment,
//                   phone: regexPhoneNumber(e.target.value),
//                 })
//               }
//             />
//           </div>
//         </InputContainer>
//       </div>

//       <InputContainer labelName="Gênero">
//         <fieldset className="flex items-center gap-3">
//           <label className="flex items-center gap-1">
//             <input
//               type="radio"
//               name="gender"
//               value="Masculino"
//               className="p-2 rounded-lg border outline-none"
//               onChange={(e) =>
//                 setRecruitment({ ...recruitment, gender: e.target.value })
//               }
//             />
//             <span>Masculino</span>
//           </label>

//           <label className="flex items-center gap-1">
//             <input
//               type="radio"
//               name="gender"
//               value="Feminino"
//               className="p-2 rounded-lg border outline-none"
//               onChange={(e) =>
//                 setRecruitment({ ...recruitment, gender: e.target.value })
//               }
//             />
//             <span>Feminino</span>
//           </label>
//         </fieldset>
//       </InputContainer>

//       <InputContainer labelName="Cópia do B.I">
//         <input
//           type="file"
//           accept="image/*"
//           className="p-2 rounded-lg border outline-none"
//           onChange={(e) => {
//             const file = e.target.files?.item(0);

//             setRecruitment({ ...recruitment, BI: file! });
//           }}
//         />
//         <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
//       </InputContainer>

//       <InputContainer required={false} labelName="Comprovativo de residência">
//         <input
//           type="file"
//           className="p-2 rounded-lg border outline-none"
//           onChange={(e) => {
//             const file = e.target.files?.item(0);

//             setRecruitment({
//               ...recruitment,
//               residenceProof: file,
//             });
//           }}
//         />
//         <span className="text-xs text-zinc-400">(Tamanho máx. 4MB)</span>
//       </InputContainer>

//       <Button
//         variant="red"
//         disabled={isLoading}
//         className="w-full justify-center"
//       >
//         {isLoading ? "Submetendo..." : "Submeter candidatura"}
//       </Button>
//     </form>
//   </Container>
// );
