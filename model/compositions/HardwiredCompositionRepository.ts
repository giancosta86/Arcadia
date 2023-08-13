import { RMap } from "@rimbu/collection-types";
import { Stream } from "@rimbu/stream";
import { Composition } from "./Composition";
import { CompositionRepository } from "./CompositionRepository";
import { hardwiredCompositions } from "./hardwiredCompositions";
import { CompositionComp } from "./CompositionComp";
import { OrderedHashMap } from "@rimbu/ordered";

export class HardwiredCompositionRepository implements CompositionRepository {
  private readonly compositionsById: RMap<string, Composition>;

  constructor() {
    this.compositionsById = OrderedHashMap.from(
      hardwiredCompositions
        .sort(CompositionComp.createDefault())
        .map(composition => [composition.id, composition])
    );
  }

  findAll(): Stream<Composition> {
    return this.compositionsById.streamValues();
  }

  findById(compositionId: string): Composition | undefined {
    return this.compositionsById.get(compositionId);
  }
}
