import Head from "next/head";

interface Props {
  title: string;
}

export default function PageMetaTitle(props: Props) {
  return (
    <Head>
      <meta name="og:title" content={props.title} />
      <title>{props.title}</title>
    </Head>
  );
}
