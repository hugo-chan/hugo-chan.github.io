import React from "react"
import Links from "../components/links"
import SEO from "../components/seo"

import style from "../styles/index.module.css"

/**
 * Home page
 */
export default function Home() {
  return (
    <div className= {style.centerDiv} topMargin="5rem">
      <SEO/>
      <h1 className={style.fade1s} style={{ textAlign: `center` }}>Hi, my name is Hugo Chan.</h1>
      <p className={style.fade2sd}  style={{ textAlign: `center` }}>Welcome to my corner of the internet.</p>
      <ul className={style.fade2sd} style={{ margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
        <Links _marginRight="2rem" pageName="About" pageDir="/about"/>
      </ul>
    </div>
  )
}
