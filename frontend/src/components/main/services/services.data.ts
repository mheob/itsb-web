import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faPaintBrush, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { ServiceModel } from "./service.model";

export const serviceData: ServiceModel[] = [
  {
    icon: faPaintBrush,
    header: "Web Design",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum adipisci minus mollitia similique doloremque in corporis provident facere, aut laboriosam?"
  },
  {
    icon: faLaptopCode,
    header: "Web Development",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident veritatis aspernatur vitae est sunt ut harum atque quidem incidunt doloribus."
  },
  {
    icon: faChartLine,
    header: "Search Engine Optimization",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veniam iure quos consectetur ea itaque asperiores quibusdam odit consequuntur. Praesentium."
  },
  {
    icon: faLifeRing,
    header: "Help & Support",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor similique rerum tenetur deserunt hic ad nemo eveniet totam! Quo, omnis."
  }
];
