import { Editor } from "@tiptap/react"
import { ButtonHTMLAttributes, PropsWithChildren } from "react"

type Props = {
  editor: Editor
  btnName: string
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>

export default function TiptapMenuButton({
  editor,
  btnName,
  children,
  ...props
}: Props) {
  return (
    <button
      className={`${
        editor.isActive(btnName)
          ? "bg-LT-RED-100 text-white"
          : "bg-white text-black"
      } px-2 py-2 rounded-button`}
      {...props}
    >
      {children}
    </button>
  )
}
