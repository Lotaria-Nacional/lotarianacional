import { Attachment } from "../../Domain/services/email.service.interface"

export type RecruitmentInputDTO = {
  firstName: string
  lastName: string
  phone: string
  IBAN: string
  gender: string
  BI: Attachment
  photo: Attachment
  curriculum: Attachment
  residenceProof: Attachment
}
