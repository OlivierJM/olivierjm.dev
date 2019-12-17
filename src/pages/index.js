import React from "react"
import Layout from "../components/Layout"
import ProjectList from "../components/Projects"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <ProjectList />
      </section>
    </Layout>
  )
}
