import { SetStateAction } from "react";
import { UpdateResultRequest } from "../../api";
import { ResultHour, ResultName } from "../../types";

type Props = {
  data: UpdateResultRequest;
  setData: React.Dispatch<SetStateAction<UpdateResultRequest>>;
};

export default function UpdateResultCardInput({ data, setData }: Props) {
  return (
    <div className="flex card-background flex-col items-start justify-between p-[14px] rounded-card h-input-card w-input-card">
      <header className="flex flex-col gap-[1px] text-white">
        <span className="capitalize font-edoSz-normal text-[24px]">
          {data.name as ResultName}
        </span>
        <span>{data.hour as ResultHour}</span>
      </header>

      <div className="w-full flex items-center justify-center gap-[4px] md:gap-[6px]">
        <input
          type="text"
          maxLength={2}
          value={data.number_1}
          onChange={(e) =>
            setData({ ...data, number_1: Number(e.target.value) || 0 })
          }
          className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
        />
        <input
          type="text"
          maxLength={2}
          value={data.number_2}
          onChange={(e) =>
            setData({ ...data, number_2: Number(e.target.value) || 0 })
          }
          className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
        />
        <input
          type="text"
          maxLength={2}
          value={data.number_3}
          onChange={(e) =>
            setData({ ...data, number_3: Number(e.target.value) || 0 })
          }
          className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
        />
        <input
          type="text"
          maxLength={2}
          value={data.number_4}
          onChange={(e) =>
            setData({ ...data, number_4: Number(e.target.value) || 0 })
          }
          className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
        />
        <input
          type="text"
          maxLength={2}
          value={data.number_5}
          onChange={(e) =>
            setData({ ...data, number_5: Number(e.target.value) || 0 })
          }
          className="size-[41px] bg-white text-LT-RED-200 text-lg font-bold rounded-full flex items-center justify-center text-center focus:outline-LT-RED-200"
        />
      </div>
    </div>
  );
}
