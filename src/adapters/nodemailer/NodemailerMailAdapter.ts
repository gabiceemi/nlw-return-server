import { MailAdapter, SendMailData } from "../IMailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "44430b7e77eb81",
    pass: "fd5234aab67b14"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel Medeiros <gabiceemi@gmail.com>',
      subject,
      html: body
    });
  }

}