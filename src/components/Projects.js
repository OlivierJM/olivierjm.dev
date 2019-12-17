import React from "react"
import Layout from "../components/Layout"

export default function BlogList() {
  return (
    <Layout page="welcome">
      <section>
        <div className="cell medium-9 medium-cell-block-y">
          <div class="grid-container">
            <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
              <h4 className="text-center subheader">
                Welcome to Olivierjm.dev
              </h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
