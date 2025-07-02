import { cva, VariantProps } from "class-variance-authority"

export const lotteryButtonStyle = cva(
  "rounded-full cursor-pointer ease-in-out duration-200 transition-all",
  {
    variants: {
      intent: {
        primary: [
          "size-8 p-2 border",
          "bg-white text-zinc-500 hover:bg-zinc-100 border-zinc-300",
        ],
        secondary: [
          "py-1 px-5",
          "bg-yellow-400 hover:bg-yellow-500 text-black",
        ],
      },
    },
  }
)

export type LotteryButton = VariantProps<typeof lotteryButtonStyle>
