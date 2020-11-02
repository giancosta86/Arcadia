import { Section } from "../model/sections"

export interface ViewSection {
  id: string
  name: string
  compositionCount: number
}

export function toView(section: Section): ViewSection {
  return {
    id: section.id,
    name: section.name,
    compositionCount: section.compositionIds.length
  }
}
