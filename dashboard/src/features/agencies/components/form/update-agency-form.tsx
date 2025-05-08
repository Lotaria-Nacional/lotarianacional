import { FormEvent, useState } from "react";
import { AgencyEntity } from "../../types";
import { useUpdateAgency } from "../../hooks/mutation";
import { toast } from "sonner";
import { handleFormError } from "@/lib/error";
import { UpdateAgencyRequest } from "../../api";
import Button from "@/components/ui/lottary-button";

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
      <fieldset className="flex lg:flex-row flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Nome da agência</label>
          <input
            type="text"
            placeholder="Kinaxixi"
            value={updateData.name}
            onChange={(e) =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Número de telefone</label>
          <input
            type="text"
            placeholder="+244 921 921 921"
            value={updateData.phone}
            onChange={(e) =>
              setUpdateData({ ...updateData, phone: parseInt(e.target.value) })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>
      </fieldset>

      <fieldset className="flex lg:flex-row flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Tipo de agência</label>

          <select
            defaultValue={updateData.type}
            onChange={(e) =>
              setUpdateData({ ...updateData, type: e.target.value })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-[8px] outline-none"
          >
            <option value="lotaria-nacional">Lotaria nacional</option>
            <option value="elephant-bet">Elephant Bet</option>
            <option value="arreiou">Arreiou</option>
          </select>
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Localização</label>
          <input
            type="text"
            placeholder="Cruzeiro do mar, rua do timor"
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                location_text: e.target.value,
              })
            }
            value={updateData.location_text}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>
      </fieldset>

      <div className="flex w-full flex-col gap-2">
        <label htmlFor="">Latitude e longitude</label>
        <input
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
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Atualizando..." : "Atuallizar"}
      </Button>
    </form>
  );
}
