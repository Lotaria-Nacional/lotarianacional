import { ChangeEvent, useRef, useState } from "react";
import Button from "@/shared/components/ui/lottary-button";
import { UpdateNewsStateProps } from "@/pages/protected/news/update-news-page";

export default function UpdateNewsImageInput({
  data,
  setData,
}: UpdateNewsStateProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const previewImgURL = URL.createObjectURL(files[0]);
      setPreviewImage(previewImgURL);
      setData({ ...data, image: files[0] as File });
    }
  };

  const handleInputRefClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="bg-white lg:row-span-3 gap-4 rounded-card p-4 flex flex-col justify-between">
      <span className="font-semibold text-lg underline">Thumbnail</span>
      <label
        htmlFor="select-image-input"
        className="relative  cursor-pointer lg:flex-1 lg:h-auto h-[230px] border border-dashed border-LT-GRAY-200 rounded-card flex items-center justify-center"
      >
        <img
          src={previewImage || (data.image as string)}
          alt="Imagem de pré-visualização"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <input
          hidden
          type="file"
          ref={inputRef}
          accept="image/*"
          id="select-image-input"
          onChange={handleChangeImage}
        />
      </label>
      <Button
        type="button"
        onClick={handleInputRefClick}
        className="self-end bg-zinc-500"
      >
        Selecionar imagem
      </Button>
    </div>
  );
}
