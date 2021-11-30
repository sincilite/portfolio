import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import HtmlContent from "../../components/htmlContent";
import CodeSnippet from "../../components/codeSnippet";
import Breadcrumb from "../../components/Breadcrumb";

import Layout from "../../components/layout";

const Article = ({ data }) => {

  const { title, intro, body, hero, contentBlocks, slug } = data.datoCmsArticle;
  const heroImage = <GatsbyImage alt={hero.alt} image={hero.gatsbyImageData} />;

  const contentBlocksMarkup = contentBlocks.map(block => {
    if (block.internal.type === "DatoCmsImageText") {
      return <HtmlContent key={block.id} markDown={block.copy} />
    }
    if (block.internal.type === "DatoCmsCode") {
      return <CodeSnippet key={block.id} code={block.codepenslug} />;
    }
  });

  return (
    <Layout>
      <header className="px-6 mb-6 md:text-left md:p-12 md:mb-12 md:pt-0 border-b border-yellow-400">
        <h1 className="leading-snug">
          <span className="bg-yellow-400">{title}</span>
        </h1>
        <nav>
          <Breadcrumb links={[
            { name: 'Home', url: '/' },
            { name: 'Articles', url: '/articles' },
            { name: title }
          ]} />
        </nav>
      </header>
      <section className="px-6 mb-6 md:px-12 md:mb-12 md:flex">
        <p>{intro}</p>
        {heroImage}
      </section>
      <main className="px-6 md:text-left md:px-12">
        <HtmlContent markDown={body} />
        {contentBlocksMarkup}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($uri: String) {
    datoCmsArticle(uri: {eq: $uri}) {
      id
      title
      intro
      body
      contentBlocks {
        ... on DatoCmsImageText {
          id
          copy
          asset {
            gatsbyImageData
          }
          internal {
            type
          }
        }
        ... on DatoCmsCode {
          id
          codepenslug
          internal {
            type
          }
        }
      }
      hero {
        alt
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
        )
      }
    }
  }
`

export default Article;