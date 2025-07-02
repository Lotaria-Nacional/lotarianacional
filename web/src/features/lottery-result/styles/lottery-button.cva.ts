// BUTTON_STYLE
// "border border-zinc-300 bg-white size-8 p-2 text-zinc-500 rounded-full cursor-pointer hover:bg-zinc-100 transition-all duration-200 ease-in-out";

// GO_BACK_BUTTON_STYLE
// "bg-yellow-400 py-1 px-5 text-black rounded-full cursor-pointer hover:bg-yellow-500 transition-all duration-200 ease-in-out";

import { cva, VariantProps } from "class-variance-authority";


export const lotteryButtonStyle = cva(
    
    {
        variants:{
            intent:{
                primary:[
                    "size-8 p-2 border rounded-full ",
                    "transition-all duration-200 ease-in-out cursor-pointer",
                    "bg-white text-zinc-500 hover:bg-zinc-100 border-zinc-300",
                ],
                secondary:[
                    "py-1 px-5 rounded-full",
                    "bg-yellow-400 hover:bg-yellow-500 text-black",
                    "cursor-pointer transition-all duration-200 ease-in-out"
                ],
            }
        }
    }
)

export type LotteryButton = VariantProps<typeof lotteryButtonStyle>