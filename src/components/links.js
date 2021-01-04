import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const AnimatedListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <AniLink cover direction={props._dir} bg="#36BAA0" duration={0.8} to={props.to}>{props.children}</AniLink>
  </li>
)

export default function Links(props) {
  return (
    <div>
        <AnimatedListLink _dir={props.pageName === "About" ? "up": "down"} _marginRight={props._marginRight} to={props.pageDir}>
          {props.pageName}
        </AnimatedListLink>
        <ListLink _marginRight={props._marginRight} to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
        <ListLink _marginRight={props._marginRight} to="https://github.com/hugo-chan/">GitHub</ListLink>
        <a href="mailto:hugochan@uchicago.edu">Contact</a>
    </div>
  )
}