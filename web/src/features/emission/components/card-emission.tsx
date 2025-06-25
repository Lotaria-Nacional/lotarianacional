import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useModal } from "@/app/context/modal-provider";

const CardEmission = () => {
  const { closeModal, videoURL } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      onClick={closeModal}
      className="fixed z-[9999999999] inset-0 w-full h-full flex items-center justify-center bg-black/70"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[85%] h-[250px] lg:w-[700px] lg:h-[400px] rounded-lg p-6 shadow-lg flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="absolute hover:scale-[0.97] transition-all duration-200 ease bg-white size-10 rounded-full -right-6 -top-6 z-[10] flex items-center justify-center text-zinc-400"
        >
          <IoClose size={22} />
        </button>
        {isLoading && (
          <div className="absolute z-[2000] inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {videoURL ? (
          <iframe
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            src={videoURL + "?rel=0&autoplay=1&playsinline=1"}
            className="absolute inset-0 w-full h-full rounded-lg"
          ></iframe>
        ) : (
          <span>URL de vídeo inválida.</span>
        )}
      </div>
    </div>
  );
};

export default CardEmission;
