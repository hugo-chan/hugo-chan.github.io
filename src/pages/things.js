import React from "react"
import BottomArrow from "../components/bottomarrow"
import Links from "../components/links"
import Layout from "../components/layout"

import style from "../styles/index.module.css"

/**
 * Things I like to think about page
 */
export default function Things() {
  return (
    <div>
      <Layout topMargin="3rem">
          <header style={{ marginBottom: `1.5rem`, paddingBottom: `0.1rem`}}>
              <ul style={{ listStyle: `none`, float: `right` }}>
                  <Links _marginRight="1.2rem" pageName="Home" pageDir="/"/>
              </ul>
          </header>
      </Layout>
        <div className={style.almostCenterDiv}>
            <h1 style={{ textAlign: `center` }}>Things I like to think about</h1>
        </div>
        <BottomArrow link="/things/tv"></BottomArrow>
    </div>
  )
}
