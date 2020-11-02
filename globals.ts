import { HardwiredCompositionRepository } from "./model/compositions"
import { HardwiredSectionRepository } from "./model/sections"
import { TableOfContents } from "./model/tableOfContents"

export const site = {
  shortTitle: "Arcadia",
  longTitle: "Arcadia - Dreams and Poetry"
} as const

export const links = {
  license: "https://creativecommons.org/licenses/by-nc-nd/3.0/",
  gcwebsite: "https://gianlucacosta.info/",
  facebookPage: "https://www.facebook.com/arcadiapoetry/"
} as const

export const compositionRepository = new HardwiredCompositionRepository()

export const sectionRepository = new HardwiredSectionRepository()

export const tableOfContents = new TableOfContents(
  sectionRepository,
  compositionRepository
)
