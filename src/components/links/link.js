import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

/**
 * List item that is a link that produces a transition
 * In this case, the transition is a green cover with direction specified
 * @param {*} props 
 */
export function AnimatedListLink(props) {
  return (
    <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
    <AniLink cover direction={props._dir} bg="#36BAA0" duration={0.8} to={props.to}>{props.children}</AniLink>
  </li>
  )
}

/**
 * List item that is a link
 * @param {*} props 
 */
export function ListLink(props) {
  return (
    <li style={{ display: `inline-block`, marginRight: props._marginRight }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

/**
 * List item that is a link without the margin (not internal)
 * @param {*} props 
 */
export function LastLink(props) {
  return (
    <li style={{ display: `inline-block` }}>
      <a href={props.to}>{props.children}</a>
    </li>
  )
}
