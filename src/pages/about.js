import React from "react"

import Layout from "../components/layout"
import LinkBar from "../components/links/linkbar"

import style from "../styles/index.module.css"

/**
 * About me page
 */
export default function About() {
  return (
    <div>
      <LinkBar></LinkBar>

      <Layout topMargin="3rem">
          <h1 style={{ whiteSpace: `nowrap` }}>About me</h1>
          <div>
            <p>I am a student at the University of Chicago pursuing a B.Sc. in Computer Science and a B.A. in Economics (June 2022). </p>
            <p>My interests include quantitative finance, cryptocurrencies, and software development.</p>
            <p>The majority of my programming experience has been on the backend. Technologies I am familiar with using include Python, JavaScript, C, SQL, R, and LaTeX.</p>
          </div>
      </Layout>
      </div>
  )
}
