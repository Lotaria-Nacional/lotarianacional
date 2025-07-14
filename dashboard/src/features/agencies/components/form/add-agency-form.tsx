import {
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { toast } from "sonner";

import { FormEvent, useState } from "react";
import { handleFormError } from "@/lib/error";
import { Input } from "@/shared/components/ui/input";
import { CreateAgencyRequest } from "../../api";
import { useAddAgency } from "../../hooks/mutation";
import Button from "@/shared/components/ui/lottary-button";
import { SELECT_OPTIONS } from "../../constants/select-options";
import { Form } from "@/shared/components/form";
import CustomSelect from "@/shared/components/common/custom-select";

export default function AddAgencyForm() {
  const { mutateAsync, isPending } = useAddAgency();

  const [data, setData] = useState<
    CreateAgencyRequest & { geoLocation: string }
  >({
    name: "",
    type: "",
    phone: 0,
    latitude: 0,
    longitude: 0,
    location_text: "",
    geoLocation: "",
  });

  const handleAddAgency = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { geoLocation, ...newData } = data;
      await mutateAsync(newData);
      toast.success("Adicionado com sucesso.");
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adicionar Nova Agência</DialogTitle>
        <DialogDescription>
          Preencha os campos abaixo para adicionar uma nova agência.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleAddAgency} className="flex w-full flex-col gap-5">
        <Form.Fieldset>
          <Form.InputContainer>
            <label htmlFor="">Nome da agência</label>
            <Input
              type="text"
              placeholder="Kinaxixi"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Form.InputContainer>

          <Form.InputContainer>
            <label htmlFor="">Número de telefone</label>
            <Input
              type="text"
              placeholder="+244 921 921 921"
              onChange={(e) =>
                setData({ ...data, phone: parseInt(e.target.value) })
              }
            />
          </Form.InputContainer>
        </Form.Fieldset>

        <Form.Fieldset>
          <Form.InputContainer>
            <label htmlFor="">Tipo de agência</label>
            <CustomSelect
              value={data.type}
              options={SELECT_OPTIONS}
              onChange={(val) => setData({ ...data, type: val })}
            />
          </Form.InputContainer>

          <Form.InputContainer>
            <label htmlFor="Localização">Localização</label>
            <Input
              type="text"
              placeholder="Cruzeiro do mar, rua do timor"
              onChange={(e) =>
                setData({ ...data, location_text: e.target.value })
              }
              value={data.location_text}
            />
          </Form.InputContainer>
        </Form.Fieldset>

        <Form.InputContainer>
          <label htmlFor="">Latitude e longitude</label>
          <Input
            type="text"
            placeholder="-8.83833 - 13.2344 8°"
            onChange={(e) => {
              const [latitude, longitude] = e.target.value.split(",");
              setData({
                ...data,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                geoLocation: e.target.value,
              });
            }}
            value={data.geoLocation}
          />
        </Form.InputContainer>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </DialogContent>
  );
}
