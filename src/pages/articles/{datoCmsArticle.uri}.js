import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const Article = ({ data }) => {

  const { title, body } = data.datoCmsArticle;
  return (
    <Layout>
      <header className="px-6 text-center md:text-left md:p-12 md:pt-0">
        <h1>{title}</h1>
      </header>
    </Layout>
  );
}

export const query = graphql`
  query ($uri: String) {
    datoCmsArticle(uri: {eq: $uri}) {
      id
      title
      body
    }
  }
`

export default Article;