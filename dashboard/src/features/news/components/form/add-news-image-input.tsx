import { Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Button from "@/components/ui/lottary-button";
import { AddNewsStateProps } from "@/pages/protected/news/add-news-page";

export default function AddNewsImageInput({
  data,
  setData,
}: AddNewsStateProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const previewImgURL = URL.createObjectURL(files[0]);
      setPreviewImage(previewImgURL);
      setData({ ...data, image: files[0] as File });
    }
  };
  return (
    <div className="bg-white lg:row-span-3 gap-4 rounded-card p-4 flex flex-col justify-between">
      <span className="font-semibold text-lg underline">Thumbnail</span>
      <label
        htmlFor="select-image-input"
        className="relative  cursor-pointer lg:flex-1 lg:h-auto h-[230px] border border-dashed border-LT-GRAY-200 rounded-card flex items-center justify-center"
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt="imagem de pré-visualização"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Plus />
        )}
        <input
          hidden
          type="file"
          accept="image/*"
          id="select-image-input"
          onChange={handleChangeImage}
        />
      </label>
      <Button type="button" className="self-end bg-zinc-500">
        Selecionar imagem
      </Button>
    </div>
  );
}
