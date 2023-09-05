import { CompositionList, Layout } from "../components";
import { ViewComposition, Site } from "../model";

export default function Home() {
  return (
    <Layout>
      <CompositionList
        compositions={Site.compositionRepository
          .findAll()
          .map(composition => ViewComposition.from(composition))}
      />
    </Layout>
  );
}
