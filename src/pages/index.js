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
      <h1 className={style.fade1s} style={{ fontSize: "42px", textAlign: `center` }}>Hi, my name is Hugo Chan.</h1>
      {/* <p className={style.fade2sd}  style={{ textAlign: `center` }}>Welcome to my corner of the internet.</p> */}
      <div style={{ paddingTop:"16px" }}>
        <ul className={style.fade2sd} style={{ textAlign: `center`, margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
          <AnimatedListLink _dir="up" _marginRight="2rem" to="/about">
            <p style={{ fontSize: "26px" }}>About</p>
          </AnimatedListLink>
          <AnimatedListLink _dir="up" to="/things">
            <p style={{ fontSize: "26px" }}>Things</p>
          </AnimatedListLink>
        </ul>
      </div>
      <div style={{ paddingTop:"10px" }}>
        <ul className={style.fade2sd} style={{ textAlign: `center`, margin: `auto`, listStyle: `none`, display: `flex`, justifyContent: "center"}}>
          <ListLink _marginRight="2rem" to="https://www.linkedin.com/in/hugo-chan/">
            <img className={style.linkImgIndex} src="icons/linkedin.jpg" alt="LinkedIn"></img>
          </ListLink>
          <ListLink _marginRight="2rem" to="https://github.com/hugo-chan/">
            <img className={style.linkImgIndex} src="icons/github.jpg" alt="GitHub"></img>
          </ListLink>
          <LastLink to="mailto:hugochan@uchicago.edu">
            <img className={style.linkImgIndex} src="icons/mail.jpg" alt="Contact"></img>
          </LastLink>
        </ul>
      </div>
    </div>
  )
}