import { GetStaticPaths, GetStaticProps } from "next";
import { Stream } from "@rimbu/stream";
import { CompositionList, Layout } from "../../components";
import { ViewSection, ViewComposition, Site } from "../../model";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Site.sectionRepository
    .findAll()
    .map(section => ({
      params: { id: section.id }
    }))
    .toArray();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const sectionId = context.params!.id as string;

  const section = Site.sectionRepository.findById(sectionId);
  if (section === undefined) {
    throw new Error(`Could not find section having id '${sectionId}'`);
  }

  const viewSection = ViewSection.from(section);

  const compositions = Site.tableOfContents.findCompositionsFor(section);

  return {
    props: {
      section: viewSection,
      compositions: compositions
        .map(composition => ViewComposition.from(composition))
        .toArray()
    }
  };
};

export interface SectionPageProps {
  section: ViewSection;
  compositions: Stream<ViewComposition>;
}

export default function SectionPage({
  section,
  compositions
}: SectionPageProps) {
  return (
    <Layout title={`${Site.shortTitle} - ${section.name}`}>
      <span className="page-title">{section.name}</span>

      <CompositionList compositions={compositions} />
    </Layout>
  );
}
