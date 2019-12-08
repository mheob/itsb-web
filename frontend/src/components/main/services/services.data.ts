import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faPaintBrush, faDesktop, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { ServiceModel } from "./service.model";

export const serviceData: ServiceModel[] = [
  {
    icon: faCodepen,
    header: "Branding",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nostrum ipsa saepe sapiente reprehenderit vero aperiam animi eum blanditiis id."
  },
  {
    icon: faPaintBrush,
    header: "Web Design",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum adipisci minus mollitia similique doloremque in corporis provident facere, aut laboriosam?"
  },
  {
    icon: faChartLine,
    header: "Search Engine Optimization",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veniam iure quos consectetur ea itaque asperiores quibusdam odit consequuntur. Praesentium."
  },
  {
    icon: faLaptopCode,
    header: "Web Development",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident veritatis aspernatur vitae est sunt ut harum atque quidem incidunt doloribus."
  },
  {
    icon: faDesktop,
    header: "User Interface",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus nobis aut doloremque unde perferendis assumenda labore debitis ex excepturi?"
  },
  {
    icon: faLifeRing,
    header: "Hepl &amp; Support",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor similique rerum tenetur deserunt hic ad nemo eveniet totam! Quo, omnis."
  }
];
