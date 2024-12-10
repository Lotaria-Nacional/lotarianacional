import { UI } from "../../../components/ui"

const SettingsPage = () => {
  return (
    <main className="w-full flex items-center justify-center">
      <UI.Form className="w-[552px] bg-white rounded-[20px] p-10 lg:p-24 gap-8">
        <UI.Input label="Nome do usuário" type="text" defaultValue="Sebastião António"/>
        <UI.Input label="Email" type="email" defaultValue="sebastiaoantonio@gmail.com"/>
        <UI.Input label="Palavra-passe" type="password" defaultValue="lotarianacional"/>
        <UI.Button btnType="danger">Salvar alterações</UI.Button>
      </UI.Form>
    </main>
  )
}

export default SettingsPage
