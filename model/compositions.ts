import { hardwiredCompositions } from "./hardwired-compositions"

export interface Composition {
  id: string
  title: string
  date: Date
}

export interface CompositionRepository {
  findAll(): readonly Composition[]
  findById(compositionId: string): Composition | undefined
}

export class HardwiredCompositionRepository implements CompositionRepository {
  private readonly idToCompositionMap: Map<string, Composition> = new Map()

  constructor() {
    hardwiredCompositions.forEach((composition) =>
      this.idToCompositionMap.set(composition.id, composition)
    )
  }

  findAll(): readonly Composition[] {
    return hardwiredCompositions
  }

  findById(compositionId: string): Composition | undefined {
    return this.idToCompositionMap.get(compositionId)
  }
}
