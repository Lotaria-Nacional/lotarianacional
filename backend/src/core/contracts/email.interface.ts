export type Attachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export type BodyProps = {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  IBAN: string;
  email: string;
};

export type EmailProps = {
  to: string;
  from: string;
  body: BodyProps;
  subject: string;
  attachments: Attachment[];
};

export interface EmailSender {
  sendMail(to: string | string[], subject: string, html: string, attachments?: { filename: string; content: Buffer }[]): Promise<void>;
}
