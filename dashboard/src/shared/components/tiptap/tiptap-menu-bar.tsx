import { LuList } from "react-icons/lu";
import { BsListOl } from "react-icons/bs";
import { BsTypeBold } from "react-icons/bs";
import { RxFontItalic } from "react-icons/rx";
import { HiMiniUnderline } from "react-icons/hi2";
import { LuHeading1 } from "react-icons/lu";
import { LuHeading2 } from "react-icons/lu";
import { LuHeading3 } from "react-icons/lu";
import { LuUnlink } from "react-icons/lu";
import { GrTextAlignLeft } from "react-icons/gr";
import { GrTextAlignCenter } from "react-icons/gr";
import { Editor } from "node_modules/@tiptap/core/dist/Editor";
import { useCallback } from "react";
import TiptapToolbarButton from "./tiptap-toolbar-button";

type Props = {
  editor: Editor | null;
};

export default function TiptapMenuBar({ editor }: Props) {
  if (!editor) return;

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link")?.href || "";
    const url = window.prompt("Digite a URL:", previousUrl);

    if (url === null) {
      // Usuário cancelou a ação
      return;
    }

    if (url.trim() === "") {
      // Se a URL estiver vazia, remover o link
      editor.chain().focus().unsetLink().run();
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      // Se não for um link válido, adiciona "https://"
      alert("URL inválida. Certifique-se de incluir 'http://' ou 'https://'.");
      return;
    }

    // Se já houver um link ativo na seleção, remove primeiro (toggle behavior)
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    }

    // Adiciona o novo link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="w-full flex-wrap lg:flex-nowrap h-[40px] px-4 flex items-center gap-2 border-b border-b-LT-GRAY-100">
      <div className="flex items-center gap-2 md:gap-3 w-fit pr-2 border-r border-r-LT-GRAY-100">
        <TiptapToolbarButton
          icon={BsTypeBold}
          isActive={editor.isActive("bold")}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />

        <TiptapToolbarButton
          icon={RxFontItalic}
          isActive={editor.isActive("italic")}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />

        <TiptapToolbarButton
          icon={HiMiniUnderline}
          isActive={editor.isActive("underline")}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
      </div>

      <div className="flex items-center gap-3 w-fit pr-2 border-r border-r-LT-GRAY-100">
        <TiptapToolbarButton
          icon={LuHeading1}
          isActive={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        />

        <TiptapToolbarButton
          icon={LuHeading2}
          isActive={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />

        <TiptapToolbarButton
          icon={LuHeading3}
          isActive={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        />
      </div>

      <div className="flex items-center gap-3 w-fit pr-2 border-r border-r-LT-GRAY-100">
        <TiptapToolbarButton
          icon={LuList}
          isActive={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />

        <TiptapToolbarButton
          icon={BsListOl}
          isActive={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
      </div>

      <div className="flex items-center gap-3 w-fit pr-2 border-r border-r-LT-GRAY-100">
        <TiptapToolbarButton
          icon={GrTextAlignLeft}
          isActive={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        />

        <TiptapToolbarButton
          icon={GrTextAlignCenter}
          isActive={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        />
      </div>

      <div className="flex items-center gap-3 w-fit pr-2 border-r border-r-LT-GRAY-100">
        <TiptapToolbarButton
          icon={LuUnlink}
          isActive={editor.isActive("link")}
          onClick={setLink}
        />
      </div>
    </div>
  );
}
