import { PersonCardProps } from "@site/types";
import { images } from "./images";

export const members: PersonCardProps[] = [
  {
    id: "ahmed_bargady",
    fullName: "Ahmed BARGADY",
    image: "img/members/ahmed_bargady.jpg",
    position: 1,
    post: "President",
    outlook: "ahmed.bargady@esi.ac.ma",
    linkedIn: "https://www.linkedin.com/in/ahmed-bargady/",
  },
  {
    id: "yasmine_zayyoun",
    fullName: "Yasmine ZAYYOUN",
    image: images.yasmineZayyoun,
    position: 4,
    post: "Future Data Engineer | BI Analyst",
    linkedIn: "https://www.linkedin.com/in/yasmine-zayyoun-958165206/",
  },
  {
    id: "hafsa_sas",
    fullName: "Hafsa SAS",
    image: images.hafsaSas,
    position: 3,
    post: "Data and knowledge engineering student",
    linkedIn: "https://www.linkedin.com/in/hafsa-sas-0aa4721b5/",
  },
];
