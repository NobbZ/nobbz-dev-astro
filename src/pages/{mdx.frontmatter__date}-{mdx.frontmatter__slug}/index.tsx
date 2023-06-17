import * as React from "react";

import { PageProps, graphql } from "gatsby";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

import { Layout, Comments, MDXWrapper, Seo } from "~components";

type BlogPostProps = React.PropsWithChildren<
  PageProps<Queries.BlogPostByIdQuery>
>;

const BlogPost = ({ data, children }: BlogPostProps) => {
  if (!data.mdx) {
    throw new Error("No MDX data");
  }

  const image = getImage(data.mdx.frontmatter.hero_image as ImageDataLike);

  // TODO: Make this a component
  const hero = image ? (
    <div className="relative z-[-1] max-w-100% mb-[-200px] md:w-[var(--box-width)] m-auto md:left-[calc((var(--content-width)-var(--box-width))/2)]">
      <GatsbyImage
        image={image}
        className="rounded-t-lg"
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p className="absolute top-0 left-0 bg-[rgba(255,255,255,0.25)] backdrop-blur p-2 rounded-tl-lg rounded-br-md">
        <svg
          className="inline-block pr-1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5v-2H5V8h14v1h2V5a2 2 0 0 0-2-2m2.7 10.35l-1 1l-2.05-2l1-1c.2-.21.54-.22.77 0l1.28 1.28c.19.2.19.52 0 .72M12 18.94l6.07-6.06l2.05 2L14.06 21H12v-2.06Z"
          />
        </svg>
        {data.mdx.frontmatter.date}
      </p>
      <p className="absolute top-0 right-0 bg-[rgba(255,255,255,0.25)] backdrop-blur p-2 rounded-tr-lg rounded-bl-md">
        <a href={data.mdx.frontmatter.hero_image_link}>
          <svg
            className="inline-block pr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
            <path
              fill="currentColor"
              d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"
            />
          </svg>
          {data.mdx.frontmatter.hero_image_credit}
        </a>
      </p>
    </div>
  ) : null;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {hero}
      <article className="z-10 rounded-t-md bg-[rgba(255,255,255,0.25)] backdrop-blur p-2 text-justify">
        <MDXWrapper>{children}</MDXWrapper>
      </article>
      <Comments />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit
        hero_image_link
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: BlogPostProps) => {
  if (!data.mdx) {
    throw new Error("No MDX data");
  }

  return <Seo title={data.mdx.frontmatter.title} />;
};

export default BlogPost;
