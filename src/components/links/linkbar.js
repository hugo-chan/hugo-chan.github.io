import React from "react"

import { AnimatedListLink, ListLink, LastLink } from "./link"



/**
 * A horizontal floating list of links
 * @param {*} props 
 */
export default function LinkBar() {
  return (
    <div style={{ marginTop: `1.3rem`, marginRight: `2rem`}}>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <AnimatedListLink _dir="up" _marginRight="1.2rem" to="/about">
              About
          </AnimatedListLink>
          <AnimatedListLink _dir="up" _marginRight="1.2rem" to="/things">
              Things
          </AnimatedListLink>
          <ListLink _marginRight="1.2rem" to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
          <ListLink _marginRight="1.2rem" to="https://github.com/hugo-chan/">GitHub</ListLink>
          <LastLink to="mailto:hugochan@uchicago.edu">Contact</LastLink>
        </ul>
    </div>
  )
}