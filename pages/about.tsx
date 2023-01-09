import React from "react";
import ExternalLink from "../components/ExternalLink";
import Layout from "../components/Layout";
import { links } from "../globals";

export default function About() {
  return (
    <Layout mainClass="about-page">
      <p>
        In the very end, what is one of the core aspects of human life, if not
        sharing one&apos;s feelings and ideas?
      </p>
      <p>
        <strong>Arcadia</strong> is <em>my personal literary gallery</em>, where
        I discuss a whole universe of topics in a variety of domains - love,
        philosophy and more - in different languages, especially{" "}
        <em>ancient Italian</em> and <em>modern French</em>, often adopting a{" "}
        <em>symbolistic</em> approach.
      </p>

      <p>
        As a matter of fact, Arcadia perfectly embodies{" "}
        <em>my passion for both sophisticated technologies and Humanism</em>:
        its current version is based on{" "}
        <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> and is
        now <em>a mobile-first website</em>, to make its oeuvres more and more
        accessible; furthermore you are all invited to also follow its related{" "}
        <ExternalLink href={links.facebookPage}>Facebook page</ExternalLink>!
        ^__^!
      </p>

      <h2>License</h2>

      <p>
        All the material related to Arcadia&apos;s GitHub project is licensed
        under a{" "}
        <ExternalLink href={links.license}>
          Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported
          License
        </ExternalLink>
        .
      </p>

      <h2>Special thanks</h2>

      <ul>
        <li>
          <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>:
          hyper-elegant, React-based static site generator
        </li>
        <li>
          <ExternalLink href="https://www.colorzilla.com/gradient-editor/">
            ColorZilla
          </ExternalLink>
          : for the beautiful and effective CSS gradient editor
        </li>
      </ul>
    </Layout>
  );
}
