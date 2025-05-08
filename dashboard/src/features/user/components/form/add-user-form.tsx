import Button from "@/components/ui/lottary-button";
import { useAddUser } from "../../hooks/mutation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AddUserRequest } from "../../api";
import { handleFormError } from "@/lib/error";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export default function AddUserForm() {
  const { mutateAsync, isPending } = useAddUser();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [_selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [data, setUserData] = useState<AddUserRequest>({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
    profilePic: null,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
      setSelectedImage(file);
      setUserData((prevData) => ({
        ...prevData,
        profilePic: file,
      }));
    }
  };

  const handleAddUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("role", data.role);
      formData.append("email", data.email);
      formData.append("password", data.password);
      if (data.profilePic) {
        formData.append("image", data.profilePic);
      }

      const response = await mutateAsync(formData);
      toast.success(response.message);
    } catch (error) {
      handleFormError(error);
    }
  };

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  return (
    <form onSubmit={handleAddUser} className="flex flex-col gap-4">
      <fieldset className="flex lg:flex-row flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Nome</label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={data.firstName}
            onChange={handleInputChange}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>

        <div className="flex w-full flex-col gap-1">
          <label className="font-semibold">Sobrenome</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={data.lastName}
            onChange={handleInputChange}
            className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
          />
        </div>
      </fieldset>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@lotarianacional.co.ao"
          value={data.email}
          onChange={handleInputChange}
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
      </div>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold">Função</label>
        <select
          name="role"
          value={data.role}
          onChange={handleInputChange}
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-[8px] outline-none"
        >
          <option value="">Selecione...</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="studio">Studio</option>
        </select>
      </div>

      <div className="flex w-full flex-col gap-1">
        <label className="font-semibold">Foto de perfil</label>
        <input
          type="file"
          onChange={handleSelectImage}
          className="border border-LT-GRAY-200 rounded-[8px] px-4 py-2 outline-none"
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
            className="w-20 h-20 mt-2 rounded-full"
          />
        )}
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="password">Palavra-passe</label>
        <div className="px-4 py-2 rounded-lg border border-LT-GRAY-200 w-full flex items-center justify-between">
          <input
            id="password"
            name="password"
            placeholder="***********"
            className="outline-none w-full"
            type={isPasswordVisible ? "text" : "password"}
            value={data.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="text-LT-GRAY-200 pl-2 cursor-pointer"
          >
            {isPasswordVisible ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>

      <Button className="w-full mt-4" disabled={isPending}>
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
