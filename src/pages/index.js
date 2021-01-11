import React from "react"
import { AnimatedListLink, ListLink, LastLink } from "../components/links/link"
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
        <AnimatedListLink _dir="up" _marginRight="2rem" to="/about">
            About
        </AnimatedListLink>
        <AnimatedListLink _dir="up" to="/things">
            Things
        </AnimatedListLink>
      </ul>
      <br></br>
      <ul className={style.fade2sd} style={{ textAlign: `center`, margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
        <ListLink _marginRight="2rem" to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
        <ListLink _marginRight="2rem" to="https://github.com/hugo-chan/">GitHub</ListLink>
        <LastLink to="mailto:hugochan@uchicago.edu">Contact</LastLink>
      </ul>
    </div>
  )
}