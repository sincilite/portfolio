import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import hero from '../images/Devices-cuate.svg';
import ContentIntro from "../components/contentIntro";
import ContactForm from "../components/contactForm";

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsArticle {
        edges {
          node {
            id
            title
            intro
            uri
          }
        }
      }
    }
  `);

  const articles = data.allDatoCmsArticle.edges.map(node => {
    return <ContentIntro
      key={node.node.id}
      title={node.node.title}
      intro={node.node.intro}
      link={`articles/${node.node.uri}`}
    />
  });

  return (
    <main>
      <title>Home Page</title>
      <Layout>
        <section className="px-6 text-center md:text-left md:p-12 md:pt-0 md:flex justify-between">
          <div>
            <h1>
              Michael<br />van Rooyen
            </h1>
            <p>Some excellent content</p>
          </div>
          <img
            className="w-full md:w-1/2"
            src={hero}
            alt="Illustation showing a man sat in front of a laptop, tablet and mobile device"
          />
        </section>

        <section className="p-6 mb-6 md:p-12 bg-gray-100 lg:rounded-lg text-center sm:text-left">
          <h2>Articles</h2>
          <div className="sm:grid sm:grid-cols-2 sm:gap-6 md:grid md:gap-6 md:grid-cols-3">
            {articles}
          </div>
        </section>
        <section className="p-6 mb-6 md:p-12 bg-gray-100 lg:rounded-lg text-center sm:text-left">
          <h2>Projects</h2>
          <div className="sm:grid sm:grid-cols-2 sm:gap-6 md:grid md:gap-6 md:grid-cols-3">
            <ContentIntro
              title="Project One"
              intro="Intro copy to an article. Intro copy to an article. Intro copy to an article."
              link="somewhere" />

            <ContentIntro
              title="Project Two"
              intro="Intro copy to an article. Intro copy to an article. Intro copy to an article."
              link="somewhere" />

            <ContentIntro
              title="Project Three"
              intro="Intro copy to an article. Intro copy to an article. Intro copy to an article."
              link="somewhere" />
          </div>
        </section>
        <section className="p-6 mb-6 md:p-12 text-center sm:text-left">
          <h2>Contact me</h2>
          <ContactForm />
        </section>
      </Layout>
    </main>
  )
}

export default IndexPage
