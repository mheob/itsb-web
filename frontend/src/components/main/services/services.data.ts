import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faPaintBrush, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { ServiceModel } from "./service.model";

// TODO #27: Load some data from a database.
export const serviceData: ServiceModel[] = [
  {
    icon: faPaintBrush,
    header: "Web Design",
    text:
      "Die automatisierte Anpassung an alle Bildschirmgrößen der mobilen Empfangsgeräte ist wichtig denn je. Darauf und auf die Benutzerfahrung im allgemeinen liegt bei jedem meiner Projekte der Fokus."
  },
  {
    icon: faChartLine,
    header: "Search Engine Optimization",
    text:
      "Suchmaschinenoptimierung (SEO), bezeichnet die Maßnahmen, die dazu dienen, die Sichtbarkeit einer Website für Benutzer einer Suchmaschine zu erhöhen. Ein sehr wichtiger Aspekt."
  },
  {
    icon: faLaptopCode,
    header: "Web Development",
    text:
      "Die Entwicklung von Neuem ist für mich ein großer Antreiber. Sonderlösungen für das Web, gerade im Stile von Progressive Web Apps (PWA), gehören heute zum guten Ton in der Darstellung und Interaktion."
  },
  {
    icon: faLifeRing,
    header: "Help & Support",
    text:
      "Nach Projektabschluss lasse ich Dich nicht alleine. Bei Fragen und Problemen stehe ich gerne zur Seite. Bei der Nutzung über meinen Hostingpartner übernehme ich Updates, Sicherheitspatches und ähnliches."
  }
];
