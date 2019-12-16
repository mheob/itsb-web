import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

import { FormDto } from './form.dto';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  public sendMail(data: FormDto) {
    const plainBody = `
      Du hast eine neue Anfrage erhalten!

      Kontaktdaten:
      -------------
      Name: ${data.name}
      E-Mail: ${data.email}
      Telefon: ${data.phone}
      Datenschutz akzeptiert: ${data.privacy}

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
      <li>Datenschutz akzeptiert: ${data.privacy}</li>
      </ul>
      <h3>Nachricht:</h3>
      <p>${data.message}</p>
    `;

    this.mailerService.sendMail({
      to: 'ab@its-boehm.de',
      cc: [data.email],
      subject: 'Anfrage über www.its-boehm.de',
      text: plainBody,
      html: htmlBody,
    });
  }
}
