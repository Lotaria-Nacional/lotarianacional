import { Button } from "@/components/ui/button"
import { Editor } from "@tiptap/react"

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null

  return (
    <div className="w-full sticky bg-white z-[20] top-0 py-1 border-t border-b border-zinc-200">
      <div className="flex flex-wrap px-4 items-center gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "bg-RED-200 text-white px-2 h-[35px]"
              : "text-black px-2 h-[35px]"
          }
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "bg-RED-200 text-white px-2 h-[35px]"
              : "text-black px-2 h-[35px]"
          }
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "bg-RED-200 text-white px-2 h-[35px]"
              : "text-black px-2 h-[35px]"
          }
        >
          Strike
        </button>
        <div className="border-l border-r border-zinc-300 flex items-center gap-2">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("Heading1")
                ? "bg-RED-200 text-white px-2 h-[35px]"
                : "text-black px-2 h-[35px]"
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("Heading2")
                ? "bg-RED-200 text-white px-2 h-[35px]"
                : "text-black px-2 h-[35px]"
            }
          >
            H2
          </button>
        </div>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? "bg-RED-200 text-white px-2 h-[35px]"
              : "text-black px-2 h-[35px]"
          }
        >
          BulletList
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? "bg-RED-200 text-white px-2 h-[35px]"
              : "text-black px-2 h-[35px]"
          }
        >
          OrderedList
        </button>
      </div>
    </div>
  )
}

export default Toolbar
