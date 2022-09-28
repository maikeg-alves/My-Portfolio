import type { IEmail, MailtrapTransporter } from 'interfaces';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sandmail(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      try {
        const { name, email, message }: IEmail = req.body;

        const { OAuth2 } = google.auth;

        const GMAIL_CLIENT_ID = process.env.GMAIL_CLIENT_ID;
        const GMAIL_CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
        const GMAIL_REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

        const GMAIL_ID = process.env.GMAIL_ID;
        const GMAIL_TO = process.env.GMAIL_TO;

        const OAUTH_PLAYGROUND =
          'https://developers.google.com/oauthplayground';

        const oauth2Client = new OAuth2(
          GMAIL_CLIENT_ID,
          GMAIL_CLIENT_SECRET,
          OAUTH_PLAYGROUND,
        );

        oauth2Client.setCredentials({
          refresh_token: GMAIL_REFRESH_TOKEN,
        });

        google.options({ auth: oauth2Client }); // Apply the settings globally

        const accessToken = new Promise((resolve) => {
          oauth2Client.getAccessToken((err, token) => {
            if (err) res.status(402).json(err.message); // Handling
            else resolve(token);
          });
        });

        const transporter = SMTPTransport.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: GMAIL_ID,
            clientId: GMAIL_CLIENT_ID,
            clientSecret: GMAIL_CLIENT_SECRET,
            refreshToken: GMAIL_REFRESH_TOKEN,
            accessToken,
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

        await transporter.sendMail(mailOptions, (err, info) => {
          if (err) res.json(err.message);
          else res.json(info);
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
