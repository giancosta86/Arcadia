import Head from "next/head";
import Link from "next/link";
import { links, site } from "../globals";
import ExternalLink from "./ExternalLink";
import PageMetaTitle from "./PageMetaTitle";

interface Props {
  children: React.ReactNode;
  mainClass?: string;
}

export default function Layout({ children, mainClass }: Props) {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href={site.getAbsolutePath("/favicon.ico")} />

        <meta name="author" content="Gianluca Costa" />

        <meta name="description" content="Dreams and Poetry" />

        <link
          rel="manifest"
          href={site.getAbsolutePath("/manifest.webmanifest")}
        ></link>
      </Head>

      <PageMetaTitle title={site.longTitle} />

      <header>
        <Link href="/" passHref>
          <a className="logo-banner">
            <img src={site.getAbsolutePath("/logo.svg")} />
            <span className="title">Arcadia</span>
          </a>
        </Link>

        <div className="menu">
          <Link href="/sections" passHref>
            <a className="button sections">Sections</a>
          </Link>

          <Link href="/about" passHref>
            <a className="button about">About...</a>
          </Link>
        </div>
      </header>

      <div className={`main ${mainClass ?? ""}`.trim()}>{children}</div>

      <footer>
        <hr />
        Copyright ©{" "}
        <ExternalLink href={links.gcwebsite}>Gianluca Costa</ExternalLink>
      </footer>
    </div>
  );
}
