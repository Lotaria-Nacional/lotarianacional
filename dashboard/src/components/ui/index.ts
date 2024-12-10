import ModalContainer from "./modal"
import InputField from "./form/input-field"
import FormActions from "./form/form-actions"
import FormContainer from "./form/form-container"
import PrimaryButton from "./button/primary-button"
import LinkButton from "./button/link-button"

export const UI = {
  FormActions,
  Link: LinkButton,
  Input: InputField,
  Form: FormContainer,
  Button: PrimaryButton,
  Modal: ModalContainer,
}
