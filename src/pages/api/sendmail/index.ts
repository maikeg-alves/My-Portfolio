import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

import { ContactMailOptions } from '@templates';
import { IEmail, MailtrapTransporter } from '@interfaces';

export async function sendMail(
  mailOptions: nodemailer.SendMailOptions,
): Promise<void> {
  const GMAIL_ID = process.env.GMAIL_ID;
  const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_ID,
        pass: GMAIL_PASSWORD,
      },
    } as MailtrapTransporter);

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Erro ao enviar e-mail: ${error}`);
  }
}

// envio de email de contato

export default async function sandmail(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  switch (req.method) {
    case 'POST':
      const { name, email, message }: IEmail = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Bad request' });
      }
      try {
        await sendMail(ContactMailOptions(name, email, message));
        res.status(200).json({ message: 'Email enviado com sucesso!' });
      } catch (error) {
        res.status(505).json(`${error} - Erro ao enviar email`);
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).json('Method not allowed');
      break;
  }
}
