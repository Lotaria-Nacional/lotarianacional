type Props = {
  children: React.ReactNode
  labelName:string
} & React.HTMLAttributes<HTMLDivElement>

const InputContainer = ({children,labelName, ...rest}: Props) => {
  return (
    <div {...rest} className="flex flex-col w-full gap-2">
      <label htmlFor={labelName} className="font-semibold">
        {labelName}*
      </label>
      {children}
    </div>
  )
}

export default InputContainer
