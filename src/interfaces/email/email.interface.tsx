export interface IEmail {
  name: string;
  email: string;
  message: string;
}

export interface MailtrapTransporter {
  service: string;
}
