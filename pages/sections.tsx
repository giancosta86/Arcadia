import { Layout, SectionList } from "../components";
import { Site, ViewSection } from "../model";

export default function Sections() {
  return (
    <Layout mainClass="sections-page">
      <SectionList
        sections={Site.sectionRepository
          .findAll()
          .map(section => ViewSection.from(section))}
      />
    </Layout>
  );
}
