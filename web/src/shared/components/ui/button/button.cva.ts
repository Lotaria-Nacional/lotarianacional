import { cva, VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  [
    "h-[34px] w-fit",
    "flex items-center gap-3 justify-center rounded-[6px]",
    "cursor-pointer disabled:opacity-70 ease-in-out duration-200 transition-all hover:opacity-75",
  ],
  {
    variants: {
      intent: {
        ghost: "bg-transparent text-black border border-zinc-300",
        primary: "bg-LT_RED-300 text-white",
        secondary:
          "bg-transparent border hover:opacity-70 border-LT_RED-300 text-LT_RED-300",
        terciary: "bg-yellow-400 text-black",
        link: "text-LT_RED-300",
      },

      size: {
        sm: "text-xs py-1 px-2",
        md: "text-[12px] leading-4 py-2 px-4",
        icon: "size-12",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "md",
    },

    compoundVariants: [
      {
        intent: "primary",
        size: "md",
      },
      {
        intent: "secondary",
        size: "md",
      },
      {
        intent: "terciary",
        size: "md",
      },
    ],
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
buttonVariants({})
