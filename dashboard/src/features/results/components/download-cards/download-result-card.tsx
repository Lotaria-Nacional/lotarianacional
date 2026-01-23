import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ResultEntity } from '../../types';
import { BsDownload } from 'react-icons/bs';
import Button from '@/shared/components/ui/lottary-button';
import { formatDateToNumber } from '@/shared/utils/date-format';
import fezada from '/public/results/background-2/FEZADA.png';
import kazola from '/public/results/background-2/kazola.png';
import aqueceu from '/public/results/background-2/AQUECEU.png';
import eskebra from '/public/results/background-2/eskebra.png';
import { useDownloadResult } from '../../hooks/useDownloadResult';

type Props = {
  result?: ResultEntity;
  name: string;
};

const DownloadResultCard = ({ result, name }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { handleDownload, isDownloading } = useDownloadResult({ ref });

  const resultName: Record<string, string> = {
    fezada,
    aqueceu,
    kazola,
    eskebra,
  };

  const hourBasedOnResultName =
    name === 'fezada' ? '10:00' : name === 'aqueceu' ? '13:00' : name === 'kazola' ? '16:00' : '19:00';

  return (
    <div className="h-full flex flex-col gap-4 w-download-card-feed shrink-0">
      <Button
        variant="yellow"
        disabled={isDownloading}
        onClick={handleDownload}
        className={`flex px-4 py-2 !text-black items-center gap-2 cursor-pointer rounded-lg self-end ${
          isDownloading ? 'opacity-70' : ''
        }`}
      >
        {isDownloading ? 'Baixando...' : 'Baixar'} <BsDownload />
      </Button>

      <div ref={ref} className={cn('relative flex flex-col items-center justify-center w-full h-download-card-feed')}>
        <img src={resultName[name]} alt={name} />

        <header className="absolute bottom-[192px] text-[12px] font-bold space-x-1">
          <span className="text-white gotham-rounded">{formatDateToNumber(result?.createdAt ?? new Date())}</span>
          <span className="text-LT-YELLOW gotham-rounded">{hourBasedOnResultName ?? 'Esperando...'}</span>
        </header>

        <div className="absolute left-[43px] gotham-black flex font-extrabold bottom-[106px] w-[240px] items-center justify-between text-[24px] text-LT-RED-50">
          <span className="py-1 relative   w-[200px] flex items-center justify-center text-center">
            {result?.number_1 ?? ''}
          </span>

          <span className="py-1 w-[182px] relative left-[2px] flex items-center justify-center text-center">
            {result?.number_2 ?? ''}
          </span>

          <span className="py-1 w-[200px] relative left-[6px] flex items-center justify-center text-center">
            {result?.number_3 ?? ''}
          </span>

          <span className="py-1 w-[200px] relative left-[6px] flex items-center justify-center text-center">
            {result?.number_4 ?? ''}
          </span>

          <span className="py-1 w-[200px] relative left-[7px] flex items-center justify-center text-center">
            {result?.number_5 ?? ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DownloadResultCard;
