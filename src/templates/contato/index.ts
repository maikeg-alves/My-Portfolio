import nodemailer from 'nodemailer';

export function ContactMailOptions(
  name: string,
  email: string,
  message: string,
): nodemailer.SendMailOptions {
  return {
    from: process.env.GMAIL_ID,
    to: process.env.GMAIL_TO, // E-mail de destino para o contato (pode ser diferente do e-mail do remetente)
    subject: `${name} - contato pelo portfolio`,
    text: message,
    html: `<h1>${name} diz: </h1>
        <h2>${message}</h2>
        <h3>Entre em contato pelo Email: ${email}</h3>`,
  };
}
