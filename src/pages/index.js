import React from "react"
import InternalLinks from "../components/internallinks"
import ExternalLinks from "../components/externallinks"
import SEO from "../components/seo"

import style from "../styles/index.module.css"

/**
 * Home page
 */
export default function Home() {
  return (
    <div className= {style.almostCenterDiv} topMargin="5rem">
      <SEO/>
      <h1 className={style.fade1s} style={{ textAlign: `center` }}>Hi, my name is Hugo Chan.</h1>
      <p className={style.fade2sd}  style={{ textAlign: `center` }}>Welcome to my corner of the internet.</p>
      <ul className={style.fade2sd} style={{ textAlign: `center`, margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
        <InternalLinks></InternalLinks>
      </ul>
      <ul className={style.fade2sd} style={{ textAlign: `center`, margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
        <ExternalLinks></ExternalLinks>
      </ul>
    </div>
  )
}