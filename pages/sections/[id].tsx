import { GetStaticPaths, GetStaticProps } from "next"
import CompositionList from "../../components/CompositionList"
import Layout from "../../components/Layout"
import PageMetaTitle from "../../components/PageMetaTitle"
import { sectionRepository, site, tableOfContents } from "../../globals"
import { toView, ViewComposition } from "../../viewmodel/viewCompositions"
import { ViewSection } from "../../viewmodel/viewSections"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sectionRepository.findAll().map((section) => ({
    params: { id: section.id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const sectionId = context.params!.id as string

  const section = sectionRepository.findById(sectionId)
  if (section === undefined) {
    throw new Error(`Could not find section having id '${sectionId}'`)
  }

  const compositions = tableOfContents.findCompositionsFor(section)

  return {
    props: {
      section,
      compositions: compositions.map((composition) => toView(composition))
    }
  }
}

interface Props {
  section: ViewSection
  compositions: readonly ViewComposition[]
}

export default function SectionPage(props: Props) {
  return (
    <Layout>
      <PageMetaTitle title={`${site.shortTitle} - ${props.section.name}`} />

      <span className="page-title">{props.section.name}</span>

      <CompositionList compositions={props.compositions} />
    </Layout>
  )
}
