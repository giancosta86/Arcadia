import React from "react";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { GetStaticPaths, GetStaticProps } from "next";
import { DecoratedText } from "@giancosta86/hermes-react";
import { Layout } from "../components";
import { ViewComposition, Site, textAnnotations } from "../model";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Site.compositionRepository
    .findAll()
    .map(composition => ({
      params: { id: composition.id }
    }))
    .toArray();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const compositionId = context.params!.id as string;

  const composition = Site.compositionRepository.findById(compositionId);
  if (composition === undefined) {
    throw new Error(`Could not find composition having id '${compositionId}'`);
  }

  const text = await readCompositionText(compositionId);

  const viewComposition = {
    ...ViewComposition.from(composition),
    text
  };

  return {
    props: {
      composition: viewComposition
    }
  };
};

function readCompositionText(compositionId: string): Promise<string> {
  const compositionFilePath = join(
    process.cwd(),
    "compositions",
    `${compositionId}.txt`
  );
  return readFile(compositionFilePath, "utf-8");
}

interface Props {
  composition: ViewComposition;
}

export default function CompositionPage({ composition }: Props) {
  return (
    <Layout title={`${composition.title} - ${Site.shortTitle}`}>
      <div className="composition">
        <span className="title">{composition.title}</span>

        <div>
          <DecoratedText
            text={composition.text ?? ""}
            metadataByChar={textAnnotations}
          />
        </div>
      </div>
    </Layout>
  );
}
