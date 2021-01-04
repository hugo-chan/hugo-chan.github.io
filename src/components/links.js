import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Links(props) {
  return (
    <div>
        <ListLink _marginRight={props._marginRight} to={props.pageDir}>{props.pageName}</ListLink>
        <ListLink _marginRight={props._marginRight} to="https://www.linkedin.com/in/hugo-chan/">LinkedIn</ListLink>
        <ListLink _marginRight={props._marginRight} to="https://github.com/hugo-chan/">GitHub</ListLink>
        <a href="mailto:hugochan@uchicago.edu">Contact</a>
    </div>
  )
}