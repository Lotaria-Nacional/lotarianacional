import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenuBar from "./tiptap-menu-bar";
import ListItem from "@tiptap/extension-list-item";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import React, { SetStateAction, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import OrderedList from "@tiptap/extension-ordered-list";
import { BaseNews } from "@/features/news/types/base-news";
import HardBreak from "@tiptap/extension-hard-break";

export type TipTapProps<T> = {
  data: T;
  setData: React.Dispatch<SetStateAction<T>>;
};

export default function Tiptap<T extends BaseNews>({
  data,
  setData,
}: TipTapProps<T>) {
  const editor = useEditor({
    extensions: [
      ListItem,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
      }),
      OrderedList,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        orderedList: {
          keepMarks: true,
        },
      }),
      HardBreak.extend({
        addKeyboardShortcuts() {
          return {
            Enter: () => this.editor.commands.setHardBreak(),
          };
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "h-[250px] md:h-[500px] overflow-y-auto px-4 lg:py-0 py-3 outline-none",
      },
    },
    autofocus: true,
    editable: true,
    content: data.description,
    onUpdate({ editor }) {
      setData({ ...data, description: editor.getHTML() });
    },
  });

  useEffect(() => {
    if (editor && !editor.isFocused) {
      editor.commands.setContent(data.description || "", false);
    }
  }, [data.description, editor]);

  return (
    <div className="flex flex-col gap-10">
      <TiptapMenuBar editor={editor} />
      <EditorContent content={data.description} editor={editor} />
    </div>
  );
}
