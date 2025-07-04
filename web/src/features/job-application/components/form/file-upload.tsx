import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { SlCloudUpload } from "react-icons/sl";
import { Input } from "@/shared/components/ui/input";
import { cn } from "@/lib/utils";
import { useId } from "react";

type Props = {
  field: any; // usar FieldPath ou ControllerRenderProps se quiser mais tipagem
  label: string;
  name: string;
};

export default function FileUploadField({ field, label, name }: Props) {
  const inputId = useId();

  return (
    <FormItem className="w-full">
      <FormLabel className="text-center text-sm">{label}</FormLabel>
      <FormControl>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <label
            htmlFor={inputId}
            className={cn(
              "cursor-pointer w-full p-3 flex flex-col items-center justify-center border border-dashed rounded-[8px] h-[120px] transition-all duration-200 ease-in-out",
              "peer-disabled:opacity-50",
              field.value
                ? "border-LT_RED-300"
                : "border-zinc-300 hover:border-LT_RED-300"
            )}
          >
            {field.value ? (
              <HiOutlineDocumentCheck size={24} className="text-LT_RED-300" />
            ) : (
              <SlCloudUpload size={24} className="text-zinc-400" />
            )}
            <p
              className={cn(
                "text-xs text-center mt-2",
                field.value ? "text-LT_RED-300" : "text-zinc-400"
              )}
            >
              {field.value
                ? "Documento selecionado: " + field.value.name
                : "Carregar o documento"}
            </p>
          </label>

          <Input
            id={inputId}
            type="file"
            name={name}
            onChange={(e) => field.onChange(e.target.files?.[0])}
            onBlur={field.onBlur}
            ref={field.ref}
            disabled={field.disabled}
            className="hidden"
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
