import React from "react"
import Layout from "../components/layout"
import Links from "../components/links"

export default function About() {
  return (
    <Layout topMargin="3rem">
        <header style={{ marginBottom: `1.5rem`, paddingBottom: `0.1rem`}}>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <Links _marginRight="1.2rem" pageName="Home" pageDir="/"/>
            </ul>
        </header>
        <h1 style={{ whiteSpace: `nowrap` }}>About me</h1>
        <div>
          <p>I am a student at the University of Chicago pursuing a B.Sc. in Computer Science and a B.A. in Economics (June 2022). </p>
          <p>My interests include quantitative finance, cryptocurrencies, and software development.</p>
          <p>The majority of my programming experience has been on the backend (e.g. my proprietary trading system). Technologies I am familiar with using include Python, JavaScript, C, SQL, R, and LaTeX.</p>
        </div>
    </Layout>
  )
}
