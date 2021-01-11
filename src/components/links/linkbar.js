import React from "react"

import { AnimatedListLink, ListLink, LastLink } from "./link"
import style from "../../styles/index.module.css"
import SEO from "../seo"


/**
 * A horizontal floating list of links
 * @param {*} props 
 */
export default function LinkBar() {
  return (
    <div style={{ marginTop: `1.3rem`, marginRight: `2rem`}}>
        <SEO></SEO>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <AnimatedListLink _dir="down" _marginRight="1.2rem" to="/">
                Home
            </AnimatedListLink>
            <AnimatedListLink _dir="up" _marginRight="1.2rem" to="/about">
                About
            </AnimatedListLink>
            <AnimatedListLink _dir="up" _marginRight="1.2rem" to="/things">
                Things
            </AnimatedListLink>
            <ListLink _marginRight="1.2rem" to="https://www.linkedin.com/in/hugo-chan/">
              <img className = {style.linkImg} src="/icons/linkedin.png" alt="LinkedIn"></img>
            </ListLink>
            <ListLink _marginRight="1.2rem" to="https://github.com/hugo-chan/">
              <img className = {style.linkImg} src="/icons/github.png" alt="GitHub"></img>
            </ListLink>
            <LastLink to="mailto:hugochan@uchicago.edu">
              <img className = {style.linkImg} src="/icons/mail.png" alt="Contact"></img>
            </LastLink>
        </ul>
    </div>
  )
}