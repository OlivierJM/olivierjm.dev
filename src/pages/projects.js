import React from "react"
import projects from "../../content/data/projects"
import Layout from "../components/Layout"

export default function ProjectsList() {
  function renderProjectsData() {
    return (
      <div>
        <div className="cell medium-9 medium-cell-block-y">
          <h4
            className="text-center"
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Projects I contribute to
          </h4>
          <div class="grid-container">
            <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
              {projects.map(project => (
                <div key={project.id} className="cell">
                  <div className="card" style={{ height: "15em" }}>
                    <div className="card-section">
                      <h4>
                        <a href={project.link}>
                          {project.title}{" "}
                          <span
                            role="img"
                            aria-label="Github icon"
                            className="fi-social-github"
                          />
                        </a>
                      </h4>
                      <p>{project.description}</p>
                      <a href={project.demo}>{project.demo}</a>{" "}
                      <ul
                        style={{
                          marginTop: 5,
                        }}
                        className="no-bullet"
                      >
                        {project.stack.map(tech => (
                          <li
                            key={`${Math.random()}${tech}`}
                            style={{
                              display: "inline-block",
                              backgroundColor: "#d3d3d3",
                              borderRadius: 4,
                              marginRight: 10,
                              padding: 5,
                            }}
                            className="subheader"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Layout page="projects">
      <section>{renderProjectsData()}</section>
    </Layout>
  )
}
