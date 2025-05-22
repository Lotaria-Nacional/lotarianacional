import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/lottary-button";
import { useUpdateResult } from "../../hooks/mutation";
import { getYouTubeEmbedURL } from "../../utils/get-youtube-embed";

type Props = {
  result_info: {
    id: string;
    videoURL: string | null;
  };
};

export default function EditResultCard({ result_info }: Props) {
  const { mutateAsync, isPending } = useUpdateResult();

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [url, setUrl] = useState("");

  if (result_info.videoURL) {
    return null;
  }

  const handleUpdateResult = async (e: FormEvent) => {
    e.preventDefault();
    try {
      mutateAsync({
        id: result_info.id,
        videoURL: getYouTubeEmbedURL(url),
      });
      toast("Atualizado com sucesso!");
    } catch (error) {
      console.error("Error updating result:", error);
    }
  };

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="absolute inset-0 w-full h-full"
    >
      {isMouseOver && (
        <div className="absolute flex items-center justify-center inset-0 w-full h-full bg-black/40 rounded-card">
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger>
                <Button className="bg-white text-black">Editar</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Adicionar o link da emissão.</DialogTitle>
                <form
                  onSubmit={handleUpdateResult}
                  className="flex flex-col gap-4 w-full"
                >
                  <fieldset className="gap-y-2 flex flex-col">
                    <label>Link da emissão</label>
                    <Input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://youtube.com/YgvsSfsfibn"
                    />
                  </fieldset>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="self-end"
                  >
                    {isPending ? "Atualizando..." : "Atualizar"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </div>
  );
}
