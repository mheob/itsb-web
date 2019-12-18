import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import Modal from "../../shared/Modal";

interface ResponseModalProps {
  show: boolean;
  onCancel: () => void;
  type: "SUCCESS" | "ERROR";
  mailData: {
    name: string;
    email: string;
    phone: string;
    privacy: string;
    message: string;
  };
}

const ResponseModal: React.FC<ResponseModalProps> = props => {
  return (
    <Modal
      contentClass="response-modal"
      show={props.show}
      onCancel={props.onCancel}
      header={props.type === "SUCCESS" ? "Danke für Deine Nachricht :)" : "Sorry, da lief etwas schief :("}
    >
      {props.type === "SUCCESS" ? (
        <>
          <p>
            Deine Daten wurden versandt. Um sicherzugehen, dass alles korrekt war erhältst Du ebenfalls eine Kopie der
            Nachricht an Deine E-Mail-Adresse. Solltest Du keine Nachricht erhalten oder ich mich nicht innerhalb der
            nächsten 48 Stunden zurück melden, gib mir bitte Bescheid. E-Mails könnten immer mal durch einen Spam-Schutz
            oder dergleichen verloren gehen.
          </p>
          <p>Du kannst mich auch zusätzlich so erreichen:</p>
          <ul>
            <li>
              <a href="tel:+491608206654">
                <FontAwesomeIcon icon={faPhoneAlt} /> +49 160 8206654
              </a>
            </li>
            <li>
              <a href="mailto:ab@its-boehm.de">
                <FontAwesomeIcon icon={faEnvelope} /> ab@its-boehm.de
              </a>
            </li>
            <li>
              <a href="https://discord.me/itsb">
                <FontAwesomeIcon icon={faDiscord} /> discord.me/itsb
              </a>
            </li>
          </ul>
          <h3>Versandte Daten:</h3>
          <h4>Zur Person:</h4>
          <ul>
            <li>Name: {props.mailData.name}</li>
            <li>E-Mail: {props.mailData.email}</li>
            <li>Telefon: {props.mailData.phone}</li>
            <li>Datenschutz: {props.mailData.privacy}</li>
          </ul>
          <h4>Nachricht:</h4>
          <p>{props.mailData.message}</p>
        </>
      ) : (
        <>
          <p>Leider ist ein temporärer Fehler aufgetreten und Deine Nachricht konnte nicht gesendet werden.</p>
          <p>Du kannst mich auch so erreichen:</p>
          <ul>
            <li>
              <a href="tel:+491608206654">
                <FontAwesomeIcon icon={faPhoneAlt} /> +49 160 8206654
              </a>
            </li>
            <li>
              <a href="mailto:ab@its-boehm.de">
                <FontAwesomeIcon icon={faEnvelope} /> ab@its-boehm.de
              </a>
            </li>
            <li>
              <a href="https://discord.me/itsb">
                <FontAwesomeIcon icon={faDiscord} /> discord.me/itsb
              </a>
            </li>
          </ul>
          <p>
            Bitte entschuldige diesen Umstand!
            <br />
            Zudem wäre es nett, wenn du mir diesen Fehler hier mitteilen würdest, damit ich Gegenmaßnahmen ergreifen
            kann. Vielen Dank!
          </p>
        </>
      )}
    </Modal>
  );
};

export default ResponseModal;
