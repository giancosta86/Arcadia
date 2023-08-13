import { Stream } from "@rimbu/stream";
import { Composition } from "./Composition";

export interface CompositionRepository {
  findAll(): Stream<Composition>;

  findById(compositionId: string): Composition | undefined;
}
