import { InputHTMLAttributes } from "react"

type Props = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ({ label, ...rest }: Props) => {
  return (
    <div className="flex text-GRAY-200 flex-col gap-2 w-full lg:w-auto">
      <label className="w-full lg:w-auto" htmlFor="name">
        {label}
      </label>
      <input
        id="name"
        {...rest}
        className="border border-GRAY-100 outline-none px-3 w-full lg:w-auto py-2 rounded-lg"
      />
    </div>
  )
}

export default InputField
