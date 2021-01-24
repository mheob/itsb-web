import { FC } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../shared/Modal';

interface PrivacyModalProps {
  show: boolean;
  onCancel: () => void;
}

const PrivacyModal: FC<PrivacyModalProps> = (props) => {
  return (
    <Modal show={props.show} onCancel={props.onCancel} header="Bestimmungen zur Nutzung Deiner Daten">
      <p>
        Wenn Du die im Kontaktformular eingegebenen Daten durch Klick auf den Button "In Kontakt treten" übersendest,
        erklärst Du dich damit einverstanden, dass ich Deine Angaben für die Beantwortung Deiner Anfrage bzw.
        Kontaktaufnahme verwende.
      </p>
      <p>
        Eine Weitergabe an Dritte findet grundsätzlich nicht statt, es sei denn geltende Datenschutzvorschriften
        rechtfertigen eine Übertragung oder ich dazu gesetzlich verpflichtet bin.
      </p>
      <p>
        Du kannst Deine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Im Falle des Widerrufs
        werden Deine Daten umgehend gelöscht. Deine Daten werden ansonsten ebenfalls gelöscht, wenn ich Deine Anfrage
        bearbeitet habe oder der Zweck der Speicherung entfallen ist. Du kannst Dich jederzeit über die Deiner Person
        gespeicherten Daten informieren. Weitere Informationen zum Datenschutz finden Du auch in der{' '}
        <Link to="/datenschutz">Datenschutzerklärung</Link> dieser Webseite.
      </p>
    </Modal>
  );
};

export default PrivacyModal;
