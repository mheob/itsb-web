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
      from: '"Alex vom IT Service Böhm" <ab@its-boehm.de>'
    }
  );

  const plainBody = `
    Hallo ${data.name}!

    Vielen Dank für Deine Nachricht! Ich werde mich zeitnah bei Dir melden.

    Die folgenden Daten hast Du mir übermittelt:

    > Kontaktdaten:
    > -------------
    > Name: ${data.name}
    > E-Mail: ${data.email}
    > Telefon: ${data.phone}
    > Datenschutz: ${data.privacy}
    > 
    > Nachricht:
    > ----------
    > ${data.message}

    Ich werde mich zeitnah bei Dir melden.

    Freundliche Grüße aus Neuwied,

    Alexander Böhm

    ab@its-boehm.de • +49 160 8206654

    IT Service Böhm
    Theodor-Heuss-Straße 1 – H2
    56564 Neuwied
    Inhaber: Alexander Böhm
    www.its-boehm.de
  `;

  const htmlBody = `
    <p>Hallo ${data.name}!</p>
    <p>Vielen Dank für Deine Nachricht!</p>
    <p>Die folgenden Daten hast Du mir übermittelt:</p>
    <blockquote>
      <h3>Kontaktdaten:</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>E-Mail: ${data.email}</li>
        <li>Telefon: ${data.phone}</li>
        <li>Datenschutz: ${data.privacy}</li>
      </ul>
      <h3>Nachricht:</h3>
      <p>${data.message}</p>
    </blockquote>
    <p>Ich werde mich zeitnah bei Dir melden.</p>
    <p>Freundliche Grüße aus Neuwied,</p>
    <p><b><span style='font-size:12.0pt;font-family:"Lucida Handwriting"'>Alexander Böhm</span></b></p>
    <p><a href="mailto:ab@its-boehm.de">ab@its-boehm.de</a> • <a href="tel:+491608206654">+49 160 8206654</a></p>
    <p style='font-size:9.0pt'>
      <b>IT Service Böhm</b><br>
      Theodor-Heuss-Straße 1 – H2<br>
      56564 Neuwied<br>
      Inhaber: Alexander Böhm
      <a href="https://www.its-boehm.de">www.its-boehm.de</a>
    </p>
  `;

  await transporter.sendMail({
    to: "ab@its-boehm.de",
    cc: data.sendCopy ? data.email : "",
    subject: "Anfrage über www.its-boehm.de",
    text: plainBody,
    html: htmlBody
  });
};
