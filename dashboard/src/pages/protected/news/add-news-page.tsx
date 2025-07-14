import { toast } from "sonner";
import { Eye, File } from "lucide-react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { handleFormError } from "@/lib/error";
import Button from "@/shared/components/ui/lottary-button";
import { useAddNews } from "@/features/news/hooks/mutation";
import AddNewsImageInput from "@/features/news/components/form/add-news-image-input";
import { NewsEntity } from "@/features/news/types";
import Tiptap from "@/shared/components/tiptap/tiptap";

export type ADddNewsRequestProps = Omit<
  NewsEntity,
  "image" | "id" | "createdAt"
> & { image: File | null };

export type AddNewsStateProps = {
  data: ADddNewsRequestProps;
  setData: Dispatch<SetStateAction<ADddNewsRequestProps>>;
};

function AddNewsPage() {
  const { mutateAsync, isPending } = useAddNews();

  const [data, setData] = useState<ADddNewsRequestProps>({
    title: "",
    image: null,
    description: "",
  });

  const handleAddNews = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", data.title!);
      formData.append("description", data.description!);
      formData.append("image", data.image as File);

      const response = await mutateAsync({ data: formData });
      toast.success(response.message);
    } catch (error) {
      handleFormError(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 main">
      <form
        onSubmit={handleAddNews}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full "
      >
        <div className="bg-white rounded-card flex flex-col flex-1 col-span-2 py-4">
          <div className="w-full border-b border-b-LT-GRAY-100">
            <input
              type="text"
              placeholder="Título da notícia"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="px-6 py-3 placeholder:text-xl text-xl placeholder:font-semibold font-semibold w-full outline-none"
            />
          </div>
          <Tiptap data={data} setData={setData} />
        </div>

        <div className="lg:grid grid-cols-1 flex flex-col-reverse gap-6">
          <div className="bg-white rounded-card py-4 flex flex-col">
            <span className="text-xl font-semibold px-4 pb-4">Publicar</span>
            <hr className="w-full text-LT-GRAY-200" />

            <div className="lg:flex-1 flex flex-col p-4 gap-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <File />
                  <header>
                    <span>Status:</span>
                    <span className="font-semibold">Rascunho</span>
                  </header>
                </div>
                <Button className="!bg-transparent !text-LT-RED-200">
                  Editar
                </Button>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Eye />
                  <header>
                    <span>Visibilidade:</span>
                    <span className="font-semibold">Público</span>
                  </header>
                </div>
                <Button className="!bg-transparent !text-LT-RED-200">
                  Editar
                </Button>
              </div>
            </div>

            <hr className="w-full text-LT-GRAY-200 pb-3" />
            <div className="flex items-center py-2 gap-3 justify-end px-4">
              <Button className="!text-LT-GRAY-200" variant="ghost">
                Salvar rascunho
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Publicando..." : "Publicar"}
              </Button>
            </div>
          </div>

          <AddNewsImageInput data={data} setData={setData} />
        </div>
      </form>
    </div>
  );
}

export default AddNewsPage;
