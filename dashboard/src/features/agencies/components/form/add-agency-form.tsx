import { FormEvent, useState } from "react";
import Button from "@/components/ui/lottary-button";
import { CreateAgencyRequest } from "../../api";
import { handleFormError } from "@/lib/error";
import { toast } from "sonner";
import { useAddAgency } from "../../hooks/mutation";

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
    <form onSubmit={handleAddAgency} className="flex flex-col gap-6">
      <fieldset className="flex lg:flex-row flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Nome da agência</label>
          <input
            type="text"
            placeholder="Kinaxixi"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Número de telefone</label>
          <input
            type="text"
            placeholder="+244 921 921 921"
            onChange={(e) =>
              setData({ ...data, phone: parseInt(e.target.value) })
            }
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>
      </fieldset>

      <fieldset className="flex lg:flex-row flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="">Tipo de agência</label>

          <select
            defaultValue={"escolher"}
            onChange={(e) => setData({ ...data, type: e.target.value })}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-[8px] outline-none"
          >
            <option value="escolher" disabled>
              Escolher
            </option>
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
              setData({ ...data, location_text: e.target.value })
            }
            value={data.location_text}
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
            setData({
              ...data,
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude),
              geoLocation: e.target.value,
            });
          }}
          value={data.geoLocation}
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
