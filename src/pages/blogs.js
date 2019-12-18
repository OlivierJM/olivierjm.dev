import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from "gatsby-image"
import Layout from "../components/Layout"

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div
        style={{
          marginTop: 40,
        }}
      >
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li key={blog.node.fields.slug}>
                  <div className={blogListStyles.list__hero}>
                    <Img
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
                <br />
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <Layout page="blogs">
      <section>
        <ul className={blogListStyles.list}>{renderBlogData()}</ul>
      </section>
    </Layout>
  )
}
