import Toolbar from "./toolbar"
import StarterKit from "@tiptap/starter-kit"
import { EditorContent, useEditor } from "@tiptap/react"
import { Blockquote } from "@tiptap/extension-blockquote"
import { BulletList } from "@tiptap/extension-bullet-list"
import { OrderedList } from "@tiptap/extension-ordered-list"
import { ListItem } from "@tiptap/extension-list-item"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      ListItem,
      BulletList.configure({
        keepMarks: true,
        itemTypeName: "listItem",
        keepAttributes: true,
      }),
      OrderedList,
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "font-bold text-xl my-4",
          },
          levels: [1],
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: "h-full w-full border-none outline-none",
      },
    },
  })
  return (
    <div className="flex flex-col w-full h-full gap-4 overflow-auto">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="w-full h-[400px] px-4 outline-none border-none"
      />
    </div>
  )
}

export default Tiptap
