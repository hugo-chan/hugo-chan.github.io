import React from "react"
import { Link } from "gatsby"

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
 * A horizontal floating list of links
 * @param {*} props 
 */
export default function ExternalLinks(props) {
  return (
    <div>
        <ListLink _marginRight="2rem" to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
        <ListLink _marginRight="2rem" to="https://github.com/hugo-chan/">GitHub</ListLink>
        <a href="mailto:hugochan@uchicago.edu">Contact</a>
    </div>
  )
}