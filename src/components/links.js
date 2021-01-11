import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

/**
 * List item that is a link
 * @param {*} props 
 */
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

/**
 * List item that is a link that produces a transition
 * In this case, the transition is a green cover with direction specified
 * @param {*} props 
 */
const AnimatedListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <AniLink cover direction={props._dir} bg="#36BAA0" duration={0.8} to={props.to}>{props.children}</AniLink>
  </li>
)

/**
 * A horizontal floating list of links
 * @param {*} props 
 */
export default function InternalLinks(props) {
  return (
    <div>
        <AnimatedListLink _dir={props.pageName === "About" ? "up": "down"} _marginRight={props._marginRight} to={props.pageDir}>
          {props.pageName}
        </AnimatedListLink>
        <ListLink _marginRight={props._marginRight} to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
        <br></br>
        <ListLink _marginRight={props._marginRight} to="https://github.com/hugo-chan/">GitHub</ListLink>
        <a href="mailto:hugochan@uchicago.edu">Contact</a>
    </div>
  )
}