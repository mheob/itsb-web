import { FC, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import Modal from '../../shared/Modal';

const Actions: FC = () => {
  const [showModalState, setShowModalState] = useState(false);

  const openModalHandler = () => {
    setShowModalState(true);
  };

  const closeModalHandler = () => {
    setShowModalState(false);
  };

  return (
    <section className="actions">
      <button className="btn btn-primary-outline" onClick={openModalHandler}>
        Download vCard
      </button>
      <HashLink to="/#contact" className="btn btn-primary">
        Beauftrage mich
      </HashLink>
      <Modal show={showModalState} onCancel={closeModalHandler} header="Kontaktdaten herunterladen?">
        <p>Möchtest Du dir die vCard von mir abspeichern?</p>
        <p>
          Du kannst sie Dir direkt in deinem Mail-Programm, wie z.B. Outlook oder Thunderbird abspeichern.
          <br />
          Dann hast Du meine Kontaktdaten immer griffbereit.
        </p>
        <p>
          <a href="/downloads/IT Service Böhm -- Alexander Böhm.vcf" className="btn btn-primary">
            vCard jetzt herunterladen
          </a>
        </p>
      </Modal>
    </section>
  );
};

export default Actions;
