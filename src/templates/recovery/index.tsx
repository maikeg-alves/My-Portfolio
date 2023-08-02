import nodemailer from 'nodemailer';

export function RecoveryMailOptions(
  email: string,
  recoveryCode: number,
): nodemailer.SendMailOptions {
  return {
    from: process.env.GMAIL_ID,
    to: email, // E-mail de destino para recuperação de senha (enviar para o e-mail do usuário)
    subject: 'Recuperação de Senha',
    text: `Seu código de recuperação de senha é: ${recoveryCode}`,
    html: `<h1>Recuperação de Senha</h1>
      <p>Seu código de recuperação de senha é: <strong>${recoveryCode}</strong></p>`,
  };
}
