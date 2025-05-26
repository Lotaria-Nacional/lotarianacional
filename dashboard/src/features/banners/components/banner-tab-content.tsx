import Button from "@/components/ui/lottary-button";
import { TabsContent } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

type Props = {
  value: string;
  image: string;
};

export default function BannerTabContent({ value, image }: Props) {
  return (
    <TabsContent value={value} className="flex flex-col gap-[39px]">
      <div className="w-full bg-LT-GRAY-100/30 rounded-[10px] p-[24px] flex flex-col justify-around gap-10">
        <div className="flex-1 rounded-lg w-full h-full flex items-center justify-center">
          <img src={image} alt="banner" />
        </div>
        <div className="flex items-center w-full gap-2">
          <Button className="flex-1" variant="grayDarker">
            <label
              htmlFor="btn"
              className="text-white cursor-pointer w-fit flex items-center justify-center"
            >
              Alterar
              <input id="btn" type="file" accept="image/*" className="hidden" />
            </label>
          </Button>
          <Button className="flex-1">Eliminar</Button>
        </div>
      </div>
      <label
        htmlFor="btn"
        className="!text-black cursor-pointer w-fit bg-LT-YELLOW px-3 py-2 rounded-lg flex items-center justify-center gap-2"
      >
        <Plus size={14} />
        Adicionar banner
        <input id="btn" type="file" accept="image/*" className="hidden" />
      </label>
    </TabsContent>
  );
}
