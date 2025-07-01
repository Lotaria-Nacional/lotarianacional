import { Form } from "./form";
import { PulseLoader } from "react-spinners";
import uploadIcon from "/src/assets/icons/upload.svg";
import Button from "@/shared/components/ui/button/button";
import { useSendJobApplication } from "../hooks/use-send-job-application";

export default function JobApplicationForm() {
  const { isPending } = useSendJobApplication();

  return (
    <form className="w-full h-full border rounded-lg p-4 gap-4 flex flex-col">
      <h2 className="text-[14px]">
        Preencha os campos abaixo para candidatar-se
      </h2>
      <hr className="w-full bg-zinc-400" />

      <Form.Row>
        <Form.Input inputLabel="Nome" placeholder="João" />
        <Form.Input inputLabel="Sobreome" placeholder="Paulo" />
      </Form.Row>

      <Form.Row>
        <Form.Input
          type="email"
          inputLabel="Email"
          placeholder="joaopaulo@gmail.com"
        />
        <Form.Input
          inputLabel="Nº Telefone"
          placeholder="(+244) 921515253"
          pattern="\d{9}"
        />
      </Form.Row>

      <Form.Row>
        <Form.InputFile htmlFor="cv" icon={uploadIcon} />
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
