import { cva } from "class-variance-authority";

export const inputVariants = cva("w-full h-[35px] text-sm rounded-[4px] border px-2", {
    variants:{
        intent:{
            primary:["border-zinc-300","outline-LT_RED-300"]
        }
    }
})

