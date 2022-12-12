/* import { google } from 'googleapis'; */
import nodemailer from 'nodemailer';

import { NextApiRequest, NextApiResponse } from 'next';
import type { IEmail, MailtrapTransporter } from 'src/interfaces';

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

      const GMAIL_ID = process.env.GMAIL_ID;
      const GMAIL_TO = process.env.GMAIL_TO;
      const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: GMAIL_ID,
            pass: GMAIL_PASSWORD,
          },
        } as MailtrapTransporter);

        const mailOptions = {
          from: GMAIL_ID,
          to: GMAIL_TO,
          subject: `${name} - contato pelo portfolio`,
          text: message,
          html: `<h1>${name} diz: </h1>
          <h2>${message}</h2>
          <h3>Entre em contato pelo Email: ${email}</h3>`,
        };

        await transporter.sendMail({
          ...mailOptions,
        });

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
