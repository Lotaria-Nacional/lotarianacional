import { toast } from "sonner";
import { Form } from "@/components/form";
import { AgencyEntity } from "../../types";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { handleFormError } from "@/lib/error";
import { UpdateAgencyRequest } from "../../api";
import Button from "@/components/ui/lottary-button";
import CustomSelect from "@/components/custom-select";
import { useUpdateAgency } from "../../hooks/mutation";
import { SELECT_OPTIONS } from "../../constants/select-options";

type Props = {
  data: AgencyEntity;
};

export default function UpdateAgencyForm({ data }: Props) {
  const { mutateAsync, isPending } = useUpdateAgency();

  const [updateData, setUpdateData] = useState<UpdateAgencyRequest>(data);

  const handleUpdateAgency = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(updateData);
      toast.success(response.message);
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <form onSubmit={handleUpdateAgency} className="flex flex-col gap-6">
      <Form.Fieldset>
        <Form.InputContainer>
          <label htmlFor="">Nome da agência</label>
          <Input
            type="text"
            placeholder="Kinaxixi"
            value={updateData.name}
            onChange={(e) =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
          />
        </Form.InputContainer>

        <Form.InputContainer>
          <label htmlFor="">Número de telefone</label>
          <Input
            type="text"
            placeholder="+244 921 921 921"
            value={updateData.phone}
            onChange={(e) =>
              setUpdateData({ ...updateData, phone: parseInt(e.target.value) })
            }
          />
        </Form.InputContainer>
      </Form.Fieldset>

      <Form.Fieldset>
        <Form.InputContainer>
          <label htmlFor="">Tipo de agência</label>

          <CustomSelect
            value={updateData.type!}
            options={SELECT_OPTIONS}
            onChange={(val) => setUpdateData({ ...data, type: val })}
          />
        </Form.InputContainer>

        <Form.InputContainer>
          <label htmlFor="">Localização</label>
          <Input
            type="text"
            placeholder="Cruzeiro do mar, rua do timor"
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                location_text: e.target.value,
              })
            }
            value={updateData.location_text}
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
            setUpdateData({
              ...updateData,
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
            });
          }}
          value={`${updateData.latitude}, ${updateData.longitude}`}
        />
      </Form.InputContainer>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Atualizando..." : "Atuallizar"}
      </Button>
    </form>
  );
}
