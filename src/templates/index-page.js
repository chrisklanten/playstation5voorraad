import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

import "../components/style.scss";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="container flex flex-col justify-center items-center">
      <h1>{title}</h1>
      <h2>{subheading}</h2>
    </div>
    <section className="section section--gradient">
      <div className="container flex">
        <div className="mr-16 w-full md:w-3/4">
          <div className="">
            <h3 className="title">{mainpitch.title}</h3>
            <p className="subtitle">{mainpitch.description}</p>
          </div>
          <div className="mt-8">
            <div className="container">
              <div className="">
                <div className="mr-8 flex">
                  <p className="mb-4 font-bold text-center pb-4 border-b-2">
                    Verkoper
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2">
                    Pre-order
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2">
                    Prijs
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2">
                    Informatie pagina
                  </p>
                </div>
                <div className="flex">
                  <div>
                    <img
                      className="w-24 mb-4 mx-auto"
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/coolblue-logo.png"
                      alt="Pre order Playstation 5 bij Coolblue"
                    />
                  </div>
                  <div>500,-</div>
                  <div>
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.coolblue.nl/product/865866/playstation-5.html"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Coolblue
                    </a>
                  </div>

                  <div>
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.coolblue.nl/advies/playstation-5.html"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order informatie van Coolblue
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <img
                      className="w-32 mb-4"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bol.com_logo.svg/1280px-Bol.com_logo.svg.png"
                      alt="Pre order Playstation 5 bij Bol.com"
                    />
                  </div>
                  <div>500,-</div>
                  <div>
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://partner.bol.com/click/click?p=2&t=url&s=1073470&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Fsony-playstation-5-console%2F9300000004162282%2F&name=Sony%20PlayStation%205%20Console"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Bol.com
                    </a>
                  </div>

                  <div>
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://partner.bol.com/click/click?p=2&t=url&s=1073470&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fi%2Fwat-is-de-nieuwe-playstation-5%2FN%2F38910%2F&name=De%20nieuwe%20Playstation%205"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order informatie van Bol.com
                    </a>
                  </div>
                </div>

                <img
                  className="w-32 mb-4"
                  src="https://blackfridaydiscount.nl/wp-content/uploads/2016/12/Mediamarkt-2.png"
                  alt="Pre order Playstation 5 bij Mediamarkt"
                />

                <img
                  className="w-32 mb-4"
                  src="https://s3-eu-west-1.amazonaws.com/tpd/logos/4cc8765500006400050e0e36/0x0.png"
                  alt="Pre order Playstation 5 bij Gamemania"
                />

                <img
                  className="w-32 mb-4"
                  src="https://www.nedgame.nl/gfx/nedgame-logo.png"
                  alt="Pre order Playstation 5 bij Nedgame"
                />

                <img
                  className="w-32 mb-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png"
                  alt="Pre order Playstation 5 bij Amazon"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar" className="w-full md:w-1/4">
          {new Date().getFullYear()}
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
