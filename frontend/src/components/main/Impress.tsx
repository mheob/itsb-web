import React from "react";

import Seo from "../shared/Seo";
import Footer from "../shared/Footer";

const Impress: React.FC = () => {
  return (
    <>
      <Seo
        title="Impressum >> IT Service Böhm >> Dein Partner rund ums Web aus Neuwied"
        description="Alexander Böhm aus Neuwied stellt sich und seine Arbeit rund um Web Design, SEO und Web Development vor."
        url="https://www.its-boehm.de/impressum"
        og={{ image: "https://www.its-boehm.de/images/itsb-boehm-alexander-bg.jpg", type: "website" }}
        noIndex
      />
      {
        // TODO #27: Load some data from a database.
      }
      <section className="impress">
        <h1>Impressum</h1>
        <div className="row">
          <div className="column">
            <address>
              <strong>IT Service Böhm</strong>
              <br />
              Alexander Böhm
              <br />
              Theodor-Heuss-Straße 1 - H2
              <br />
              56564 Neuwied
              <br />
              <br />
              Telefon: +49 160 8206654
              <br />
              E-Mail: <a href="mailto:info@its-boehm.de">info@its-boehm.de</a>
            </address>
          </div>
          <div className="column">
            <strong>Bildrechte:</strong>
            <br />
            www.pexels.com
            <br />
            www.pixabay.com
            <br />
            www.unsplash.com
          </div>
        </div>
      </section>
      <section className="disclaimer">
        <h2>Disclaimer – rechtliche Hinweise</h2>
        <h4>§ 1 Warnhinweis zu Inhalten</h4>
        <p>
          Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der
          Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten
          kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete
          Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein
          durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
          Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
        </p>
        <h4>§ 2 Externe Links</h4>
        <p>
          Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der
          Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die
          fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine
          Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und
          auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter
          die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links
          ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von
          Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
        </p>
        <h4>§ 3 Urheber- und Leistungsschutzrechte</h4>
        <p>
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht.
          Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen
          schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für
          Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in
          Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche
          gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist
          nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen,
          privaten und nicht kommerziellen Gebrauch ist erlaubt.
        </p>
        <p>Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
        <h4>§ 4 Besondere Nutzungsbedingungen</h4>
        <p>
          Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen,
          wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall
          die besonderen Nutzungsbedingungen.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Impress;
