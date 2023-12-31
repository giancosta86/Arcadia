import { List } from "@rimbu/list";
import { Section } from "./Section";

export const hardwiredSections = List.of<Section>(
  {
    id: "season-4",
    name: "Season 4",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla"
    )
  },
  {
    id: "season-3",
    name: "Season 3",
    compositionIds: List.of<string>(
      "ingegner-luna",
      "sommelier-meriggio",
      "la-gilda",
      "sole-gentile",
      "i-tulipani",
      "ballo-principe",
      "dipinto-principesco",
      "saggio-procione",
      "martin-pescatore",
      "sole-aurora",
      "sfida-kebab",
      "carrozza-fatata",
      "zenit-aurato",
      "elisir-magico",
      "prence-giglio",
      "telefono-tramonto",
      "pre-alba"
    )
  },
  {
    id: "season-2",
    name: "Season 2",
    compositionIds: List.of<string>(
      "il-capitano",
      "ode-primavera",
      "il-banchetto",
      "mann-mond",
      "volpe-argentata"
    )
  },
  {
    id: "season-1",
    name: "Season 1",
    compositionIds: List.of<string>(
      "lai-passero",
      "fata-pinguina",
      "imago-gentile",
      "briscola",
      "cavalier-aurora",
      "il-mare",
      "augel-cristallo",
      "les-fleurs",
      "mezzanotte",
      "la-lune",
      "arc-en-ciel",
      "le-nuvole",
      "i-gemelli",
      "la-rondine",
      "nel-vespro",
      "due-scoiattoli",
      "le-biciclette",
      "aquila-pinguino"
    )
  },
  {
    id: "cavalier-aurora",
    name: "Cavalier dell'Aurora",
    compositionIds: List.of<string>(
      "nel-vespro",
      "cavalier-aurora",
      "lai-passero",
      "imago-gentile",
      "mann-mond",
      "pre-alba",
      "elisir-magico",
      "zenit-aurato",
      "carrozza-fatata",
      "sole-aurora",
      "martin-pescatore",
      "saggio-procione",
      "dipinto-principesco",
      "ballo-principe",
      "sole-gentile",
      "sommelier-meriggio",
      "ingegner-luna"
    )
  },
  {
    id: "luna",
    name: "La luna",
    compositionIds: List.of<string>(
      "canzone-panda",
      "re-fiori",
      "regno-tramonto",
      "drago-farfalla",
      "la-lune",
      "cavalier-aurora",
      "le-biciclette",
      "il-mare",
      "ingegner-luna",
      "pre-alba",
      "saggio-procione",
      "mann-mond",
      "lai-passero",
      "imago-gentile"
    )
  },
  {
    id: "poeta",
    name: "Il poeta",
    compositionIds: List.of<string>(
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "gnomo-furetto",
      "le-nuvole",
      "sfida-kebab",
      "la-gilda",
      "telefono-tramonto",
      "i-tulipani",
      "les-fleurs",
      "il-banchetto"
    )
  },

  {
    id: "prence-giglio",
    name: "Prence del Giglio",
    compositionIds: List.of<string>(
      "pre-alba",
      "telefono-tramonto",
      "prence-giglio",
      "elisir-magico",
      "zenit-aurato",
      "carrozza-fatata",
      "sole-aurora",
      "martin-pescatore",
      "saggio-procione",
      "dipinto-principesco",
      "ballo-principe",
      "i-tulipani",
      "sole-gentile",
      "sommelier-meriggio",
      "ingegner-luna"
    )
  },
  {
    id: "drago-oriente",
    name: "Drago d'Oriente",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "regno-tramonto",
      "drago-farfalla"
    )
  },
  {
    id: "drago-infernale",
    name: "Drago infernale",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla"
    )
  },
  {
    id: "matta-mummia",
    name: "Matta mummia",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "sir-lancibbaffo"
    )
  },
  {
    id: "gnomo-furetto-iena",
    name: "Gnomo, furetto, iena",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla"
    )
  },
  {
    id: "natura",
    name: "Quadri nella natura",
    compositionIds: List.of<string>(
      "canzone-panda",
      "re-fiori",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla",
      "due-scoiattoli",
      "la-rondine",
      "il-mare",
      "la-lune",
      "ingegner-luna",
      "saggio-procione",
      "martin-pescatore",
      "volpe-argentata",
      "lai-passero",
      "augel-cristallo",
      "les-fleurs",
      "le-nuvole",
      "arc-en-ciel"
    )
  },
  {
    id: "brio",
    name: "Momenti briosi",
    compositionIds: List.of<string>(
      "regno-tramonto",
      "la-gilda",
      "sfida-kebab",
      "il-capitano",
      "il-banchetto",
      "fata-pinguina",
      "briscola",
      "les-fleurs",
      "i-gemelli",
      "due-scoiattoli"
    )
  },
  {
    id: "personaggi-gentili",
    name: "Personaggi gentili",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "sir-lancibbaffo",
      "regno-tramonto",
      "drago-farfalla",
      "ingegner-luna",
      "sommelier-meriggio",
      "la-gilda",
      "saggio-procione",
      "prence-giglio",
      "il-capitano",
      "fata-pinguina",
      "imago-gentile",
      "augel-cristallo"
    )
  },
  {
    id: "amore",
    name: "Amore",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "sir-lancibbaffo",
      "regno-tramonto",
      "elisir-magico",
      "carrozza-fatata",
      "ode-primavera",
      "sole-aurora",
      "zenit-aurato",
      "telefono-tramonto",
      "augel-cristallo",
      "martin-pescatore",
      "pre-alba",
      "sole-gentile",
      "i-tulipani",
      "ballo-principe",
      "saggio-procione",
      "lai-passero",
      "prence-giglio",
      "imago-gentile",
      "cavalier-aurora",
      "la-lune"
    )
  },
  {
    id: "filosofia",
    name: "Filosofia",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla",
      "il-mare",
      "le-nuvole",
      "le-biciclette",
      "briscola",
      "la-rondine",
      "i-gemelli",
      "arc-en-ciel",
      "les-fleurs",
      "la-lune",
      "ingegner-luna"
    )
  },

  {
    id: "vespro",
    name: "Pensieri nel vespro",
    compositionIds: List.of<string>(
      "re-fiori",
      "apocalissi-scimmiesca",
      "regno-tramonto",
      "drago-farfalla",
      "carrozza-fatata",
      "elisir-magico",
      "nel-vespro",
      "sommelier-meriggio",
      "i-tulipani",
      "ballo-principe",
      "telefono-tramonto",
      "fata-pinguina",
      "il-mare",
      "le-nuvole"
    )
  },
  {
    id: "notte",
    name: "Quadri notturni",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla",
      "le-biciclette",
      "la-lune",
      "mezzanotte",
      "augel-cristallo",
      "il-mare",
      "imago-gentile",
      "cavalier-aurora",
      "ingegner-luna",
      "sommelier-meriggio",
      "il-capitano",
      "pre-alba",
      "ballo-principe",
      "lai-passero",
      "saggio-procione",
      "volpe-argentata",
      "mann-mond"
    )
  },
  {
    id: "sole",
    name: "Quadri solari",
    compositionIds: List.of<string>(
      "regno-tramonto",
      "drago-farfalla",
      "zenit-aurato",
      "sole-aurora",
      "martin-pescatore",
      "sole-gentile",
      "sommelier-meriggio",
      "la-gilda",
      "il-mare"
    )
  },
  {
    id: "alba",
    name: "La magia dell'alba",
    compositionIds: List.of<string>("pre-alba", "il-mare")
  },
  {
    id: "imago-gentile",
    name: "Imago gentile",
    compositionIds: List.of<string>(
      "imago-gentile",
      "il-banchetto",
      "ode-primavera"
    )
  },
  {
    id: "rima-alternata",
    name: "Rima alternata",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "re-fiori",
      "regno-tramonto",
      "la-gilda",
      "martin-pescatore",
      "ingegner-luna",
      "saggio-procione",
      "ballo-principe",
      "sole-aurora",
      "sfida-kebab",
      "carrozza-fatata",
      "zenit-aurato",
      "elisir-magico",
      "volpe-argentata",
      "pre-alba",
      "il-banchetto",
      "lai-passero",
      "fata-pinguina",
      "briscola",
      "cavalier-aurora",
      "il-mare"
    )
  },
  {
    id: "rima-baciata",
    name: "Rima baciata",
    compositionIds: List.of<string>(
      "due-scoiattoli",
      "arc-en-ciel",
      "sommelier-meriggio",
      "saggio-procione",
      "mann-mond",
      "augel-cristallo",
      "les-fleurs",
      "mezzanotte",
      "la-lune",
      "le-nuvole",
      "i-gemelli",
      "la-rondine",
      "nel-vespro",
      "le-biciclette",
      "aquila-pinguino"
    )
  },
  {
    id: "rima-incrociata",
    name: "Rima incrociata",
    compositionIds: List.of<string>(
      "canzone-panda",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "gnomo-furetto",
      "drago-farfalla",
      "dipinto-principesco",
      "imago-gentile"
    )
  },
  {
    id: "rima-dimezzata",
    name: "Rima dimezzata",
    compositionIds: List.of<string>("i-tulipani")
  },
  {
    id: "rime-miste",
    name: "Rime miste",
    compositionIds: List.of<string>("canzone-panda", "saggio-procione")
  },
  {
    id: "versi-liberi",
    name: "Versi liberi",
    compositionIds: List.of<string>("sole-gentile")
  },
  {
    id: "sonetti",
    name: "Sonetti",
    compositionIds: List.of<string>(
      "prence-giglio",
      "telefono-tramonto",
      "il-capitano"
    )
  },
  { id: "odi", name: "Odi", compositionIds: List.of<string>("ode-primavera") },
  {
    id: "italiano",
    name: "Brani in Italiano",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla",
      "ingegner-luna",
      "sommelier-meriggio",
      "la-gilda",
      "sole-gentile",
      "i-tulipani",
      "ballo-principe",
      "dipinto-principesco",
      "saggio-procione",
      "martin-pescatore",
      "sole-aurora",
      "sfida-kebab",
      "carrozza-fatata",
      "zenit-aurato",
      "elisir-magico",
      "prence-giglio",
      "telefono-tramonto",
      "pre-alba",
      "il-capitano",
      "ode-primavera",
      "il-banchetto",
      "volpe-argentata",
      "lai-passero",
      "fata-pinguina",
      "imago-gentile",
      "briscola",
      "cavalier-aurora",
      "il-mare",
      "augel-cristallo",
      "mezzanotte",
      "le-nuvole",
      "i-gemelli",
      "la-rondine",
      "nel-vespro",
      "due-scoiattoli",
      "le-biciclette",
      "aquila-pinguino"
    )
  },
  {
    id: "french",
    name: "Œuvres en Français",
    compositionIds: List.of<string>("les-fleurs", "la-lune", "arc-en-ciel")
  },
  {
    id: "german",
    name: "Brani in Tedesco",
    compositionIds: List.of<string>("mann-mond")
  },
  {
    id: "chinese",
    name: "Cinese",
    compositionIds: List.of<string>("drago-farfalla")
  },
  {
    id: "poesie",
    name: "Poesie",
    compositionIds: List.of<string>(
      "mummia-infernale",
      "canzone-panda",
      "re-fiori",
      "apocalissi-scimmiesca",
      "sir-lancibbaffo",
      "regno-tramonto",
      "gnomo-furetto",
      "drago-farfalla",
      "ingegner-luna",
      "sommelier-meriggio",
      "la-gilda",
      "sole-gentile",
      "i-tulipani",
      "ballo-principe",
      "dipinto-principesco",
      "saggio-procione",
      "martin-pescatore",
      "sole-aurora",
      "sfida-kebab",
      "carrozza-fatata",
      "zenit-aurato",
      "elisir-magico",
      "prence-giglio",
      "telefono-tramonto",
      "pre-alba",
      "il-capitano",
      "ode-primavera",
      "il-banchetto",
      "mann-mond",
      "volpe-argentata",
      "lai-passero",
      "fata-pinguina",
      "imago-gentile",
      "briscola",
      "cavalier-aurora",
      "il-mare",
      "augel-cristallo",
      "les-fleurs",
      "mezzanotte",
      "la-lune",
      "arc-en-ciel",
      "le-nuvole",
      "i-gemelli",
      "la-rondine",
      "nel-vespro",
      "due-scoiattoli",
      "le-biciclette",
      "aquila-pinguino"
    )
  }
);
