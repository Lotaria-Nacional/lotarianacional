type Props = { children: React.ReactNode }

const FormActions = ({ children }: Props) => {
  return (
    <div className="w-full flex justify-end items-center mt-4 gap-2">
      {children}
    </div>
  )
}

export default FormActions
