import { List } from "@rimbu/list";
import { IsoDate } from "@giancosta86/time-utils";
import { Composition } from "./Composition";

export const hardwiredCompositions = List.of<Composition>(
  {
    id: "maiale-incipriato",
    title: "Il maiale incipriato",
    date: new IsoDate("2024-03-18")
  },
  {
    id: "baffi-west",
    title: "I baffi più castani del West",
    date: new IsoDate("2024-01-26")
  },
  {
    id: "mummia-infernale",
    title: "La mummia infernale",
    date: new IsoDate("2023-12-31")
  },
  {
    id: "canzone-panda",
    title: "La canzone del panda",
    date: new IsoDate("2023-10-31")
  },
  {
    id: "re-fiori",
    title: "Il re di fiori",
    date: new IsoDate("2023-09-27")
  },
  {
    id: "apocalissi-scimmiesca",
    title: "Apocalissi scimmiesca",
    date: new IsoDate("2023-09-05")
  },
  {
    id: "sir-lancibbaffo",
    title: "Sir Lancibbaffo",
    date: new IsoDate("2023-07-20")
  },
  {
    id: "regno-tramonto",
    title: "Un regno al tramonto",
    date: new IsoDate("2023-07-13")
  },
  {
    id: "gnomo-furetto",
    title: "Lo gnomo e il furetto",
    date: new IsoDate("2023-03-24")
  },
  {
    id: "drago-farfalla",
    title: "Il drago e la farfalla",
    date: new IsoDate("2023-03-01")
  },
  {
    id: "ingegner-luna",
    title: "L'ingegner della luna",
    date: new IsoDate("2018-11-10")
  },
  {
    id: "sommelier-meriggio",
    title: "Il sommelier del meriggio",
    date: new IsoDate("2018-11-09")
  },
  { id: "la-gilda", title: "La gilda", date: new IsoDate("2018-10-10") },
  {
    id: "sole-gentile",
    title: "Il sole gentile",
    date: new IsoDate("2018-09-15")
  },
  {
    id: "i-tulipani",
    title: "I tulipani",
    date: new IsoDate("2018-08-29")
  },
  {
    id: "ballo-principe",
    title: "Il ballo del principe",
    date: new IsoDate("2018-08-24")
  },
  {
    id: "dipinto-principesco",
    title: "Dipinto principesco",
    date: new IsoDate("2018-08-07")
  },
  {
    id: "saggio-procione",
    title: "Il saggio procione",
    date: new IsoDate("2018-07-24")
  },
  {
    id: "martin-pescatore",
    title: "Il martin pescatore",
    date: new IsoDate("2018-07-22")
  },
  {
    id: "sole-aurora",
    title: "Il sole e l'aurora",
    date: new IsoDate("2018-07-17")
  },
  {
    id: "sfida-kebab",
    title: "La sfida del kebab",
    date: new IsoDate("2018-06-30")
  },
  {
    id: "carrozza-fatata",
    title: "La carrozza fatata",
    date: new IsoDate("2018-06-28")
  },
  {
    id: "zenit-aurato",
    title: "Zenit aurato",
    date: new IsoDate("2018-06-24")
  },
  {
    id: "elisir-magico",
    title: "L'elisir magico",
    date: new IsoDate("2018-06-23")
  },
  {
    id: "prence-giglio",
    title: "Il prence del giglio",
    date: new IsoDate("2018-06-21")
  },
  {
    id: "telefono-tramonto",
    title: "Un telefono al tramonto",
    date: new IsoDate("2018-06-17")
  },
  {
    id: "pre-alba",
    title: "Prima dell'alba",
    date: new IsoDate("2018-06-12")
  },
  { id: "il-capitano", title: "Il capitano", date: new IsoDate("2017-05-10") },
  {
    id: "ode-primavera",
    title: "Ode di primavera",
    date: new IsoDate("2017-05-08")
  },
  {
    id: "il-banchetto",
    title: "Il banchetto",
    date: new IsoDate("2017-05-04")
  },
  {
    id: "mann-mond",
    title: "Der Mann und der Mond",
    date: new IsoDate("2017-04-21")
  },
  {
    id: "volpe-argentata",
    title: "La volpe argentata",
    date: new IsoDate("2017-04-10")
  },
  {
    id: "lai-passero",
    title: "Il lai del passero",
    date: new IsoDate("2017-04-09")
  },
  {
    id: "fata-pinguina",
    title: "Fata Pinguina",
    date: new IsoDate("2017-04-08")
  },
  {
    id: "imago-gentile",
    title: "L'imago gentile",
    date: new IsoDate("2017-04-02")
  },
  { id: "briscola", title: "Briscola", date: new IsoDate("2014-05-18") },
  {
    id: "cavalier-aurora",
    title: "Il cavalier dell'aurora",
    date: new IsoDate("2014-04-29")
  },
  { id: "il-mare", title: "Il mare", date: new IsoDate("2014-04-24") },
  {
    id: "augel-cristallo",
    title: "L'augel di cristallo",
    date: new IsoDate("2014-04-13")
  },
  { id: "les-fleurs", title: "Les fleurs", date: new IsoDate("2014-03-10") },
  { id: "mezzanotte", title: "Mezzanotte", date: new IsoDate("2014-02-15") },
  { id: "la-lune", title: "La lune", date: new IsoDate("2013-12-15") },
  {
    id: "arc-en-ciel",
    title: "L'arc-en-ciel",
    date: new IsoDate("2013-11-21")
  },
  { id: "le-nuvole", title: "Le nuvole", date: new IsoDate("2013-10-14") },
  { id: "i-gemelli", title: "I gemelli", date: new IsoDate("2013-09-14") },
  { id: "la-rondine", title: "La rondine", date: new IsoDate("2013-08-18") },
  { id: "nel-vespro", title: "Nel vespro", date: new IsoDate("2013-06-15") },
  {
    id: "due-scoiattoli",
    title: "I due scoiattoli",
    date: new IsoDate("2013-06-12")
  },
  {
    id: "le-biciclette",
    title: "Le biciclette",
    date: new IsoDate("2013-06-08")
  },
  {
    id: "aquila-pinguino",
    title: "L'aquila che amò un pinguino",
    date: new IsoDate("2013-06-07")
  }
);
