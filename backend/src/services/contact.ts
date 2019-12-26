import nodemailer from "nodemailer";

import { auth } from "../config/auth";
import { Contact } from "../models/contact";

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

  // TODO: Add impress to the mail body (see #33).

  const plainBody = `
    Vielen Dank für Deine Nachricht! Ich werde mich zeitnah bei Dir melden.

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
    <p>Vielen Dank für Deine Nachricht! Ich werde mich zeitnah bei Dir melden.</p>
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
    cc: data.sendCopy ? data.email : "",
    subject: "Anfrage über www.its-boehm.de",
    text: plainBody,
    html: htmlBody
  });
};
