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
    <div
      className="container flex flex-col justify-center items-center bg-black"
      style={{ backgroundColor: "#0070D1" }}
    >
      <h1 className="text-white">{title}</h1>
      <h2 className="text-white">{subheading}</h2>
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
                  <p className="mb-4 font-bold text-center pb-4 border-b-2 w-1/4">
                    Verkoper
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2 w-1/4">
                    Prijs
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2 w-1/4">
                    Pre-order
                  </p>

                  <p className="mb-4 font-bold text-center pb-4 border-b-2 w-1/4">
                    Informatie pagina
                  </p>
                </div>
                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-24 mb-4 mx-auto"
                      src="https://cdn.freebiesupply.com/logos/thumbs/2x/coolblue-logo.png"
                      alt="Pre order Playstation 5 bij Coolblue"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
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

                  <div className="w-1/4 text-center">
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

                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-32 mb-4 mx-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bol.com_logo.svg/1280px-Bol.com_logo.svg.png"
                      alt="Pre order Playstation 5 bij Bol.com"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
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

                  <div className="w-1/4 text-center">
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

                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-32 mb-4 mx-auto"
                      src="https://blackfridaydiscount.nl/wp-content/uploads/2016/12/Mediamarkt-2.png"
                      alt="Pre order Playstation 5 bij Mediamarkt"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.mediamarkt.nl/nl/shop/playstation-5.html"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Mediamarkt
                    </a>
                  </div>

                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://partner.bol.com/click/click?p=2&t=url&s=1073470&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fi%2Fwat-is-de-nieuwe-playstation-5%2FN%2F38910%2F&name=De%20nieuwe%20Playstation%205"
                      title="Pre order Playstation 5 bij Coolblue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order informatie van Mediamarkt
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-32 mb-4 mx-auto"
                      src="https://s3-eu-west-1.amazonaws.com/tpd/logos/4cc8765500006400050e0e36/0x0.png"
                      alt="Pre order Playstation 5 bij Gamemania"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.gamemania.nl/Consoles/playstation-5/144093_playstation-5-825gb"
                      title="Pre order Playstation 5 bij Gamemania"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Gamemania
                    </a>
                  </div>

                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.gamemania.nl/Articles/ps5-playstation-5-preorder-alles-wat-je-moet-weten"
                      title="Pre order Playstation 5 bij Gamemania"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order informatie van Gamemania
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-32 mb-4 mx-auto"
                      src="https://www.nedgame.nl/gfx/nedgame-logo.png"
                      alt="Pre order Playstation 5 bij Nedgame"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.nedgame.nl/playstation-5/playstation-5--levering-begin-2021-/6036644854/"
                      title="Pre order Playstation 5 bij Nedgame"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Nedgame
                    </a>
                  </div>

                  <div className="w-1/4 text-center">
                    <span className="font-bold text-black">X</span>
                  </div>
                </div>

                <div className="flex justify-center items-center mb-2">
                  <div className="w-1/4 text-center">
                    <img
                      className="w-32 mb-4 mx-auto"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png"
                      alt="Pre order Playstation 5 bij Amazon"
                    />
                  </div>
                  <div className="w-1/4 text-center">500,-</div>
                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.gamemania.nl/Consoles/playstation-5/144093_playstation-5-825gb"
                      title="Pre order Playstation 5 bij Amazon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order bij Amazon
                    </a>
                  </div>

                  <div className="w-1/4 text-center">
                    <a
                      className="w-24 mb-4 no-underline hover:underline"
                      href="https://www.Amazon.nl/Articles/ps5-playstation-5-preorder-alles-wat-je-moet-weten"
                      title="Pre order Playstation 5 bij Amazon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pre order informatie van Amazon
                    </a>
                  </div>
                </div>
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
