import nodemailer, { SentMessageInfo } from "nodemailer";

import { auth } from "../config/auth";
import { Contact } from "../models/contact";
import { HttpError } from "../models/http-error";

export const sendMail = async (data: Contact) => {
  const transporter = nodemailer.createTransport(
    {
      host: auth.host,
      auth: {
        user: auth.user,
        pass: auth.pass
      }
    },
    {
      from: '"Webmail über IT Service Böhm" <ab@its-boehm.de>'
    }
  );

  const plainBody = `
    Du hast eine neue Anfrage erhalten!

    Kontaktdaten:
    -------------
    Name: ${data.name}
    E-Mail: ${data.email}
    Telefon: ${data.phone}
    Datenschutz: ${data.privacy}

    Nachricht:
    ----------
    ${data.message}
  `;

  const htmlBody = `
    <p>Du hast eine neue Anfrage erhalten!</p>
    <h3>Kontaktdaten:</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>E-Mail: ${data.email}</li>
      <li>Telefon: ${data.phone}</li>
      <li>Datenschutz: ${data.privacy}</li>
    </ul>
    <h3>Nachricht:</h3>
    <p>${data.message}</p>
  `;

  await transporter.sendMail({
    to: "ab@its-boehm.de",
    cc: data.email,
    subject: "Anfrage über www.its-boehm.de",
    text: plainBody,
    html: htmlBody
  });
};
