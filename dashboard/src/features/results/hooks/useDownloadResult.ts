import { useState } from 'react';
import { toPng } from 'html-to-image';

type ReturnProps = {
  isDownloading: boolean;
  handleDownload: () => void;
};

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
};

export function useDownloadResult({ ref }: Props): ReturnProps {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!ref.current) return null;
    setIsDownloading(true);
    try {
      const img = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 20,
      });
      const aTag = document.createElement('a');
      aTag.download = 'resultado.png';
      aTag.href = img;
      aTag.click();
    } catch (error) {
      console.log('Erro ao baixar o resultado.');
    } finally {
      setIsDownloading(false);
    }
  };
  return {
    handleDownload,
    isDownloading,
  };
}
