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
            Alterar
          </Button>
          <Button className="flex-1">Eliminar</Button>
        </div>
      </div>
      <Button variant="yellow" className="!text-black">
        <Plus size={14} />
        Adicionar banner
      </Button>
    </TabsContent>
  );
}
